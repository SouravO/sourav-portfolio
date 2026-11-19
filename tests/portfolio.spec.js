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
  await page
    .getByRole('link', { name: /^Read case study for Check Your Deals/ })
    .click()
  await expect(
    page.getByRole('heading', {
      name: 'Check Your Deals',
      exact: true,
      level: 1,
    }),
  ).toBeVisible()
  await expect(
    page.getByText(/Automation for product discovery/),
  ).toBeAttached()
  await page.goto('/work/day-one-crm')
  await expect(
    page.getByRole('heading', { name: 'Day One CRM', exact: true, level: 1 }),
  ).toBeVisible()
  await expect(
    page.getByText(/Built and used internally\. All diagrams/),
  ).toBeAttached()
  await page.goto('/#concepts')
  const notwo = page.getByRole('button', { name: /NOTWO/ }).first()
  await notwo.click()
  await expect(notwo).toHaveAttribute('aria-expanded', 'true')
  await expect(page.getByText(/These capabilities are proposed/)).toBeVisible()
})

test('workspace project perspectives, local commands and unconfigured live AI fallback', async ({
  page,
}) => {
  await page.goto('/#workspace')
  await page.getByRole('button', { name: 'Day One CRM', exact: true }).click()
  await page.getByRole('button', { name: 'Engineering', exact: true }).click()
  await expect(page.locator('.agent-response')).toContainText(
    'Built and used internally',
  )
  await page.getByRole('button', { name: 'Terminal', exact: true }).click()
  await page.getByLabel('Terminal command').fill('projects')
  await page.getByRole('button', { name: 'Run', exact: true }).click()
  await expect(page.getByRole('log')).toContainText('Founder Versa: Concept')
  await page.getByLabel('Terminal command').fill('clear')
  await page.getByRole('button', { name: 'Run', exact: true }).click()
  await expect(page.getByRole('log')).toContainText('Terminal cleared')
  await page.getByRole('button', { name: 'Ask AI', exact: true }).click()
  await page.getByRole('button', { name: 'What has Sourav shipped?' }).click()
  await expect(page.getByRole('alert')).toContainText(
    'Live AI is not connected',
  )
})

test('AI success and cancellation preserve usable controls', async ({
  page,
}) => {
  await page.route('**/api/chat', (route) =>
    route.fulfill({
      json: {
        answer: 'CYD is publicly deployed. NOTWO is planning work.',
        sources: [
          {
            id: 'cyd',
            label: 'Check Your Deals case study',
            href: '/work/check-your-deals',
          },
        ],
        remaining: 4,
      },
    }),
  )
  await page.goto('/#workspace')
  await page.getByRole('button', { name: 'Ask AI', exact: true }).click()
  await page
    .getByLabel('Ask about my work', { exact: true })
    .fill('What is live?')
  await page.getByRole('button', { name: 'Send question' }).click()
  await expect(page.getByRole('log')).toContainText('CYD is publicly deployed')
  await expect(
    page.getByRole('link', {
      name: 'Check Your Deals case study',
      exact: true,
    }),
  ).toBeVisible()
  await expect(
    page.getByText('4 requests left this hour.', { exact: false }),
  ).toBeVisible()
  await page.unroute('**/api/chat')
  await page.route('**/api/chat', async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    await route.fulfill({ json: {} }).catch(() => {})
  })
  await page
    .getByLabel('Ask about my work', { exact: true })
    .fill('Tell me more')
  await page.getByRole('button', { name: 'Send question' }).click()
  await page.getByRole('button', { name: 'Stop response' }).click()
  await expect(page.getByRole('alert')).toContainText('Request stopped')
  await expect(
    page.getByLabel('Ask about my work', { exact: true }),
  ).toBeEnabled()
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
  await page.getByRole('link', { name: 'Workspace', exact: true }).click()
  await expect(page).toHaveURL(/#workspace/)
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
  await page.getByRole('button', { name: /INK MODE/ }).click()
  await expect(page.locator('.adventure-cover')).toHaveClass(/ink-mode/)
  await page.getByRole('button', { name: /INK MODE/ }).click()
  await page.getByRole('link', { name: 'Explore the work', exact: true }).click()
  await expect(page).toHaveURL(/#work/)
  await expect(page.locator('.featured-projects')).toBeVisible()
  await page.locator('.featured-projects').screenshot({ path: 'test-results/adventure-projects.png' })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/#workspace')
  await expect(page.getByRole('heading', { name: 'The workshop.' })).toBeVisible()
  await page.locator('.workshop-spread').screenshot({ path: 'test-results/adventure-workshop.png' })
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
    await page.goto('/#workspace')
    await expect(page.getByRole('button', { name: 'Architecture', exact: true })).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy()
    await page.goto('/#contact')
    await expect(page.locator('.contact-cta')).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy()
  }
})

test('visitor narrative leads with value and proof, and direct questions open the assistant', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.cover-intro')).toContainText('I’m Sourav.')
  await expect(page.locator('.profile-evidence')).toContainText('Day One Venture Studio')
  await expect(page.locator('.project-feature-cyd .project-info')).toContainText('deal discovery platform')
  await expect(page.locator('.project-feature-crm .project-info')).toContainText('My contribution')
  const ids = await page.locator('main section[id]').evaluateAll(nodes => nodes.map(node => node.id))
  expect(ids.indexOf('work')).toBeLessThan(ids.indexOf('about'))
  expect(ids.indexOf('about')).toBeLessThan(ids.indexOf('toolkit'))
  expect(ids.indexOf('toolkit')).toBeLessThan(ids.indexOf('workspace'))
  await page.locator('.cover-ask').click()
  await expect(page).toHaveURL(/mode=chat#workspace/)
  await expect(page.getByRole('button', { name: 'Ask AI', exact: true })).toHaveAttribute('aria-pressed', 'true')
  await expect(page.getByLabel('Ask about my work', { exact: true })).toBeVisible()
  await page.locator('#workspace').getByRole('button', { name: 'Explore', exact: true }).click()
  await page.locator('.portrait-caption').getByRole('link', { name: 'Ask about my work' }).click()
  await expect(page.getByLabel('Ask about my work', { exact: true })).toBeVisible()
  await page.reload()
  await expect(page.getByRole('button', { name: 'Ask AI', exact: true })).toHaveAttribute('aria-pressed', 'true')
})

test('project maps explain real workflows and case-study chapters remain navigable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/#work')
  const deals = page.locator('.work-feature.project-feature-cyd')
  await deals.getByRole('button', { name: 'Connect', exact: true }).click()
  await expect(deals.getByRole('button', { name: 'Connect', exact: true })).toHaveAttribute('aria-pressed', 'true')
  await expect(deals.locator('.map-canvas')).toContainText('Further discovery and update automation is planned.')
  const crm = page.locator('.work-feature.project-feature-crm')
  await crm.getByRole('button', { name: 'Progress', exact: true }).click()
  await expect(crm.locator('.map-canvas')).toContainText('Weekly tracking')
  await page.screenshot({ path: 'test-results/work-index-desktop.png', fullPage: true })
  await deals.getByRole('link', { name: 'Read case study for Check Your Deals', exact: true }).click()
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

test('Marvel comic intro bumper and Vice City synthwave radio audio controls', async ({ page }) => {
  await page.goto('/')
  const introBtn = page.getByRole('button', { name: /MARVEL INTRO/ }).first()
  await expect(introBtn).toBeVisible()
  await introBtn.click()
  const introDialog = page.getByRole('dialog', { name: 'Cinematic comic introduction' })
  await expect(introDialog).toBeVisible()
  await expect(page.getByRole('button', { name: 'Skip cinematic introduction' })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(introDialog).not.toBeVisible()

  const radio = page.getByRole('region', { name: 'Audio controls' })
  await expect(radio).toBeVisible()
  // Intro completion automatically starts the Vice City synthwave BGM
  const pauseBtn = radio.getByRole('button', { name: /Pause Vice City synth BGM/ })
  await expect(pauseBtn).toBeVisible()
  await expect(radio.locator('.eq-bar.active')).toHaveCount(5)
  // Clicking pause stops the BGM
  await pauseBtn.click()
  const playBtn = radio.getByRole('button', { name: /Play Vice City synth BGM/ })
  await expect(playBtn).toBeVisible()
  // Mute toggle
  const muteBtn = radio.getByRole('button', { name: /Mute sound/ })
  await muteBtn.click()
  await expect(radio.getByRole('button', { name: /Unmute sound/ })).toBeVisible()
  const axeResults = await new AxeBuilder({ page }).include('.vice-city-radio-bar').analyze()
  expect(axeResults.violations).toEqual([])
})
