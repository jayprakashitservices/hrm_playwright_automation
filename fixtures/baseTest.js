// fixtures/baseTest.js
const base = require('@playwright/test');
const { LoginPage } = require('../pages/login/login.page');

exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  }
});

exports.expect = base.expect;