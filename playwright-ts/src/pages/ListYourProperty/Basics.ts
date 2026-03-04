import { Locator, Page } from "@playwright/test";


export class Basics {

    readonly page:Page;
    readonly transaction_type_radiobutton : Locator;
    readonly property_category_radiobutton : Locator;
    readonly property_type_dropdown : Locator;
    readonly property_type_dropdown_value : Locator;
    readonly price_textbox : Locator;
    readonly next_button : Locator;
    
    constructor(page:Page) {
        this.page = page;
        
        // Elements
        this.transaction_type_radiobutton = page.getByRole('radio', { name: 'For Sale' });
        this.property_category_radiobutton = page.getByRole('radio', { name: 'Residential' });
        this.property_type_dropdown = page.getByRole('button', { name: 'Select...' });
        this.property_type_dropdown_value = page.getByRole('button', { name: 'Apartment' });
        this.price_textbox = page.getByPlaceholder('Enter price');
        this.next_button = page.getByRole('button', { name: 'Next' });
    }

    // Methods
    async selectTransactionTypeRadioButtton(){
        await this.transaction_type_radiobutton.check();
    }
    async selectPropertyCategoryRadioButton(){
        await this.property_category_radiobutton.check();
    }
    async selectPropertyTypeRadioButton(){
        await this.property_type_dropdown.click(); 
        await this.property_type_dropdown_value.click();
    }    
    async enterPriceTextBox(price:string){
        await this.price_textbox.fill(price);
    } 
    async clickNextButton(){
        this.next_button.click();
    }   
}