import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Go to https://www.saucedemo.com/
  await page.goto("https://www.saucedemo.com/");

  // Click [data-set="username"]
  await page.locator('[data-test="username"]').click();

  // Fill [data-set="username"]
  await page.locator('[data-test="username"]').fill("standard_user");

  // Click [data-set="password"]
  await page.locator('[data-test="password"]').click();

  // Fill [data-set="password"]
  await page.locator('[data-test="password"]').fill("secret_sauce");

  //Click [data-set="login-button"]
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  // Click text=Open Menu
  await page.getByRole("button", { name: "Open Menu" }).click();

  // Click text=Logout
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await expect(page).toHaveURL("https://www.saucedemo.com/");
});
