// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: true, // bắt buộc trên GitHub Actions
    screenshot: 'on',      // chụp ảnh nếu lỗi
    video: 'on' // quay video nếu fail hoặc retry
  },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'WebKit', use: { browserName: 'webkit' } },
  ]
});
