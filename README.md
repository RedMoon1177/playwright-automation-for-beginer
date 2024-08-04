# playwright-automation-for-beginer

learning: https://www.youtube.com/playlist?list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8

### Installation & Test Run

To install: **npm init playwright@latest**
To run tests: **npx playwright test**
More config: **playwright.config.js** file

VSCode Ext: **Playwright Test for VSCode**

### Record Tests & Trace Viewer

Record tests: **npx playwright codegen**
Trace Viewer (a GUI tool): --> go to the playwright.config.js:

- comment out "retries: process.env.CI ? 1 : undefined,"
- add "retries: 1,"
- **Note**: When the test failed, it would create a 1st try and create a trace.zip file in the result
- Run command: **npx playwright show-trace** trace.zip
- Trace Viewer Options:
  -- **"on-first-retry"**: record a trace only when retrying a test for the first time
  -- **"off"**: do not record a trace
  -- **"on"**: record a trace for each test (not recommend as it's a heavy performance)
- More: How to set Tracing programmatically (see Tutorial 6)

### How to find Web Objects

(see **selectors.spec.js** file)

### Assertions

(see **assertions.spec.js** file)

### Set video recording and slow motion

Add option for slow motion and video recording in the config file
use: {
video: "on",
lauchOptions: {
slowMo: 1000
}
}

### Hooks & Groups

**Hooks**: beforeAll, beforeEach, afterAll, afterEach
**Groups**: describe

### Annotations & Tags

**Annotations**: skip, fail, fixme, slow, only, skip conditionally
**Tags**: @smoke, @sanity, @fast, @slow
and only run the tests that have the certain tag

Run command: **npx playwright test --grep "@smoke"**

Opposite of grep Skip tests with certain tag
Run command: **npx playwright test --grep-invert "@smoke"**
