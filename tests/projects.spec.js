import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('project archive filters honest statuses and opens project evidence', async ({ page }) => {
  await page.goto('/projects')
  await expect(page).toHaveTitle('Projects · Sourav')
  await expect(page.locator('.marvel-intro')).toHaveCount(0)
  await expect(page.locator('.archive-issue')).toHaveCount(4)
  await expect(page.locator('.archive-issue-cyd')).toContainText('Cofounder')
  await expect(page.locator('.archive-issue-cyd')).toContainText('authorized sources')
  await page.getByRole('button', { name: 'Concepts', exact: true }).click()
  await expect(page.locator('.archive-issue')).toHaveCount(2)
  await expect(page.getByRole('status').filter({ hasText: 'stories on the shelf' })).toHaveText('2 stories on the shelf')
  await page.locator('.archive-issue-versa summary').focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('.archive-issue-versa details')).toHaveAttribute('open', '')
  await expect(page.locator('.archive-issue-versa details')).toContainText('Proposed workflow')
  await expect(page.locator('.archive-issue-versa details li')).toHaveCount(4)
  await page.getByRole('button', { name: 'Built & live', exact: true }).click()
  await expect(page.locator('.archive-issue')).toHaveCount(2)
  await expect(page.locator('.archive-issue-crm')).toContainText('Used internally')
  await page.getByRole('link', { name: 'Read CYD case study', exact: true }).click()
  await expect(page).toHaveURL(/work\/check-your-deals$/)
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Projects', exact: true }).click()
  await expect(page.locator('.archive-issue')).toHaveCount(4)
})

test('project archive stays readable and accessible across viewports', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 })
    await page.goto('/projects')
    await page.evaluate(() => document.fonts.ready)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy()
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    if ([390, 1440].includes(width)) {
      await page.screenshot({ path: `test-results/projects-${width}.png`, fullPage: true })
      await page.locator('.archive-issue-cyd summary').click()
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([])
    }
  }
})
