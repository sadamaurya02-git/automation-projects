import {test, expect} from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { Login } from '../src/pages/Login';
import errorMessages from '../test-data/qa/errorMessages.json';
import { retryOnCustomError } from '../utils/retryHelper';

test('Login_Failure_ErrorMessage_Validation',async({page}) =>{

    const homePage = new HomePage(page);
    await homePage.goToURL();
    await homePage.clickLoginButton();
    
    const loginPage = new Login(page);

    // Invalid Email
    await page.getByRole('textbox', { name: 'Enter your email address' }).clear();
    await page.getByRole('textbox', { name: '••••••••' }).clear();
    await loginPage.enterUsernameTextbox('test@example.com');
    await loginPage.enterPasswordTextbox(`${process.env.PASSWORD}`);
    await loginPage.clickSignInButton();
    await expect(page.locator('form')).toContainText(errorMessages.login.InvalidLoginCreds);

    // Invalid Password
    await page.getByRole('textbox', { name: 'Enter your email address' }).clear();
    await page.getByRole('textbox', { name: '••••••••' }).clear();
    await loginPage.enterUsernameTextbox(`${process.env.EMAIL_ID}`);
    await loginPage.enterPasswordTextbox('Test36724');
    await loginPage.clickSignInButton();
    await expect(page.locator('form')).toContainText(errorMessages.login.InvalidLoginCreds);

    // Email & Password invalid
    await page.getByRole('textbox', { name: 'Enter your email address' }).clear();
    await page.getByRole('textbox', { name: '••••••••' }).clear();
    await loginPage.enterUsernameTextbox('test@example.com');
    await loginPage.enterPasswordTextbox('Test36724');
    await loginPage.clickSignInButton();
    await expect(page.locator('form')).toContainText(errorMessages.login.InvalidLoginCreds);

    // Email & Password blank
    await page.getByRole('textbox', { name: 'Enter your email address' }).clear();
    await page.getByRole('textbox', { name: '••••••••' }).clear();
    await loginPage.enterUsernameTextbox('');
    await loginPage.enterPasswordTextbox('');
    await loginPage.clickSignInButton();
    await expect(page.locator('form')).toContainText(errorMessages.login.InvalidEmail);
    await expect(page.locator('form')).toContainText(errorMessages.login.InvalidPassword);

});
