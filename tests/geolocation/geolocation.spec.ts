import { test, expect } from '@playwright/test';
import { GeolocationLocators } from './geolocation.locator';

const url = "https://www.revolut.com/";

test.use({
    locale: 'de-DE',
    timezoneId: 'Europe/Berlin',
    geolocation: { longitude: 41.890221, latitude: 12.492348 },
    permissions: ['geolocation'],
});

test.describe("Geolocation - Location bar", async () => {
    test("Test the location bar from France.", {
        tag: ["@regression"]
    }, async ({page}) => {
        await test.step(`Set up geolocation to France.`, async () => {
            
        });
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/');
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step(`Check location bar}.`, async () => {
            await expect(page.locator(GeolocationLocators.LOCATION_BAR)).toBeVisible();
            await expect(page.locator(GeolocationLocators.LOCATION_BAR_COUNTRY_FLAG)).toHaveAttribute('alt', 'FR');
            await expect(page.locator(GeolocationLocators.LOCATION_BAR_COUNTRY_NAME)).toContainText('France');
        });

    });

    test("Test the location bar from Hungary.", {
        tag: ["@regression"]
    }, async ({page}) => {
        test.fixme()
    });

    test("Test the location bar not appears from United Kingdom.", {
        tag: ["@regression"]
    }, async ({page}) => {
        test.fixme()
    });

});