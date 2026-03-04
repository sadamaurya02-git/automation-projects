import { Locator, Page } from "@playwright/test";


export class Legal {

    readonly page:Page;
    readonly title_deed_dropdown : Locator;
    readonly title_deed_dropdown_value : Locator;
    readonly next_button : Locator;
    
    constructor(page:Page) {
        this.page = page;
        
        // Elements
        this.title_deed_dropdown = page.getByRole('button', { name: 'Select...' });
        this.title_deed_dropdown_value = page.getByRole('button', { name: 'Freehold' });
        this.next_button = page.getByRole('button', { name: 'Next' });
    }

    // Methods
    async selectTitleDeedDropdown(){
        await this.title_deed_dropdown.click();
        await this.title_deed_dropdown_value.click();
    }
    async clickNextButton(){
        this.next_button.click();
    }   
}