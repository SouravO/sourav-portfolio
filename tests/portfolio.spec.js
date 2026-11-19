import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('homepage navigation, projects, and concept disclosures', async ({
  page,
}) => {
  await page.goto('/')
  await expect(
    page.getByRole('heading', { name: /Hey, I’m.*Sourav/ }),
  ).toBeVisible()
  await page.getByRole('link', { name: 'Explore my work', exact: true }).click()
  await expect(page).toHaveURL(/#work/)
  await page
    .getByRole('link', { name: /^Read Check Your Deals case study/ })
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
  await expect(page.locator('.character-poster')).toBeVisible()
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

test('comic story advances and reverses with native scroll and keyboard scrub', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')
  await expect(page.locator('.character-poster')).toBeVisible()
  await page.getByRole('button', { name: /Talk to comic Sourav/ }).click()
  await expect(
    page.getByRole('button', { name: /Talk to comic Sourav/ }),
  ).toContainText('Let’s make it happen.')
  await page.getByRole('button', { name: 'The process', exact: true }).click()
  await expect(page.locator('.scroll-story')).toHaveAttribute(
    'data-chapter',
    '1',
  )
  await page.getByRole('button', { name: 'The products', exact: true }).click()
  await expect(page.locator('.scroll-story')).toHaveAttribute(
    'data-chapter',
    '2',
  )
  await expect(
    page
      .locator('.scene-projects')
      .getByRole('link', { name: /Check Your Deals/ }),
  ).toBeVisible()
  await page.getByRole('slider', { name: 'Scrub character story' }).focus()
  await page.keyboard.press('Home')
  await expect(page.locator('.scroll-story')).toHaveAttribute(
    'data-chapter',
    '0',
  )
  expect(errors).toEqual([])
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload()
  await expect(page.locator('.workspace-brand')).toBeAttached()
  await page.screenshot({
    path: 'test-results/comic-desktop.png',
    fullPage: true,
  })
})

test('comic poses follow chapters, reverse correctly, and work without WebGL', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      if (String(type).includes('webgl')) return null
      return original.call(this, type, ...args)
    }
  })
  await page.goto('/')
  const portrait = page.locator('.character-poster')
  await expect(portrait).toHaveAttribute('data-pose', 'focus')
  await page.getByRole('button', { name: 'The process', exact: true }).click()
  await expect(portrait).toHaveAttribute('data-pose', 'connect')
  await page.getByRole('button', { name: 'The products', exact: true }).click()
  await expect(portrait).toHaveAttribute('data-pose', 'welcome')
  await expect
    .poll(() =>
      portrait.evaluate((img) => img.complete && img.naturalWidth > 0),
    )
    .toBeTruthy()
  await page
    .locator('.story-stage')
    .screenshot({ path: 'test-results/comic-products.png' })
  await page.getByRole('button', { name: 'The person', exact: true }).click()
  await expect(portrait).toHaveAttribute('data-pose', 'focus')
  await page.getByRole('button', { name: /INK MODE/ }).click()
  await expect(page.locator('.scroll-story')).toHaveClass(/ink-mode/)
  await page
    .locator('.story-stage')
    .screenshot({ path: 'test-results/comic-ink.png' })
  await page.getByRole('button', { name: /INK MODE/ }).click()
  await page
    .locator('.story-stage')
    .screenshot({ path: 'test-results/comic-live-hero.png' })
  await expect(page.locator('canvas')).toHaveCount(0)
})

test('compact mobile story keeps the character and navigation usable', async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 667 })
  await page.goto('/')
  await expect
    .poll(() =>
      page
        .locator('.character-poster')
        .evaluate((img) => img.complete && img.naturalWidth > 0),
    )
    .toBeTruthy()
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy()
  await page.screenshot({ path: 'test-results/comic-mobile-hero.png' })
  await page.getByRole('button', { name: 'The products', exact: true }).click()
  await expect(page.locator('.character-poster')).toHaveAttribute(
    'data-pose',
    'welcome',
  )
  await page.screenshot({ path: 'test-results/comic-mobile-products.png' })
})
