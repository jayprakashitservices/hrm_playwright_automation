// tests/auth/login.spec.js
const { test, expect } = require('../../fixtures/baseTest');
const loginPage = require('../../pages/login/login.page');
const data = require('../../utils/testData');
const { expectToast } = require('../../utils/toastHelper');
const { allure } = require('allure-playwright');

test.describe('Login Feature', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto();
    });

    test('TC01 - Valid Login @smoke', async ({ page, loginPage }) => {
        await allure.description('Verify valid login');
        await loginPage.login(data.validUser.email, data.validUser.password);
        const toast = page.getByRole('status');
        await expect(toast).toBeVisible();
        await expect(toast).toHaveText(/Welcome back!/);
        await expect(page).toHaveURL(/dashboard/);
        await expect(page.getByText('Pending Leaves')).toBeVisible();
    });

});