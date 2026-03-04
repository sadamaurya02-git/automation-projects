import { expect, Locator, Page } from "@playwright/test";
import path from 'path'

export class Description {

    readonly page:Page;
    readonly next_button : Locator;
    
    constructor(page:Page) {
        this.page = page;
        
        // Elements
        this.next_button = page.getByRole('button', { name: 'Next' });
    }

    // Methods
    async clickNextButton(){
        //await page.getByRole('heading', { name: 'Uploading & Analyzing Images' }).click();

        
        this.next_button.click();
    }   
}