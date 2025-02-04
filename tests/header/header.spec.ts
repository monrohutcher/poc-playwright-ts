import { test, expect } from '@playwright/test';
import { HeaderLocators } from './header.locator';

const url = "https://www.revolut.com/";

test.describe("Header - Logo", async () => {
    
    test("Test the header and logo are visible.", async ({page}) => {
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/');
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step('Check the header is visible.', async () => {
            await expect(page.getByTestId(HeaderLocators.HEADER)).toBeVisible();
        });
        await test.step('Check the logo is visible.', async () => {
            await expect(page.getByTestId(HeaderLocators.LOGO)).toBeVisible();
            await expect(page.getByTestId(HeaderLocators.LOGO)).toHaveAttribute('href', url);
        });
    });
});

test.describe("Header - Navigation", async () => {
    
    test("Test the navigation bar.", async ({page}) => {
        test.fixme()
    });

    test("Test the login.", async ({page}) => {
        test.fixme()
    });

    test("Test the signup.", async ({page}) => {
        test.fixme()
    });
});

test.describe("Header - Location bar", async () => {
    
    test("Test the location bar from France.", async ({page}) => {
        test.fixme()
    });

    test("Test the location bar from Hungary.", async ({page}) => {
        test.fixme()
    });

    test("Test the location bar not appears from United Kingdom.", async ({page}) => {
        test.fixme()
    });

});