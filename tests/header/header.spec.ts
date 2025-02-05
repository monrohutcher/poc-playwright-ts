import { test, expect } from '@playwright/test';
import { HeaderLocators } from './header.locator';

const url = "https://www.revolut.com/";

test.describe("Header - Logo", async () => {
    
    test("Test the header and logo are visible.", {
        tag: ["@regression","@smoke"]
    }, async ({page}) => {
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/');
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step('Check the header is visible.', async () => {
            await expect(page.locator(HeaderLocators.HEADER)).toBeVisible();
        });
        await test.step('Check the logo is visible.', async () => {
            await expect(page.locator(HeaderLocators.LOGO)).toBeVisible();
            await expect(page.locator(HeaderLocators.LOGO)).toHaveAttribute('href', "/");
        });
    });
});

test.describe("Header - Navigation", async () => {
    
    test("Test the navigation bar.", {
        tag: ["@regression", "@smoke"]
    }, async ({page}) => {
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/');
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step('Check the Personal menu.', async () => {
            await expect(page.locator(HeaderLocators.NAVBAR_PERSONAL_BUTTON)).toBeVisible();
            await page.locator(HeaderLocators.NAVBAR_PERSONAL_BUTTON).hover();
            await expect(page.locator(HeaderLocators.NAVBAR_PERSONAL_TITLE)).toBeVisible();
            await expect(page.locator(HeaderLocators.NAVBAR_PERSONAL_TITLE)).toHaveAttribute('href', '/');
            await page.locator(HeaderLocators.LOGO).hover();
        });
        await test.step('Check the Business menu.', async () => {
            await expect(page.locator(HeaderLocators.NAVBAR_BUSINESS_BUTTON)).toBeVisible();
            await page.locator(HeaderLocators.NAVBAR_BUSINESS_BUTTON).hover();
            await expect(page.locator(HeaderLocators.NAVBAR_BUSINESS_TITLE)).toBeVisible();
            await expect(page.locator(HeaderLocators.NAVBAR_BUSINESS_TITLE)).toHaveAttribute('href', '/business/');
            await page.locator(HeaderLocators.LOGO).hover();
        });
        await test.step('Check the Company menu.', async () => {
            await expect(page.locator(HeaderLocators.NAVBAR_COMPANY_BUTTON)).toBeVisible();
            await page.locator(HeaderLocators.NAVBAR_COMPANY_BUTTON).hover();
            await expect(page.locator(HeaderLocators.NAVBAR_COMPANY_TITLE)).toBeVisible();
            await expect(page.locator(HeaderLocators.NAVBAR_COMPANY_TITLE)).toHaveAttribute('href', '/discover-our-company/');
        });
    });

    test("Test the login button.", {
        tag: ["@regression", "@smoke"]
    }, async ({page}) => {
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/');
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step('Check the Login button.', async () => {
            await expect(page.locator(HeaderLocators.LOGIN)).toBeVisible();
            await expect(page.locator(HeaderLocators.LOGIN)).toHaveAttribute('href', "https://app.revolut.com/start");
        });
    });

    test("Test the Signup button and widget.", {
        tag: ["@regression", "@smoke"]
    }, async ({page}) => {
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/');
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step('Check the Signup button.', async () => {
            await expect(page.locator(HeaderLocators.SIGNUP)).toBeVisible();
        });
        await test.step('Click on Signup button.', async () => {
            await page.locator(HeaderLocators.SIGNUP).click();
        });
        await test.step('Check Signup widget.', async () => {
            await expect(page.locator(HeaderLocators.SIGNUP_WIDGET)).toBeVisible();
            await expect(page.locator(HeaderLocators.SIGNUP_WIDGET_QR_CODE)).toBeVisible();
            await expect(page.locator(HeaderLocators.SIGNUP_WIDGET_PHONE_COUNTRY)).toBeVisible();
            await expect(page.locator(HeaderLocators.SIGNUP_WIDGET_PHONE_NUMBER)).toBeVisible();
            await expect(page.locator(HeaderLocators.SIGNUP_WIDGET_CLOSE_BUTTON)).toBeVisible();
        });
        await test.step('Click on widget close button.', async () => {
            await page.locator(HeaderLocators.SIGNUP_WIDGET_CLOSE_BUTTON).click();
        });
        await test.step('Check Signup widget closed.', async () => {
            await expect(page.locator(HeaderLocators.SIGNUP_WIDGET)).toBeHidden();
        });
    });
});