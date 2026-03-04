import { expect, Locator, Page } from "@playwright/test";
import path from 'path'

export class Photos {

    readonly page:Page;
    readonly browse : Locator;
    readonly next_button : Locator;
    
    constructor(page:Page) {
        this.page = page;
        
        // Elements
        this.browse = page.locator('body');
        this.next_button = page.getByRole('button', { name: 'Next' });
    }

    // Methods
    async browseFilesToUpload(){
        const file1 = path.resolve(process.cwd(), 'test-data/images/photo1.jpg');
        const file2 = path.resolve(process.cwd(), 'test-data/images/photo2.jpg');
        const file3 = path.resolve(process.cwd(), 'test-data/images/photo3.jpg');
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.page.click('.lucide.lucide-upload'); // click upload button/icon
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles([file1, file2, file3]);

        await Promise.all([this.page.waitForResponse(resp =>
        resp.url().includes('/upload') && resp.status() === 200),
        fileChooser.setFiles([file1, file2, file3])]);
    }
     
    async clickNextButton(){
        this.next_button.click();
    }   
}