import { test, expect } from '@playwright/test'

test('Vidle component', async ({ page }) => {
  const infoLog: string[] = []
  const errorLog: string[] = []

  // Listen for all console events
  page.on('console', (msg) => {
    if (msg.type() === 'info') {
      infoLog.push(msg.text())
    }
    if (msg.type() === 'error') {
      errorLog.push(msg.text())
    }
  })
  await page.goto('/')
  const vidleDiv = page.locator('div.v-idle')
  await expect(vidleDiv).toBeVisible()
  const text = await vidleDiv.innerText()
  expect(text).toBe('00:05')
  // first reminder should be fired after 2 seconds
  await page.waitForTimeout(2000)
  expect(infoLog).toContain('remind_log')
  expect(infoLog.length).toBe(1)
  await page.waitForTimeout(3000)
  // second reminder should be fired after 4 seconds
  // and here 5 seconds passed, so infoLog should
  // contain exactly two items
  expect(infoLog.length).toBe(2)
  expect(errorLog).toContain('idle_log')
})

test('Simulate synchronization', async ({ browser }) => {
  const context = await browser.newContext()
  // open the first tab
  const firstTab = await context.newPage()
  await firstTab.goto('/')
  await firstTab.waitForTimeout(2000)
  const firstTabVidleDiv = firstTab.locator('div.v-idle')
  const firstTabText = await firstTabVidleDiv.innerText()
  expect(firstTabText).toBe('00:03')

  // open the second tab
  const secondTab = await context.newPage()
  await secondTab.goto('/')
  const secondTabVidleDiv = secondTab.locator('div.v-idle')
  const secondTabText = await secondTabVidleDiv.innerText()
  expect(secondTabText).toBe('00:05')

  // perform a mousedown action in the second tab
  await secondTab.mouse.move(100, 100)
  await secondTab.mouse.down()

  // wait two seconds until value higher than 00:03
  // will be visible
  await firstTab.waitForSelector('div.v-idle:text("forced-error")', {
    timeout: 2000,
  })

  // Close the tabs if not needed anymore
  await firstTab.close()
  await secondTab.close()
})
