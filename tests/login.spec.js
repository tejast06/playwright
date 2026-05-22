import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("//input[@name='username']").fill("admin",{timeout: 100});
    await page.locator("//input[@name='password']").fill("admin123",{timeout: 100});
    await page.locator("//button[@type='submit']").click();

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');




    
});


