import { test, expect } from '@playwright/test';
import { ExamplePOM } from '../pages/examplePOM';


test('get started link', async ({ page }) => {
  const PM = new ExamplePOM(page);
  await PM.navigateToPlaywrightWebsite;  
  // Click the get started link.
  await PM.getStartedLink.click();
  // Expects page to have a heading with the name of Installation.
  await expect(PM.installationHeading).toBeVisible();
});

/* CONTENTS OF examplePOM.ts FOR REFERENCE

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

*/