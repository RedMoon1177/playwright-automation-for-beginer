const { test, expect } = require("@playwright/test");

test("Demo Login Test 1", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");
  await page.pause();

  await page.locator('[placeholder="Enter your username"]').fill("Raghav");
  await page.locator('[placeholder="Enter your password"]').fill("1234");
  await page.locator("text=Sign in").click();
  await page.locator("text=ACME").isVisible();
});

test("Demo Login Test 2", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.pause();

  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByText("manda user").click();
  await page.getByRole("menuitem", { name: "Logout" }).click();
});

test.only("Demo Login Test 3", async ({ page }) => {
  await page.pause();

  await page.goto("https://admin-demo.nopcommerce.com/login");
  await page.getByLabel("Email:").click();
  await page.getByLabel("Email:").fill("admin@yourstore.com");
  await page.getByLabel("Password:").click();
  await page.getByLabel("Password:").fill("admin");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("link", { name: "Logout" }).click();

  await page.close();
});
