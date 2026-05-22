import { test, expect } from '@playwright/test';
import LoginPage from './pages/loginpage.spec';
import HomePage from './pages/homepage.spec';

test('Login Test', async ({ page }) => {
    
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    const loginPage = new LoginPage(page);
    await loginPage.login();
    const homePage = new HomePage(page);
    await homePage.logout();
    
});






