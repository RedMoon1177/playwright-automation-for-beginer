const { test, expect } = require("@playwright/test");

test("Assertions Demo", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");

  // ASSERTIONS
  // check element present or not
  await expect(page.locator("text=The Kitchen")).toHaveCount(1);

  // The following statement doesn't perform any assertions;
  // it simply retrieves the first matching element.
  if (await page.$("text=The Kitchen")) {
    await page.locator("text=The Kitchen").click();

    // check element hidden or visible
    await expect(page.locator("text=The Kitchen")).toBeVisible();
    // await expect.soft(page.locator("text=The Kitchen")).toBeHidden();

    // check element enabled or disabled
    await expect(page.locator("text=The Kitchen")).toBeEnabled();
    // await expect.soft(page.locator("text=The Kitchen")).toBeDisabled();
    // soft assertion will let the next assertion running

    // check text
    await expect(page.locator("text=The Kitchen")).toHaveText("The Kitchen");
    // await expect
    //   .soft(page.locator("text=The Kitchen"))
    //   .not.toHaveText("The Kitchen");

    // check attribute value
    await expect(page.locator("text=The Kitchen")).toHaveAttribute(
      "class",
      /.*css-dpmy2a/
    );
    // or
    await expect(page.locator("text=The Kitchen")).toHaveClass(/.*css-dpmy2a/);

    // check page url and title
    await expect(page).toHaveURL("https://kitchen.applitools.com/");
    await expect(page).toHaveTitle(/.*Kitchen/);

    await page.pause();
    // visual validation with screenshot
    await expect(page).toHaveScreenshot();
  }
});
