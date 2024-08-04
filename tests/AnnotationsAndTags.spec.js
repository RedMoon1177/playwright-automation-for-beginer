const { test, expect } = require("@playwright/test");

test.skip("Test One", async ({ page }) => {});

test("not yet ready", () => {
  test.fail();
});

// "fixme": test will be aborted
test.fixme("test to be fixed", async ({ page }) => {});

// "slow": marks the test as slow and triples the test timeout
test("slow test", async ({ page }) => {
  test.slow();
});

// "only": run specific tests
// test.only("focus on this test only", async ({ page }) => {
//   // Run only focused tests in the entire project
// });

// only run the tests that have the certain tag
// "@smoke": only run those test with tags "smoke"
test("Test login page @smoke", async ({ page }) => {
  // ...
});
