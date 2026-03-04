import { Locator, Page } from "@playwright/test";

export class Features {

    readonly page:Page;
    readonly feature1_checkbox : Locator;
    readonly feature2_checkbox : Locator;
    readonly feature3_checkbox : Locator;
    readonly amenities1_checkbox : Locator;
    readonly amenities2_checkbox : Locator;
    readonly amenities3_checkbox : Locator;
    readonly benefits1_checkbox : Locator;
    readonly benefits2_checkbox : Locator;
    readonly benefits3_checkbox : Locator;
    readonly next_button : Locator;
    
    constructor(page:Page) {
        this.page = page;
        
        // Elements
    this.feature1_checkbox = page.locator('.flex-shrink-0.h-5').first();
    this.feature2_checkbox = page.locator('label:nth-child(4) > .flex-shrink-0').first();
    this.feature3_checkbox = page.locator('label:nth-child(9) > .flex-shrink-0').first();
    this.amenities1_checkbox = page.locator('div:nth-child(2) > .grid > label:nth-child(2) > .flex-shrink-0');
    this.amenities2_checkbox = page.locator('div:nth-child(2) > .grid > label:nth-child(4) > .flex-shrink-0');
    this.amenities3_checkbox = page.locator('div:nth-child(2) > .grid > label:nth-child(11) > .flex-shrink-0');
    this.benefits1_checkbox = page.locator('label:nth-child(15) > .flex-shrink-0');
    this.benefits2_checkbox = page.locator('div:nth-child(3) > .grid > label:nth-child(2) > .flex-shrink-0');
    this.benefits3_checkbox = page.locator('div:nth-child(3) > .grid > label:nth-child(3) > .flex-shrink-0');
    this.next_button = page.getByRole('button', { name: 'Next' });
    }

    // Methods
    async selectFeatureCheckbox(){
        await this.feature1_checkbox.click();
        await this.feature2_checkbox.click();
        await this.feature3_checkbox.click();
    }
    async selectAmenitiesCheckbox(){
        await this.amenities1_checkbox.click();
        await this.amenities2_checkbox.click();
        await this.amenities3_checkbox.click();
    }
    async selectBenefitsCheckbox(){
        await this.benefits1_checkbox.click();
        await this.benefits2_checkbox.click();
        await this.benefits3_checkbox.click();
    }
    async clickNextButton(){
        this.next_button.click();
    }   
}