import { Locator, Page } from "@playwright/test";


export class HomePage {

    readonly page:Page;
    readonly login_button : Locator;

    constructor(page:Page) {
        this.page = page;
        
        // Elements
        this.login_button = page.getByRole('banner').getByRole('link', { name: 'Register / Login' });

    }

    // Methods

    async goToURL() {
        await this.page.goto(`${process.env.URL}`)
    }

    async clickLoginButton(){
        await this.login_button.click();
    }
}