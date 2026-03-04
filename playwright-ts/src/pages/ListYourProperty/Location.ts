import { Locator, Page } from "@playwright/test";


export class Location {

    readonly page:Page;
    readonly governorate_dropdown : Locator;
    readonly governorate_dropdown_value : Locator;
    readonly district_dropdown : Locator;
    readonly district_dropdown_value : Locator;
    readonly city_textbox : Locator;
    readonly neighborhood_number_textbox : Locator;
    readonly street_textbox : Locator;
    readonly house_number_textbox : Locator;
    readonly postalcode_textbox : Locator;
    readonly next_button : Locator;
    
    constructor(page:Page) {
        this.page = page;
        
        // Elements
        this.governorate_dropdown = page.getByRole('button', { name: 'Select...' });
        this.governorate_dropdown_value = page.getByRole('button', { name: 'Basra' });
        this.district_dropdown = page.getByRole('button', { name: 'Select district' });
        this.district_dropdown_value = page.getByRole('button', { name: 'Abu Al-Khaseeb' });
        this.city_textbox = page.getByRole('textbox', { name: 'e.g., New Erbil' });
        this.neighborhood_number_textbox = page.getByPlaceholder('e.g., 305');
        this.street_textbox = page.getByRole('textbox', { name: 'Enter street name' });
        this.house_number_textbox = page.getByRole('textbox', { name: 'e.g., Building' });
        this.postalcode_textbox = page.getByRole('textbox', { name: '-digit code' });
        this.next_button = page.getByRole('button', { name: 'Next' });
    }

    // Methods
    async selectGovernorateDropdown(){
        await this.governorate_dropdown.click();
        await this.governorate_dropdown_value.click();
    }
    async selectDistrictDropdown(){
        await this.district_dropdown.click();
        await this.district_dropdown_value.click();
    }
    async enterCityTextbox(city:string){
        await this.city_textbox.fill(city); 
    }    
    async enterNeighborhoodNumberTextbox(neighborhood:string){
        await this.neighborhood_number_textbox.fill(neighborhood);
    } 
    async enterStreetTextbox(street:string){
        await this.street_textbox.fill(street);
    }
    async enterHouseNumberTextbox(house:string){
        await this.house_number_textbox.fill(house);
    }
    async enterPostalcodeTextbox(postalcode:string){
        await this.postalcode_textbox.fill(postalcode);
    }
    async clickNextButton(){
        this.next_button.click();
    }   
}