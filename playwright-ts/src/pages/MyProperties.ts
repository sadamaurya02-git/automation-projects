import { Locator, Page } from "@playwright/test";


export class MyProperties {

    readonly page:Page;
    readonly list_new_property_button : Locator;

    constructor(page:Page) {
        this.page = page;
        
        // Elements
        this.list_new_property_button = page.getByRole('link', { name: 'List New Property' });
    }

    // Methods
    async clickListNewProperyButton(){
        await this.list_new_property_button.click();
    }
}