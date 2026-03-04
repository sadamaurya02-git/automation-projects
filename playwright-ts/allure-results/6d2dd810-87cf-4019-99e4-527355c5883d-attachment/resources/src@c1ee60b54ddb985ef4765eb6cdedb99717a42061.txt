import { Locator, Page } from "@playwright/test";


export class Login {

    readonly page:Page;
    readonly usernameTextbox : Locator;
    readonly passwordTextbox : Locator;
    readonly signInButton : Locator;

    constructor(page:Page) {
        this.page = page;
        
        // Elements
        this.usernameTextbox = page.getByRole('textbox', { name: 'Enter your email address' });
        this.passwordTextbox = page.getByRole('textbox', { name: '••••••••' });
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
    }

    // Methods

    async enterUsernameTextbox(username:string){
        await this.usernameTextbox.fill(username);
    }

    async enterPasswordTextbox(password:string){
        await this.passwordTextbox.fill(password);
    }

    async clickSignInButton(){
        await this.signInButton.click();
    }
}