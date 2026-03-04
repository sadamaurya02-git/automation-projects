import { Locator, Page } from "@playwright/test";

export class Details {

    readonly page:Page;
    readonly year_built_dropdown : Locator;
    readonly year_built_dropdown_value : Locator;
    readonly condition_dropdown : Locator;
    readonly condition_value_dropdown_value : Locator;
    readonly view1_checkbox : Locator;
    readonly view2_checkbox : Locator;
    readonly view3_checkbox : Locator;
    readonly orientation_dropdown : Locator;
    readonly orientation_dropdown_value : Locator;
    readonly furnishing_dropdown : Locator;
    readonly furnishing_dropdown_value : Locator;
    readonly parking_space_textbox : Locator;
    readonly parking_type_dropdown : Locator;
    readonly parking_type_dropdownvalue : Locator;
    readonly cooling_dropdown : Locator;
    readonly cooling_dropdown_value : Locator;
    readonly heating_dropdown : Locator;
    readonly heating_dropdown_value : Locator;
    readonly next_button : Locator;
    
    constructor(page:Page) {
        this.page = page;
        
        // Elements
    this.year_built_dropdown = page.getByRole('button', { name: 'Select...' }).first();
    this.year_built_dropdown_value = page.getByRole('button', { name: '2001' });
    this.condition_dropdown = page.getByRole('button', { name: 'Select...' }).first();
    this.condition_value_dropdown_value = page.getByRole('button', { name: 'Fair' });
    this.view1_checkbox = page.locator('.flex-shrink-0.h-5').first();
    this.view2_checkbox = page.locator('label:nth-child(4) > .flex-shrink-0');
    this.view3_checkbox = page.locator('.flex-shrink-0.h-5.w-5.rounded.flex.items-center.justify-center.transition-colors.bg-white').first();
    this.orientation_dropdown = page.getByRole('button', { name: 'Select...' }).first();
    this.orientation_dropdown_value = page.getByRole('button', { name: 'West', exact: true });
    this.furnishing_dropdown = page.getByRole('button', { name: 'Select...' }).first();
    this.furnishing_dropdown_value = page.getByRole('button', { name: 'Fully Furnished' });
    this.parking_space_textbox = page.getByPlaceholder('Number of spaces');
    this.parking_type_dropdown = page.getByRole('button', { name: 'Select...' }).first();
    this.parking_type_dropdownvalue = page.getByRole('button', { name: 'Covered', exact: true });
    this.cooling_dropdown = page.getByRole('button', { name: 'Select...' }).first();
    this.cooling_dropdown_value = page.getByRole('button', { name: 'Split' });
    this.heating_dropdown = page.getByRole('button', { name: 'Select...' });
    this.heating_dropdown_value = page.getByRole('button', { name: 'Split Heating' });
    this.next_button = page.getByRole('button', { name: 'Next' });
    }

    // Methods
    async selectYearDropdown(){
        await this.year_built_dropdown.click();
        await this.year_built_dropdown_value.click();
    } 
    async selectConditionDropdown(){
        await this.condition_dropdown.click();
        await this.condition_value_dropdown_value.click();
    } 
    async selectViewCheckbox(){
        await this.view1_checkbox.click();
        await this.view2_checkbox.click();
        await this.view3_checkbox.click();
    }
    async selectOrientationDropdown(){
        await this.orientation_dropdown.click();
        await this.orientation_dropdown_value.click();
    } 
    async selectFurnishingDropdown(){
        await this.furnishing_dropdown.click();
        await this.furnishing_dropdown_value.click();
    }
    async enterParkingSpaceTextbox(parking:string){
        await this.parking_space_textbox.fill(parking);
    }
    async selectParkingTypeDropdown(){
        await this.parking_type_dropdown.click();
        await this.parking_type_dropdownvalue.click();
    }
    async selectCoolingDropdown(){
        await this.cooling_dropdown.click();
        await this.cooling_dropdown_value.click();
    }
    async selectHeatingDropdown(){
        await this.heating_dropdown.click();
        await this.heating_dropdown_value.click();
    } 
    async clickNextButton(){
        this.next_button.click();
    }   
}