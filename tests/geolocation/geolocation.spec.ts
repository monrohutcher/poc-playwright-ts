import { test, expect } from '@playwright/test';
import { GeolocationLocators } from './geolocation.locator';
import { FooterLocators } from '../footer/footer.locator';

const url = "https://www.revolut.com/";

test.describe("Geolocation - Location bar", async () => {
    test("Test the location bar from France.", {
        tag: ["@regression"]
    }, async ({page, context}) => {
        await test.step(`Set up geolocation to France.`, async () => {
            await context.addCookies([
                {name:'rev_geo_country_code', value:'FR', domain:'.revolut.com', path:'/'}]);
        });
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/')
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step(`Check location bar.`, async () => {
            await expect(page.locator(GeolocationLocators.LOCATION_BAR)).toBeVisible();
            await expect(page.locator(GeolocationLocators.LOCATION_BAR_COUNTRY_FLAG)).toHaveAttribute('alt', 'FR');
            await expect(page.locator(GeolocationLocators.LOCATION_BAR_COUNTRY_NAME)).toContainText('France');
        });
        await test.step(`Navigate to suggested page.`, async () => {
            await page.locator(GeolocationLocators.LOCATION_BAR_BUTTON).click();
        });
        await test.step(`Check the redirected page.`, async () => {
            await expect(page.locator(GeolocationLocators.LOCATION_BAR)).toBeHidden();
            await expect(page.locator(FooterLocators.FOOTER_COUNTRY_FLAG)).toHaveAttribute('alt', 'FR');
            await expect(page.locator(FooterLocators.FOOTER_COUNTRY_NAME)).toContainText('France');
            await expect(page.url()).toBe(url + 'fr-FR/');
        });
    });

    test("Test the location bar from Hungary.", {
        tag: ["@regression"]
    }, async ({page, context}) => {
        await test.step(`Set up geolocation to Hungary.`, async () => {
            await context.addCookies([
                {name:'rev_geo_country_code', value:'HU', domain:'.revolut.com', path:'/'}]);
        });
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/')
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step(`Check location bar.`, async () => {
            await expect(page.locator(GeolocationLocators.LOCATION_BAR)).toBeVisible();
            await expect(page.locator(GeolocationLocators.LOCATION_BAR_COUNTRY_FLAG)).toHaveAttribute('alt', 'HU');
            await expect(page.locator(GeolocationLocators.LOCATION_BAR_COUNTRY_NAME)).toContainText('Hungary');
        });
        await test.step(`Navigate to suggested page.`, async () => {
            await page.locator(GeolocationLocators.LOCATION_BAR_BUTTON).click();
        });
        await test.step(`Check the redirected page.`, async () => {
            await expect(page.locator(GeolocationLocators.LOCATION_BAR)).toBeHidden();
            await expect(page.locator(FooterLocators.FOOTER_COUNTRY_FLAG)).toHaveAttribute('alt', 'HU');
            await expect(page.locator(FooterLocators.FOOTER_COUNTRY_NAME)).toContainText('Magyarország');
            await expect(page.url()).toBe(url + 'hu-HU/');
        });
    });

    test("Test the location bar not appears from United Kingdom.", {
        tag: ["@regression"]
    }, async ({page, context}) => {
        await test.step(`Set up geolocation to United Kingdom.`, async () => {
            await context.addCookies([
                {name:'rev_geo_country_code', value:'GB', domain:'.revolut.com', path:'/'}]);
        });
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/')
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step(`Check location bar.`, async () => {
            await expect(page.locator(GeolocationLocators.LOCATION_BAR)).toBeHidden();
        });
    });

});