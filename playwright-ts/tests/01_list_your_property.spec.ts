import {test, expect} from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { Login } from '../src/pages/Login';
import { MyProperties } from '../src/pages/MyProperties';
import { Basics } from '../src/pages/ListYourProperty/Basics';
import { Location } from '../src/pages/ListYourProperty/Location';
import { Size } from '../src/pages/ListYourProperty/Size';
import { Details } from '../src/pages/ListYourProperty/Details';
import { Features } from '../src/pages/ListYourProperty/Features';
import { Legal } from '../src/pages/ListYourProperty/Legal';
import { Photos } from '../src/pages/ListYourProperty/Photos';
import { Description } from '../src/pages/ListYourProperty/Description';
import errorMessages from '../test-data/qa/errorMessages.json';
import { retryOnCustomError } from '../utils/retryHelper';

test('List your Property',async({page}) =>{

    const homePage = new HomePage(page);
    await homePage.goToURL();
    await homePage.clickLoginButton();

    const loginPage = new Login(page);
    // Clearing the fields for UN & PW
    await page.getByRole('textbox', { name: 'Enter your email address' }).clear();
    await page.getByRole('textbox', { name: '••••••••' }).clear();

    await loginPage.enterUsernameTextbox(`${process.env.EMAIL_ID}`);
    await loginPage.enterPasswordTextbox(`${process.env.PASSWORD}`);

    await loginPage.clickSignInButton();

    await expect(page.getByRole('link', { name: 'List New Property' })).toContainText('List New Property');

    const myProperties = new MyProperties(page);
    await myProperties.clickListNewProperyButton();
    await expect(page.getByRole('heading', { name: 'Property Basics' })).toHaveText('Property Basics');
    
    const basics = new Basics(page);
    await basics.selectTransactionTypeRadioButtton();
    await basics.selectPropertyCategoryRadioButton();
    await basics.selectPropertyTypeRadioButton();
    await basics.enterPriceTextBox('1500000')
    await basics.clickNextButton();
    await expect(page.getByRole('heading', { name: 'Location' })).toHaveText('Location');
    
    const location = new Location(page);
    await location.selectGovernorateDropdown();
    await location.selectDistrictDropdown();
    await location.enterCityTextbox('Basra');
    await location.enterNeighborhoodNumberTextbox('305');
    await location.enterStreetTextbox('Zukak');
    await location.enterHouseNumberTextbox('Building 12');
    await location.enterPostalcodeTextbox('61006');
    await location.clickNextButton();
    await expect(page.getByRole('heading', { name: 'Size & Layout' })).toHaveText('Size & Layout');
    
    const size = new Size(page);
    await size.enterBuiltupAreaTextbox('1100');
    await size.selectBedroomDropdown();
    await size.selectBathroomDropdown();
    await size.enterFloorNumberTextbox('22');
    await size.enterTotalFloorTextbox('25');
    await size.clickNextButton();
    await expect(page.getByRole('heading', { name: 'Property Details' })).toHaveText('Property Details');

    const details = new Details(page);
    await details.selectYearDropdown();
    await details.selectConditionDropdown();
    await details.selectViewCheckbox();
    await details.selectOrientationDropdown();
    await details.selectFurnishingDropdown();
    await details.enterParkingSpaceTextbox('2');
    await details.selectParkingTypeDropdown();
    await details.selectCoolingDropdown();
    await details.selectHeatingDropdown();
    await details.clickNextButton();
    await expect(page.getByRole('heading', { name: 'Features & Amenities' })).toHaveText('Features & Amenities');

    const features = new Features(page);
    await features.selectFeatureCheckbox();
    await features.selectAmenitiesCheckbox();
    await features.selectBenefitsCheckbox();
    await features.clickNextButton();
    await expect(page.getByRole('heading', { name: 'Legal & Project Information' })).toHaveText('Legal & Project Information');
    
    const legal = new Legal(page);
    await legal.selectTitleDeedDropdown();
    await legal.clickNextButton();
    await expect(page.getByRole('heading', { name: 'Property Photos' })).toHaveText('Property Photos');

    const photos = new Photos(page);
    await photos.browseFilesToUpload()
    await photos.clickNextButton();
    await expect(page.getByRole('heading', { name: 'Generating AI Descriptions' })).toHaveCount(0);
    await expect(page.getByRole('heading', { name: 'Property Description' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Property Description' })).toHaveText('Property Description');
    
    const description = new Description(page);
    await description.clickNextButton();
    await expect(page.getByRole('heading', { name: 'Review & Submit' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Review & Submit' })).toHaveText('Review & Submit');
    

});
