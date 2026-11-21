import { test, expect } from '@playwright/test'

for (const width of [320, 390, 1440]) {
  test(`homepage opens directly without intro or gimmick controls at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    const requests = []
    page.on('request', request => requests.push(request.url()))
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1, name: /Ideas into real products/ })).toBeVisible()
    await expect(page.locator('.site-shell')).not.toHaveAttribute('inert')
    await expect(page.getByRole('dialog')).toHaveCount(0)
    await expect(page.getByRole('button', { name: /intro|ink mode|torch/i })).toHaveCount(0)
    await expect(page.getByRole('region', { name: 'Audio controls' })).toHaveCount(0)
    expect(requests.some(url => /MarvelIntro|audioEngine|ViceCityRadio|intro\.css|radio\.css/.test(url))).toBe(false)
    expect(await page.evaluate(() => document.body.style.overflow)).not.toBe('hidden')
    await page.reload()
    await expect(page.getByRole('dialog')).toHaveCount(0)
    await page.screenshot({ path: `test-results/direct-entry-${width}.png` })
  })
}

test('active routes have no redundant presentation notes or stale workspace metadata', async ({ page }) => {
  for (const path of ['/', '/projects', '/work/check-your-deals', '/work/day-one-crm']) {
    await page.goto(path)
    await expect(page.locator('body')).not.toContainText(/MARVEL INTRO|INK MODE|Public-safe|not a product screenshot|Illustrated representation|supplied module descriptions|CLEARLY LABELED/)
    expect(await page.locator('meta[name="description"]').getAttribute('content')).not.toMatch(/workspace/i)
    expect(await page.locator('meta[property="og:description"]').getAttribute('content')).not.toMatch(/workspace/i)
  }
})
