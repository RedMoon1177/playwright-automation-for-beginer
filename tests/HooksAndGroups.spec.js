const { test, expect } = require("@playwright/test");

test.describe("All My Tests", () => {
  // before each test => will run this login test first
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL("https://www.saucedemo.com/inventory.html");
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("homepage", async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click();
    await page.locator('[data-test="item-1-title-link"]').click();
    await page.waitForURL("https://www.saucedemo.com/inventory-item.html?id=1");
    await page.locator('[data-test="add-to-cart"]').click();
  });

  test("logout", async ({ page }) => {
    await page.getByRole("button", { name: "Open Menu" }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await page.waitForURL("https://www.saucedemo.com/");
  });
});
