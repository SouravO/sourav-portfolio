import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => sessionStorage.setItem('skip_intro_test', 'true'))
})

async function scrub(page, progress) {
  await page.locator('#work').evaluate((el, p) => {
    window.scrollTo({ top: el.getBoundingClientRect().top + scrollY + p * (el.offsetHeight - innerHeight), behavior: 'instant' })
  }, progress)
  await page.waitForTimeout(120)
}

test('book pins, opens, holds readable spreads, turns both ways and releases', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/#work')
  await scrub(page, 0)
  await expect(page.locator('.folio-book')).toHaveAttribute('data-open', 'false')
  await scrub(page, .24)
  await expect(page.locator('.folio-book')).toHaveAttribute('data-open', 'true')
  const book = await page.locator('.folio-book').boundingBox()
  await expect(page.locator('.folio-left h3')).toHaveText('Check Your Deals')
  await scrub(page, .32)
  await expect(page.locator('.folio-turn')).toHaveCount(0)
  const held = await page.locator('.folio-book').boundingBox()
  expect(Math.abs(held.y - book.y)).toBeLessThan(2)
  await scrub(page, .375)
  await expect(page.locator('.folio-turn')).toBeVisible()
  await page.screenshot({ path: 'test-results/book-turn.png' })
  await scrub(page, .44)
  await expect(page.locator('.folio-left h3')).toHaveText('Day One CRM')
  await expect(page.locator('.folio-left')).toContainText('Built · Used internally')
  await scrub(page, .24)
  await expect(page.locator('.folio-left h3')).toHaveText('Check Your Deals')
  await page.getByRole('button', { name: '04 Founder Versa' }).click()
  await expect(page.locator('.folio-left h3')).toHaveText('Founder Versa')
  await expect(page.locator('.folio-right')).toContainText('proposed, not shipped')
  await page.getByRole('button', { name: 'Previous project' }).click()
  await expect(page.locator('.folio-left h3')).toHaveText('NOTWO')
  await scrub(page, 1)
  await page.mouse.wheel(0, 700)
  await expect.poll(() => page.locator('.folio-sticky').evaluate(el => el.getBoundingClientRect().top)).toBeLessThan(-100)
})

test('every project fits a laptop spread and project links remain usable', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 })
  await page.goto('/#work')
  const nav = page.getByRole('navigation', { name: 'Project book chapters' })
  for (const chapter of ['01 CYD', '02 DAY ONE', '03 NOTWO', '04 Founder Versa']) {
    await nav.getByRole('button', { name: chapter }).click()
    await expect(nav.getByRole('button', { name: chapter })).toHaveAttribute('aria-current', 'step')
    const fits = await page.locator('.folio-spread .folio-page').evaluateAll(pages => pages.every(p => p.scrollHeight <= p.clientHeight + 1))
    expect(fits).toBeTruthy()
    const box = await page.locator('.folio-book').boundingBox()
    const navBox = await nav.boundingBox()
    expect(box.y + box.height).toBeLessThan(navBox.y)
  }
  await nav.getByRole('button', { name: '02 DAY ONE' }).click()
  await page.locator('.folio-left').getByRole('link', { name: 'Read case study: Day One CRM' }).click()
  await expect(page).toHaveURL(/work\/day-one-crm/)
})

test('phone and reduced-motion reading layouts expose all projects without overflow', async ({ page }) => {
  for (const width of [320, 390, 768, 820, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    await page.emulateMedia({ reducedMotion: width === 1440 ? 'reduce' : 'no-preference' })
    await page.goto('/#work')
    await expect(page.locator('.folio-reading')).toBeVisible()
    await expect(page.locator('.folio-desktop')).toBeHidden()
    await expect(page.locator('.folio-reading h3')).toHaveCount(4)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy()
    const results = await new AxeBuilder({ page }).include('#work').analyze()
    expect(results.violations).toEqual([])
  }
})

test('open desktop spread is accessible', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/#work')
  await page.getByRole('button', { name: '01 CYD' }).click()
  const results = await new AxeBuilder({ page }).include('#work').analyze()
  expect(results.violations).toEqual([])
})

test('concept deep link opens the planning chapter', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/#concepts')
  await expect(page.locator('.folio-left h3')).toHaveText('NOTWO')
  await expect(page.locator('.folio-book')).toHaveAttribute('data-open', 'true')
})
