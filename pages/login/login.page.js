const locators = require('./login.locators');
const { LocatorEngine } = require('../../utils/locatorEngine');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async getEmailInput() {
    return await LocatorEngine.resolve(this.page, locators.emailInput);
  }

  async getPasswordInput() {
    return await LocatorEngine.resolve(this.page, locators.passwordInput);
  }

  async getLoginBtn() {
    return await LocatorEngine.resolve(this.page, locators.loginBtn);
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email, password) {
    const emailInput = await this.getEmailInput();
    const passwordInput = await this.getPasswordInput();
    const loginBtn = await this.getLoginBtn();

    await emailInput.fill(email);
    await passwordInput.fill(password);
    await loginBtn.click();
  }


}

module.exports = { LoginPage };