import { test, expect } from '@playwright/test';
import { FOOTER_PLAN_HEADER, FOOTER_PLAN_SECTION } from './footer-locators';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.revolut.com/');
    await page.getByRole('button', {name: "Accept all"}).click();
  });


test.describe("Footer - Plan section tests", () => {
    test("Check the title of the Plan section", async ({ page }) => {
        await expect(page.getByTestId(FOOTER_PLAN_HEADER)).toHaveText("Choose your plan");
    });

    test("Check the Standard Plan card", async ({ page }) => {
        await expect(page.getByTestId(FOOTER_PLAN_SECTION).getByRole('listitem').filter({ hasText: 'Standard'})).toBeVisible();
        await page.getByTestId(FOOTER_PLAN_SECTION).getByRole('listitem').filter({ hasText: 'Standard'}).click();
        await expect(page).toHaveURL(/.*a-radically-better-account/);
    });
});