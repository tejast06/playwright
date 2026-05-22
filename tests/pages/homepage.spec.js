import { expect } from '@playwright/test';
class HomePage {
    constructor(page) {
        this.page = page;
        this.menu= "//img[@alt='menu']"
        this.logoutBtn = "//button[text()='Sign out']"
        this.cart = "//button[text()='Cart']"
    }

    async logout() {
        await this.page.locator(this.menu).click();
        await this.page.locator(this.logoutBtn).click();
    }
    async verifyCart() {
        await expect(this.page.locator(this.cart)).toBeVisible();
        

    }
}

export default HomePage;