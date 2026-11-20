import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => sessionStorage.setItem('skip_intro_test', 'true'))
  await page.emulateMedia({ reducedMotion: 'reduce' })
})

test('portrait chapters support keyboard opening, native focus containment, navigation and restoration', async ({ page }) => {
  await page.goto('/#about')
  const opener = page.getByRole('button', { name: /The college years/ })
  await expect(page.getByRole('button', { name: 'Torch off', exact: true })).toHaveAttribute('aria-pressed', 'false')
  await opener.focus()
  await page.keyboard.press('Enter')
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await expect(dialog.getByRole('heading', { name: 'Where it started.' })).toBeVisible()
  await expect(dialog.getByRole('button', { name: 'Close chapter' })).toBeFocused()
  await page.keyboard.press('Shift+Tab')
  expect(await dialog.evaluate(node => node.contains(document.activeElement))).toBeTruthy()
  await dialog.getByRole('button', { name: 'Next chapter' }).click()
  await expect(dialog.getByRole('heading', { name: 'Behind the broadcast.' })).toBeVisible()
  await dialog.getByRole('button', { name: 'Previous chapter' }).click()
  await expect(dialog.getByRole('heading', { name: 'Where it started.' })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(dialog).toHaveCount(0)
  await expect(opener).toBeFocused()
  await page.getByRole('button', { name: 'Torch off', exact: true }).click()
  await expect(page.getByRole('button', { name: 'Torch on', exact: true })).toHaveAttribute('aria-pressed', 'true')
})

test('responsive boards keep portraits loaded, labels readable, pins attached and no horizontal overflow', async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 })
    await page.goto('/#about')
    const cards = page.locator('.life-card')
    await expect(cards).toHaveCount(8)
    for (const card of await cards.all()) {
      await card.scrollIntoViewIfNeeded()
      await expect.poll(() => card.locator('img').evaluate(img => img.complete && img.naturalWidth > 0)).toBeTruthy()
      if (!(await card.getAttribute('class')).includes('life-card-sourav')) {
        expect(await card.locator('img').getAttribute('src')).not.toBe('/illustrations/cinema/portrait.webp')
      }
      const rect = await card.boundingBox()
      expect(rect.x).toBeGreaterThanOrEqual(0)
      expect(rect.x + rect.width).toBeLessThanOrEqual(width + 1)
    }
    await page.mouse.move(0, 0)
    await expect.poll(() => page.locator('.life-board').evaluate(board => {
      const bounds = board.getBoundingClientRect()
      const lines = [...board.querySelectorAll('.life-threads line')].filter(line => getComputedStyle(line).display !== 'none')
      return lines.every(line => ['from', 'to'].every((end, index) => {
        const pin = board.querySelector(`.life-card-${line.dataset[end]} .life-pin`).getBoundingClientRect()
        const x = Number(line.getAttribute(`x${index + 1}`)) / 100 * board.clientWidth + bounds.left + board.clientLeft
        const y = Number(line.getAttribute(`y${index + 1}`)) / 100 * board.clientHeight + bounds.top + board.clientTop
        return Math.abs(x - pin.left - pin.width / 2) < 2 && Math.abs(y - pin.top - pin.height / 2) < 2
      }))
    })).toBeTruthy()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy()
    if (width <= 900) expect(await page.locator('.life-board').evaluate(node => node.offsetHeight)).toBeGreaterThan(1000)
    if (width === 390 || width === 1440) await page.locator('.life-section').screenshot({ path: `test-results/life-board-${width}.png`, style: ".skip-link, .vice-city-radio-bar { visibility: hidden !important; }" })
  }
})

test('board and open chapter pass accessibility checks on phone and desktop', async ({ page }) => {
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/#about')
    expect((await new AxeBuilder({ page }).include('#about').analyze()).violations).toEqual([])
    await page.getByRole('button', { name: /The studio chapter/ }).click()
    expect((await new AxeBuilder({ page }).include('.life-inspector').analyze()).violations).toEqual([])
    await page.getByRole('dialog').screenshot({ path: `test-results/life-inspector-${width}.png` })
    await page.getByRole('button', { name: 'Close chapter' }).click()
  }
})

test('missing artwork falls back without losing the chapter or keyboard access', async ({ page }) => {
  await page.route('**/illustrations/life-board/college*.webp', route => route.abort())
  await page.goto('/#about')
  const opener = page.getByRole('button', { name: /The college years/ })
  await opener.scrollIntoViewIfNeeded()
  await expect(opener.locator('img')).toHaveAttribute('src', '/illustrations/cinema/portrait.webp')
  await opener.click()
  await expect(page.getByRole('dialog').getByRole('heading', { name: 'Where it started.' })).toBeVisible()
  await expect(page.getByRole('dialog').locator('img')).toHaveAttribute('src', '/illustrations/cinema/portrait.webp')
})
