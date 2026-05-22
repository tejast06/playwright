class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = "#email1"
        this.password = "#password1"
        this.loginBtn =  "//button[text()='Sign in']"
    }

    async login() {
        await this.page.locator(this.username).fill("admin@email.com");
        await this.page.locator(this.password).fill("admin@123");
        await this.page.locator(this.loginBtn).click();
    }

    
}

export default LoginPage;