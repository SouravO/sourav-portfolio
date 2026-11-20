import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

for (const width of [1440, 390]) {
  test(`automatic opening matches the ${width}px hero before revealing copy`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    const dialog = page.getByRole('dialog', { name: 'Cinematic comic introduction' })
    await expect(dialog).toBeVisible()
    await expect(page.locator('.site-shell')).toHaveAttribute('inert', '')
    await expect(page.getByRole('button', { name: 'Skip cinematic introduction' })).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(page.getByRole('button', { name: 'Skip cinematic introduction' })).toBeFocused()
    await expect(dialog).toHaveClass(/phase-story/, { timeout: 4000 })
    for (const shot of ['midnight', 'portrait', 'street', 'rooftop']) {
      const panel = page.locator(`.cinema-shot-${shot}`)
      await expect(panel).toHaveClass(/is-current/)
      await expect.poll(() => panel.locator('img').evaluate(image => image.complete && image.naturalWidth > 0)).toBe(true)
      await page.waitForTimeout(300)
      await page.screenshot({ path: `test-results/opening-${shot}-${width}.png` })
    }
    await expect(dialog).toHaveClass(/phase-pages/, { timeout: 3000 })
    await page.waitForTimeout(750)
    await page.screenshot({ path: `test-results/opening-panels-${width}.png` })
    await expect(dialog).toHaveClass(/phase-logo/, { timeout: 3000 })
    await page.waitForTimeout(1450)
    await page.screenshot({ path: `test-results/opening-title-${width}.png` })
    await expect(dialog).toHaveClass(/phase-settle/, { timeout: 4000 })
    await page.waitForTimeout(1750)
    const match = await page.evaluate(() => {
      const actual = document.querySelector('.cover-picture img')
      const shot = document.querySelector('.intro-landing-frame img')
      const a = actual.getBoundingClientRect(), b = shot.getBoundingClientRect()
      return { src: actual.currentSrc === shot.src,
        error: Math.max(...['x', 'y', 'width', 'height'].map(key => Math.abs(a[key] - b[key]))),
        copy: getComputedStyle(document.querySelector('.cover-title-wrap')).visibility }
    })
    expect(match.src).toBe(true)
    expect(match.error).toBeLessThan(2)
    expect(match.copy).toBe('hidden')
    await page.screenshot({ path: `test-results/opening-match-${width}.png` })
    await expect(dialog).toHaveCount(0, { timeout: 3000 })
    await expect(page.locator('.site-shell')).not.toHaveAttribute('inert')
    await page.waitForTimeout(1600)
    await expect(page.locator('.header')).toHaveCSS('opacity', '1')
    await expect(page.locator('.cover-title-wrap')).toHaveCSS('opacity', '1')
    expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([])
    await page.screenshot({ path: `test-results/opening-reveal-${width}.png` })
    await page.reload()
    await expect(dialog).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(dialog).toHaveCount(0)
    expect(await page.evaluate(() => document.body.style.overflow)).toBe('')
  })
}

test('reduced motion and deep links stay directly accessible', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.goto('/#contact')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await page.goto('/work/day-one-crm')
  await expect(page.getByRole('dialog')).toHaveCount(0)
})

test('slow intro artwork is bounded and resize restores page access', async ({ page }) => {
  let release
  const pending = new Promise(resolve => { release = resolve })
  await page.route('**/illustrations/cinema/*.webp', async route => {
    await pending
    await route.abort()
  })
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  const dialog = page.getByRole('dialog', { name: 'Cinematic comic introduction' })
  await expect(dialog).toHaveClass(/phase-story/, { timeout: 4000 })
  await expect.poll(() => page.locator('.cinema-shot img').first().evaluate(image => image.currentSrc.includes('/illustrations/cover') && image.naturalWidth > 0)).toBe(true)
  await page.setViewportSize({ width: 375, height: 667 })
  await expect(dialog).toHaveCount(0)
  await expect(page.locator('.site-shell')).not.toHaveAttribute('inert')
  expect(await page.evaluate(() => document.body.style.overflow)).toBe('')
  release()
})

test('small-phone cinematic title fits and old slide captions are absent', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 667 })
  await page.goto('/')
  const dialog = page.getByRole('dialog', { name: 'Cinematic comic introduction' })
  await expect(dialog).toHaveClass(/phase-story/, { timeout: 4000 })
  await expect(page.locator('.shot-copy')).toHaveCount(0)
  await expect(page.locator('.cinema-shot img')).toHaveCount(4)
  await expect(dialog).toHaveClass(/phase-logo/, { timeout: 6500 })
  await page.waitForTimeout(1550)
  const title = await page.locator('.studio-frame').boundingBox()
  expect(title.x).toBeGreaterThanOrEqual(0)
  expect(title.x + title.width).toBeLessThanOrEqual(320)
  await page.screenshot({ path: 'test-results/opening-title-320.png' })
  await page.keyboard.press('Escape')
})
