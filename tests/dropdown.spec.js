import { test, expect } from '@playwright/test';

test('Dropdown Test', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/signup');

    const stateSelect = page.locator('#state');
    await expect(stateSelect).toBeVisible();

    const options = stateSelect.locator('option');
    const count = await options.count();

    for (let i = 0; i < count; i++) {
        const text = await options.nth(i).textContent();
        console.log(text);
    }
});
