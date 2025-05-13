const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/loginPage');
const users = require('../data/users.json');

// Data driven test
for (const user of users) {
  test(`Login test with username: ${user.username}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(user.username, user.password);
    const message = await loginPage.assertLoginSuccess();

    // Kiểm tra kết quả: thành công hay thất bại
    if (user.username === 'tomsmith' && user.password === 'SuperSecretPassword!') {
      await expect(message).toContain('You logged into');
    } else {
      await expect(message).toContain('Your username is invalid!');
    }
  });
}
