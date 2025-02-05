import { test, expect } from '@playwright/test';
import { FooterLocators } from './footer.locator';

const url = "https://www.revolut.com/";


test.describe("Footer - Plan section tests", () => {

    test("Test the title of the Plan section", {
        tag: ["@regression"]
    }, async ({ page }) => {
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/');
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step('Check the Plan section in footer.', async () => {
            await expect(page.getByTestId(FooterLocators.FOOTER_PLAN_HEADER)).toBeVisible();
            await expect(page.getByTestId(FooterLocators.FOOTER_PLAN_HEADER)).toHaveText("Choose your plan");
        });
    });

    test("Test the Standard Plan card", {
        tag: ["@regression"]
    }, async ({ page }) => {
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/');
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step('Check the Standard Plan card in footer', async () => {
            await expect(page.getByTestId(FooterLocators.FOOTER_PLAN_SECTION).getByRole('listitem').filter({ hasText: 'Standard'})).toBeVisible();
        });
        await test.step(`Click on the Standard Plan card.`, async () => {
            await page.getByTestId(FooterLocators.FOOTER_PLAN_SECTION).getByRole('listitem').filter({ hasText: 'Standard'}).click();
        });
        await test.step(`Check the site opens the correct page.`, async () => {
            await expect(page).toHaveURL(/.*a-radically-better-account/);
        });
    });

    test("Test the Plus Plan card", {
        tag: ["@regression"]
    }, async ({ page }) => {
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/');
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step('Check the Plus Plan card in footer', async () => {
            await expect(page.getByTestId(FooterLocators.FOOTER_PLAN_SECTION).getByRole('listitem').filter({ hasText: 'Plus'})).toBeVisible();
        });
        await test.step(`Click on the Plus Plan card.`, async () => {
            await page.getByTestId(FooterLocators.FOOTER_PLAN_SECTION).getByRole('listitem').filter({ hasText: 'Plus'}).click();
        });
        await test.step(`Check the site opens the correct page.`, async () => {
            await expect(page).toHaveURL(/.*revolut-plus/);
        });
    });

    test("Test the Premium Plan card", {
        tag: ["@regression"]
    }, async ({ page }) => {
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/');
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step('Check the Premium Plan card in footer', async () => {
            await expect(page.getByTestId(FooterLocators.FOOTER_PLAN_SECTION).getByRole('listitem').filter({ hasText: 'Premium'})).toBeVisible();
        });
        await test.step(`Click on the Premium Plan card.`, async () => {
            await page.getByTestId(FooterLocators.FOOTER_PLAN_SECTION).getByRole('listitem').filter({ hasText: 'Premium'}).click();
        });
        await test.step(`Check the site navigates to the correct page.`, async () => {
            await expect(page).toHaveURL(/.*revolut-premium/);
        });
    });

    test("Test the Metal card", {
        tag: ["@regression"]
    }, async ({ page }) => {
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/');
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step('Check the Metal card in footer', async () => {
            await expect(page.getByTestId(FooterLocators.FOOTER_PLAN_SECTION).getByRole('listitem').filter({ hasText: 'Metal'})).toBeVisible();
        });
        await test.step(`Click on the Metal card.`, async () => {
            await page.getByTestId(FooterLocators.FOOTER_PLAN_SECTION).getByRole('listitem').filter({ hasText: 'Metal'}).click();
        });
        await test.step(`Check the site navigates to the correct page.`, async () => {
            await expect(page).toHaveURL(/.*metal/);
        });
    });

    test("Test the Ultra card", {
        tag: ["@regression"]
    }, async ({ page }) => {
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/');
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step('Check the Ultra card in footer', async () => {
            await expect(page.getByTestId(FooterLocators.FOOTER_PLAN_SECTION).getByRole('listitem').filter({ hasText: 'Ultra'})).toBeVisible();
        });
        await test.step(`Click on the Ultra card.`, async () => {
            await page.getByTestId(FooterLocators.FOOTER_PLAN_SECTION).getByRole('listitem').filter({ hasText: 'Ultra'}).click();
        });
        await test.step(`Check the site navigates to the correct page.`, async () => {
            await expect(page).toHaveURL(/.*ultra-plan/);
        });
    });
});

test.describe('Footer - Legal', async () => {

    test('Test the legal section in footer', {
        tag: ["@regression", "@smoke"]
    }, async ({page}) => {
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/');
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step('Check the Plan section in footer.', async () => {
            await expect(page.getByTestId(FooterLocators.FOOTER_LEGAL_SECTION)).toBeVisible();
        });
    })
});

test.describe('Footer - Qucik links', async () => {

    test('Test the quick link section in footer', {
        tag: ["@regression", "@smoke"]
    }, async ({page}) => {
        await test.step(`Navigate to ${url}.`, async () => {
            await page.goto('/');
            await page.getByRole('button', {name: "Accept all"}).click();
        });
        await test.step('Check the Plan section in footer.', async () => {
            await expect(page.getByTestId(FooterLocators.FOOTER_QUICK_LINKS)).toBeVisible();
        });
    })
});