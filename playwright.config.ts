import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: './test/e2e/',
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:1234',
  },
  use: {
    baseURL: 'http://localhost:1234',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
}

export default config
