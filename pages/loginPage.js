class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = 'button[type="submit"]';
	this.flashMessage = '.flash';
  };

  async goto() {
    await this.page.goto('http://the-internet.herokuapp.com/login');
  };

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  };
  async assertLoginSuccess() {
    await this.page.waitForSelector(this.flashMessage);
    const message = await this.page.locator(this.flashMessage).textContent();
    return message;
  }
}
module.exports = { LoginPage }; // ✅ Dùng CommonJS exports
