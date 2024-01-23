import {Page, Locator} from "@playwright/test";
export class ExamplePOM {
    private page: Page;
    navigateToPlaywrightWebsite: any;
    installationHeading: Locator;
    getStartedLink: Locator;


    constructor(page: Page) {
        this.page = page;
    this.navigateToPlaywrightWebsite = page.goto('https://playwright.dev/');
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.installationHeading =  page.getByRole('heading', { name: 'Installation' });
    }
}