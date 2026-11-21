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
    await page.emulateMedia({ reducedMotion: 'reduce' })
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


test('opening has a paper lining throughout forward and reverse movement', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/#work')
  await page.getByRole('button', { name: '01 CYD' }).click()
  for (const progress of [.05, .1, .13, .1344, .14, .16, .2, .14, .1344, .13, .1, .05]) {
    await scrub(page, progress)
    await expect(page.locator('.folio-paper-bed')).toBeVisible()
    await expect(page.locator('.folio-left')).toHaveCSS('visibility', 'visible')
    await expect(page.locator('.folio-left h3')).toHaveText('Check Your Deals')
    const color = await page.locator('.folio-paper-bed').evaluate(el => getComputedStyle(el).backgroundColor)
    expect(color).toBe('rgb(247, 237, 207)')
  }
  await scrub(page, .1344)
  await page.screenshot({ path: 'test-results/book-opening-paper.png' })
})

test('mobile book opens, turns story/art leaves, reverses and navigates every project', async ({ page }) => {
  for (const size of [{ width: 320, height: 568 }, { width: 375, height: 667 }, { width: 390, height: 844 }, { width: 768, height: 900 }]) {
    await page.setViewportSize(size)
    await page.goto('/#work')
    const book = page.locator('.folio-book')
    await expect(book).toHaveAttribute('data-compact', 'true')
    await expect(page.locator('.folio-reading')).toBeHidden()
    await page.getByRole('button', { name: '01 CYD' }).click()
    await expect(book).toHaveAttribute('data-open', 'true')
    await expect(book).toHaveAttribute('data-page', '0')
    await expect(page.locator('.folio-mobile-sheet h3')).toHaveText('Check Your Deals')
    await page.getByRole('button', { name: 'Next page', exact: true }).click()
    await expect(book).toHaveAttribute('data-page', '1')
    await expect(page.locator('.folio-mobile-sheet img')).toBeVisible()
    await page.getByRole('button', { name: 'Previous page', exact: true }).click()
    await expect(book).toHaveAttribute('data-page', '0')
    await scrub(page, .28)
    await expect(page.locator('.folio-turn')).toBeVisible()
    await scrub(page, .32)
    await expect(book).toHaveAttribute('data-page', '1')
    for (const [name, title] of [['01 CYD', 'Check Your Deals'], ['02 DAY ONE', 'Day One CRM'], ['03 NOTWO', 'NOTWO'], ['04 Founder Versa', 'Founder Versa']]) {
      await page.getByRole('button', { name }).click()
      await expect(page.locator('.folio-mobile-sheet h3')).toHaveText(title)
      const fit = await page.locator('.folio-mobile-sheet > .folio-page').evaluate(el => el.scrollHeight <= el.clientHeight + 1)
      expect(fit).toBeTruthy()
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy()
    }
    const nav = await page.locator('.folio-nav').boundingBox()
    expect(nav.y + nav.height).toBeLessThan(size.height - 50)
    const results = await new AxeBuilder({ page }).include('#work').analyze()
    expect(results.violations).toEqual([])
  }
  await page.setViewportSize({ width: 390, height: 844 })
  await page.getByRole('button', { name: '02 DAY ONE' }).click()
  await page.locator('.folio-mobile-sheet').getByRole('link', { name: 'Read case study: Day One CRM' }).click()
  await expect(page).toHaveURL(/work\/day-one-crm/)
})


test('phone touch controls open the book, turn a leaf and follow a case link', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true })
  const page = await context.newPage()
  await page.addInitScript(() => sessionStorage.setItem('skip_intro_test', 'true'))
  await page.goto('/#work')
  await page.getByRole('button', { name: '01 CYD' }).tap()
  await expect(page.locator('.folio-book')).toHaveAttribute('data-open', 'true')
  await page.getByRole('button', { name: 'Next page', exact: true }).tap()
  await expect(page.locator('.folio-book')).toHaveAttribute('data-page', '1')
  await page.getByRole('button', { name: 'Previous page', exact: true }).tap()
  await page.locator('.folio-mobile-sheet').getByRole('link', { name: 'Read case study: Check Your Deals' }).tap()
  await expect(page).toHaveURL(/work\/check-your-deals/)
  await context.close()
})

for (const width of [1440, 390]) {
  test(`prepared ${width}px book faces survive continuous forward and reverse scrolling`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/#work')
    await page.getByRole('button', { name: '01 CYD' }).click()
    await page.locator('.folio-book').evaluate(async book => {
      await Promise.all([...book.querySelectorAll('img')].map(img => img.decode().catch(() => {})))
    })
    const artworkRequests = []
    page.on('request', request => { if (/\/illustrations\/(deals|crm|cover|workshop)\.webp(?:\?|$)/.test(request.url())) artworkRequests.push(request.url()) })
    const result = await page.locator('.folio-book').evaluate(async book => {
      const surfaces = [...book.querySelectorAll('[data-story], [data-art], [data-leaf], [data-turn]')]
      let rebuilt = 0
      let invalidFrames = 0
      const observer = new MutationObserver(records => { rebuilt += records.filter(record => record.type === 'childList').length })
      surfaces.forEach(surface => observer.observe(surface, { childList: true, subtree: true }))
      const section = document.querySelector('#work')
      const start = section.getBoundingClientRect().top + scrollY
      const distance = section.offsetHeight - innerHeight
      for (const direction of [1, -1]) {
        for (let i = 0; i <= 70; i++) {
          const progress = .23 + .7 * (direction === 1 ? i / 70 : 1 - i / 70)
          window.scrollTo({ top: start + progress * distance, behavior: 'instant' })
          await new Promise(requestAnimationFrame)
          const visible = surfaces.filter(surface => !surface.hidden)
          const turns = visible.filter(surface => surface.dataset.turn !== undefined)
          const faces = visible.filter(surface => surface.dataset.turn === undefined)
          if (faces.length !== (book.dataset.compact === 'true' ? 1 : 2) || turns.length > 1 || turns.some(surface => Number(surface.dataset.turn) !== Number(book.dataset.page))) invalidFrames++
        }
      }
      await new Promise(resolve => setTimeout(resolve, 160))
      observer.disconnect()
      return { rebuilt, invalidFrames, connected: surfaces.every(surface => surface.isConnected), page: Number(book.dataset.page), angle: parseFloat(book.style.getPropertyValue('--turn-angle')) }
    })
    expect(result).toEqual({ rebuilt: 0, invalidFrames: 0, connected: true, page: 0, angle: 0 })
    expect(artworkRequests).toEqual([])
    await page.locator('.folio-sticky').screenshot({ path: `test-results/book-stable-${width}.png` })
  })
}

test('unavailable artwork keeps paper and story content usable', async ({ page }) => {
  await page.route('**/illustrations/deals.webp', route => route.abort())
  await page.goto('/#work')
  await page.getByRole('button', { name: '01 CYD' }).click()
  await expect(page.locator('.folio-left h3')).toHaveText('Check Your Deals')
  await expect(page.locator('.folio-paper-bed')).toBeVisible()
  await page.getByRole('button', { name: '02 DAY ONE' }).click()
  await expect(page.locator('.folio-left h3')).toHaveText('Day One CRM')
})


test('desktop left footprint unfolds only as the cover crosses the spine', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/#work')
  for (const progress of [.025, .08, .12, .1344, .15, .175, .2, .175, .15, .1344, .12, .08]) {
    await scrub(page, progress)
    const geometry = await page.locator('.folio-book').evaluate(book => {
      const style = getComputedStyle(book)
      return { angle: parseFloat(style.getPropertyValue('--cover-angle')), unfold: parseFloat(style.getPropertyValue('--unfold')),
        width: book.clientWidth, paperLeft: parseFloat(getComputedStyle(book.querySelector('.folio-paper-bed')).left),
        boardLeft: parseFloat(getComputedStyle(book.querySelector('.folio-board')).left) }
    })
    const projected = Math.max(0, -Math.cos(geometry.angle * Math.PI / 180))
    expect(geometry.unfold).toBeCloseTo(projected, 4)
    expect(geometry.paperLeft).toBeCloseTo(geometry.width * .5 * (1 - projected), 0)
    expect(geometry.boardLeft + 8).toBeCloseTo(geometry.paperLeft, 0)
    if (geometry.angle >= -90) expect(geometry.unfold).toBe(0)
  }
  await scrub(page, .16)
  await page.screenshot({ path: 'test-results/book-unfolding.png' })
})
