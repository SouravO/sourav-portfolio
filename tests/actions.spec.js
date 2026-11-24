import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => sessionStorage.setItem('skip_intro_test', 'true'))
})

test('repeated logo and section navigation returns to its destination', async ({ page }) => {
  await page.goto('/')
  await page.locator('#contact').scrollIntoViewIfNeeded()
  await page.locator('.wordmark').click()
  await expect.poll(() => page.evaluate(() => scrollY)).toBeLessThan(5)
  const experience = page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Experience', exact: true })
  await experience.click()
  await expect(page.locator('#about')).toBeFocused()
  await page.locator('#contact').scrollIntoViewIfNeeded()
  await experience.click()
  await expect.poll(() => page.locator('#about').evaluate(el => Math.abs(el.getBoundingClientRect().top - (parseFloat(getComputedStyle(el).scrollMarginTop) + (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0))))).toBeLessThan(3)
})

test('all public-route links resolve to existing routes and anchors', async ({ page }) => {
  const paths = ['/', '/projects', '/work/check-your-deals', '/work/day-one-crm', '/not-a-page']
  for (const path of paths) {
    await page.goto(path)
    const links = await page.locator('a[href]').evaluateAll(nodes => nodes.map(node => node.getAttribute('href')))
    for (const href of links) {
      expect(href).not.toMatch(/^(?:#|javascript:)?$/)
      if (href.startsWith('mailto:')) { expect(href).toBe('mailto:o.sourav5@gmail.com'); continue }
      const target = new URL(href, page.url())
      if (target.origin !== new URL(page.url()).origin) { expect(target.protocol).toBe('https:'); continue }
      expect(paths).toContain(target.pathname)
      if (target.pathname === new URL(page.url()).pathname && target.hash) {
        await expect(page.locator(`[id="${target.hash.slice(1)}"]`)).toHaveCount(1)
      }
    }
  }
})

test('archive disclosures, filters, contact and home actions work on a phone', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/projects')
  await page.getByRole('link', { name: 'Open the collection' }).click()
  await expect(page.locator('#collection')).toBeFocused()
  for (const details of await page.locator('.archive-notes').all()) {
    await details.locator('summary').click()
    await expect(details).toHaveAttribute('open', '')
    await expect(details.locator('ul')).toHaveCSS('list-style-type', 'disc')
    await details.locator('summary').click()
    await expect(details).not.toHaveAttribute('open')
  }
  for (const [label, count] of [['Concepts', 2], ['Built & live', 3], ['All projects', 5]]) {
    await page.getByRole('button', { name: label, exact: true }).click()
    await expect(page.locator('.archive-issue')).toHaveCount(count)
  }
  await page.getByRole('link', { name: 'Start a conversation' }).click()
  await expect(page.locator('#contact')).toBeFocused()
  await page.getByRole('link', { name: 'Back to top' }).click()
  await expect.poll(() => page.evaluate(() => scrollY)).toBeLessThan(5)
})

test('experience details navigate to the case study without reloading or leaving scroll locked', async ({ page }) => {
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto('/#about')
  await page.evaluate(() => { window.__actionAudit = true })
  for (const card of await page.locator('.life-card').all()) {
    await card.click()
    await expect(page.getByRole('dialog')).toBeVisible()
    await page.getByRole('button', { name: 'Close details' }).click()
    await expect(card).toBeFocused()
  }
  await page.locator('.life-card-studio').click()
  await page.getByRole('link', { name: 'Explore Day One CRM' }).click()
  await expect(page).toHaveURL(/work\/day-one-crm$/)
  await expect(page.getByRole('dialog')).toHaveCount(0)
  expect(await page.evaluate(() => window.__actionAudit)).toBe(true)
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe('hidden')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Day One CRM')
  expect(errors).toEqual([])
})

test('case study views and every chapter action work for both products', async ({ page }) => {
  for (const [slug, views] of [['check-your-deals', ['Discover', 'Explore', 'Connect']], ['day-one-crm', ['People', 'Execution', 'Progress']]]) {
    await page.goto(`/work/${slug}`)
    await page.getByRole('link', { name: 'Explore the product map' }).click()
    await expect(page.locator('#system')).toBeFocused()
    for (const name of views) {
      const button = page.locator('.map-controls').getByRole('button', { name, exact: true })
      await button.click()
      await expect(button).toHaveAttribute('aria-pressed', 'true')
      await expect(page.locator('.map-canvas h3')).toBeVisible()
    }
    for (const link of await page.locator('.case-index a[href^="#"]').all()) {
      await link.click()
      await expect(page.locator(await link.getAttribute('href'))).toBeFocused()
    }
    await page.locator('.case-index-contact').click()
    await expect(page.locator('#contact')).toBeFocused()
  }
})
