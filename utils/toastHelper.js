import { expect } from '@playwright/test';

export async function expectToast(page, message) {
  const toast = page.locator('div[role="status"][aria-live="polite"]');
  await expect(toast).toBeVisible();
  await expect(toast).toContainText(message);
}

export async function expectToastType(page, type) {
  const toast = page.locator('div[role="status"][aria-live="polite"]');
  await expect(toast).toHaveAttribute('data-type', type);
}