import {test as setup, expect} from "@playwright/test";
import { envSchema } from "../envSchema";
require("dotenv").config();
//put login url in variable below

const logInPageURL = 'https://playwright.dev/';
const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {

    await page.goto(logInPageURL);
    await page.context().storageState({ path: authFile });

});



/* Follow code is for logining into a website with username and password, however it will not work for example test. Uncomment setup function for correct use */
/*
setup("authenticate", async ({ page }) => {
 //Functions below are for readabilitiy
 //You may need to change the locators based on your application
async function enterUserName(userName: string){
  await this.page.getByLabel('Username or email').click();
  await this.page.getByLabel('Username or email').fill(userName);
  await this.page.getByLabel('Username or email').press('Tab');
}
async function enterPassword(PASSWORD: string){
  await this.page.getByLabel('Password').fill(PASSWORD);
  await this.page.getByLabel('Password').press('Enter');
}

const validatedEnv = envSchema.parse(process.env);

await page.goto(logInPageURL);
await enterUserName(validatedEnv.TEST_USER);
await enterPassword(validatedEnv.PASSWORD);
//Enter Locator Unique to login page to verify login was successful
await expect(page.locator("")).toBeVisible();
await page.context().storageState({ path: authFile });
})
*/