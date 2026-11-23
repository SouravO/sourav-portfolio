import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('homepage navigation, projects, and concept disclosures', async ({
  page,
}) => {
  await page.goto('/')
  await expect(
    page.getByRole('heading', { name: /Ideas into real products./ }),
  ).toBeVisible()
  await page.getByRole('link', { name: 'Explore the work', exact: true }).click()
  await expect(page).toHaveURL(/#work/)
  await page.getByRole('button', { name: '01 CYD' }).click()
  await page.locator('.folio-left').getByRole('link', { name: 'Read case study: Check Your Deals' }).click()
  await expect(
    page.getByRole('heading', {
      name: 'Check Your Deals',
      exact: true,
      level: 1,
    }),
  ).toBeVisible()
  await expect(
    page.getByText(/Planned next: automate product discovery/),
  ).toBeAttached()
  await expect(page.locator('.case-facts')).toContainText('Cofounder')
  await expect(page.locator('#contribution')).toContainText('As cofounder')
  await expect(page.locator('.case-cover')).toContainText('authorized sources')
  await page.goto('/work/day-one-crm')
  await expect(
    page.getByRole('heading', { name: 'Day One CRM', exact: true, level: 1 }),
  ).toBeVisible()
  await expect(
    page.getByText(/Built and used internally at Day One Venture Studio/),
  ).toBeAttached()
  // Concepts are now flipbook pages — verify section exists and contains them
  await page.goto('/#work')
  await expect(page.locator('#work')).toContainText('NOTWO')
  await expect(page.locator('#work')).toContainText('Founder Versa')
  await expect(page.locator('#concepts .folio-description')).toBeAttached()
})


test('mobile, reduced motion and keyboard navigation are accessible', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await expect(page.locator('.cover-picture img')).toBeVisible()
  await expect(page.locator('canvas')).toHaveCount(0)
  await page.keyboard.press('Tab')
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeFocused()
  await page.getByRole('button', { name: 'Open menu' }).click()
  await page.getByRole('link', { name: 'Experience', exact: true }).click()
  await expect(page).toHaveURL(/#about/)
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy()
  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations).toEqual([])
  await page.screenshot({
    path: 'test-results/home-mobile.png',
    fullPage: true,
  })
})

test('adventure cover, live project panels and finale match the approved flow', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1, name: /Ideas into real products./ })).toBeVisible()
  await expect.poll(() => page.locator('.cover-picture img').evaluate(img => img.complete && img.naturalWidth > 0)).toBeTruthy()
  await page.screenshot({ path: 'test-results/adventure-desktop-hero.png' })
  await page.getByRole('link', { name: 'Explore the work', exact: true }).click()
  await expect(page).toHaveURL(/#work/)
  await expect(page.locator('#work')).toBeVisible()
  await page.locator('.folio-sticky').screenshot({ path: 'test-results/adventure-projects.png' })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/#contact')
  await expect(page.getByRole('heading', { name: 'To be continued…' })).toBeVisible()
  await expect(page.locator('.contact-cta')).toHaveAttribute('href', 'mailto:o.sourav5@gmail.com')
  await expect.poll(() => page.locator('.contact-picture img').evaluate(img => img.complete && img.naturalWidth > 0)).toBeTruthy()
  await page.context().grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.getByRole('button', { name: 'Copy email address' }).click()
  await expect(page.getByRole('status')).toContainText('Copied')
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('o.sourav5@gmail.com')
  await page.locator('#contact').screenshot({ path: 'test-results/adventure-finale.png' })
  expect(errors).toEqual([])
})

test('compact mobile artwork, menu and footer have no overflow or broken images', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 })
  await page.goto('/')
  await expect.poll(() => page.locator('.cover-picture img').evaluate(img => img.complete && img.naturalWidth > 0)).toBeTruthy()
  await expect(page.locator('.cover-picture img')).toHaveJSProperty('currentSrc', 'http://127.0.0.1:5173/illustrations/cover-mobile.webp')
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy()
  await page.screenshot({ path: 'test-results/adventure-mobile-hero.png' })
  await page.getByRole('button', { name: 'Open menu' }).click()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false')
  await page.goto('/#contact')
  await expect(page.getByRole('heading', { name: 'To be continued…' })).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy()
  await expect.poll(() => page.locator('.contact-picture img').evaluate(img => img.complete && img.naturalWidth > 0)).toBeTruthy()
  await page.locator('#contact').screenshot({ path: 'test-results/adventure-mobile-finale.png' })
})

test('desktop reduced-motion page and case-study artwork are accessible', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations).toEqual([])
  await page.locator('#contact').scrollIntoViewIfNeeded()
  await expect.poll(() => page.locator('.contact-picture img').evaluate(img => img.complete && img.naturalWidth > 0)).toBeTruthy()
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  await page.screenshot({ path: 'test-results/adventure-full-page.png', fullPage: true })
  await page.goto('/work/day-one-crm')
  await expect.poll(() => page.locator('.case-facts > img').evaluate(img => img.complete && img.naturalWidth > 0)).toBeTruthy()
  const caseResults = await new AxeBuilder({ page }).analyze()
  expect(caseResults.violations).toEqual([])
  await page.screenshot({ path: 'test-results/adventure-case-study.png', fullPage: true })
})

test('tablet and small-phone layouts keep artwork and controls inside the viewport', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (const width of [320, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy()
    await page.goto('/#about')
    await expect(page.getByRole('heading', { name: /Work experience/i })).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy()
    await page.goto('/#contact')
    await expect(page.locator('.contact-cta')).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy()
  }
})

test('visitor narrative leads with value and proof across core sections', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.cover-intro')).toContainText('I’m Sourav.')
  await expect(page.locator('.profile-evidence')).toContainText('Day One Venture Studio')
  await expect(page.locator('#work')).toBeAttached()
  await expect(page.locator('#work')).toContainText('deal discovery platform')
  await expect(page.locator('#work')).toContainText('Day One CRM')
  const ids = await page.locator('main section[id], main aside[id]').evaluateAll(nodes => nodes.map(node => node.id))
  expect(ids.indexOf('work')).toBeLessThan(ids.indexOf('about'))
  expect(ids.indexOf('about')).toBeLessThan(ids.indexOf('approach'))
  expect(ids.indexOf('approach')).toBeLessThan(ids.indexOf('contact'))
  await expect(page.getByRole('link', { name: 'Let’s talk', exact: true }).first()).toBeVisible()
})

test('project maps explain real workflows and case-study chapters remain navigable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/#work')
  // ProductMap lives inside case studies; navigate via CYD case-study link
  await page.screenshot({ path: 'test-results/work-index-desktop.png', fullPage: true })
  await page.locator('.folio-reading').getByRole('link', { name: 'Read case study: Check Your Deals', exact: true }).click()
  await page.getByRole('navigation', { name: 'Case study sections' }).getByRole('link', { name: 'Inside the product', exact: true }).click()
  await expect(page).toHaveURL(/check-your-deals#system/)
  await page.locator('#system').getByRole('button', { name: 'Explore', exact: true }).click()
  await expect(page.locator('#system .map-canvas')).toContainText('Product detail pages')
  await page.getByRole('navigation', { name: 'Case study sections' }).getByRole('link', { name: 'Built scope', exact: true }).click()
  await expect(page.locator('#scope')).toBeFocused()
  await page.getByRole('link', { name: 'Day One CRM', exact: true }).click()
  await expect(page.getByRole('heading', { level: 1, name: 'Day One CRM' })).toBeVisible()
  await page.setViewportSize({ width: 320, height: 800 })
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy()
  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations).toEqual([])
  await page.screenshot({ path: 'test-results/work-case-mobile.png', fullPage: true })
})
