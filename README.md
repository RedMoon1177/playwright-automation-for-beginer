# playwright-automation-for-beginer

learning: https://www.youtube.com/playlist?list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8

### Installation & Test Run

### Record Tests & Trace Viewer

### How to find Web Objects

### Assertions

### Set video recording and slow motion

### Hooks & Groups

**Hooks**: beforeAll, beforeEach, afterAll, afterEach
**Groups**: describe

### Annotations & Tags

**Annotations**: skip, fail, fixme, slow, only, skip conditionally
**Tags**: @smoke, @sanity, @fast, @slow
and only run the tests that have the certain tag

For example:

> > > command: **npx playwright test --grep "@smoke"**

Opposite of grep Skip tests with certain tag
**npx playwright test --grep-invert "@smoke"**
