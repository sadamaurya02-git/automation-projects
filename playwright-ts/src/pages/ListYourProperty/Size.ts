import { Locator, Page } from "@playwright/test";

export class Size {

    readonly page:Page;
    readonly builtup_area_textbox : Locator;
    readonly bedrooms_dropdown : Locator;
    readonly bedrooms_dropdown_value : Locator;
    readonly bathrooms_dropdown : Locator;
    readonly bathrooms_dropdown_value : Locator;
    readonly floor_number_textbox : Locator;
    readonly total_floor_textbox : Locator;
    readonly next_button : Locator;
    
    constructor(page:Page) {
        this.page = page;
        
        // Elements
    this.builtup_area_textbox = page.getByPlaceholder('Enter area');
    this.bedrooms_dropdown = page.getByRole('button', { name: 'Select...' }).first();
    this.bedrooms_dropdown_value = page.getByRole('button', { name: '2 Bedrooms' });
    this.bathrooms_dropdown = page.getByRole('button', { name: 'Select...' });
    this.bathrooms_dropdown_value = page.getByRole('button', { name: '2 Bathrooms' });
    this.floor_number_textbox = page.getByPlaceholder('e.g., 12');
    this.total_floor_textbox = page.getByPlaceholder('e.g., 20');
    this.next_button = page.getByRole('button', { name: 'Next' });
    }

    // Methods
    async enterBuiltupAreaTextbox(builtup:string){
        await this.builtup_area_textbox.fill(builtup); 
    }    
    async selectBedroomDropdown(){
        await this.bedrooms_dropdown.click();
        await this.bedrooms_dropdown_value.click();
    } 
    async selectBathroomDropdown(){
        await this.bathrooms_dropdown.click();
        await this.bathrooms_dropdown_value.click();
    } 
    async enterFloorNumberTextbox(floor:string){
        await this.floor_number_textbox.fill(floor);
    }
    async enterTotalFloorTextbox(totalfloor:string){
        await this.total_floor_textbox.fill(totalfloor);
    }
    async clickNextButton(){
        this.next_button.click();
    }   
}