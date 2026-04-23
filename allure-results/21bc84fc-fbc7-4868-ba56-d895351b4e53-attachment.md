# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login\login.spec.js >> Login Feature >> TC01 - Valid Login @smoke
- Location: tests\Login\login.spec.js:14:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-sonner-toast][data-visible="true"][data-front="true"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-sonner-toast][data-visible="true"][data-front="true"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - complementary [ref=e3]:
      - generic [ref=e5]:
        - img [ref=e7]
        - generic [ref=e15]:
          - generic [ref=e16]: HR System
          - generic [ref=e17]: Management Portal
      - navigation [ref=e18]:
        - link "Dashboard" [ref=e19] [cursor=pointer]:
          - /url: /dashboard
          - generic [ref=e20]:
            - img [ref=e21]
            - generic [ref=e26]: Dashboard
        - link "Leaves" [ref=e27] [cursor=pointer]:
          - /url: /leaves
          - generic [ref=e28]:
            - img [ref=e29]
            - generic [ref=e34]: Leaves
        - link "Time Tracking" [ref=e35] [cursor=pointer]:
          - /url: /time-tracking
          - generic [ref=e36]:
            - img [ref=e37]
            - generic [ref=e40]: Time Tracking
        - link "Tasks" [ref=e41] [cursor=pointer]:
          - /url: /tasks
          - generic [ref=e42]:
            - img [ref=e43]
            - generic [ref=e46]: Tasks
        - link "Holidays" [ref=e47] [cursor=pointer]:
          - /url: /holidays
          - generic [ref=e48]:
            - img [ref=e49]
            - generic [ref=e55]: Holidays
      - generic [ref=e56]:
        - generic [ref=e57]:
          - generic [ref=e58]: JP
          - generic [ref=e59]:
            - generic [ref=e60]: Jayprakash Patel
            - generic [ref=e61]: employee
        - link "Profile" [ref=e62] [cursor=pointer]:
          - /url: /profile
          - generic [ref=e63]:
            - img [ref=e64]
            - generic [ref=e67]: Profile
        - button "Logout" [ref=e68] [cursor=pointer]:
          - img [ref=e69]
          - generic [ref=e73]: Logout
    - main [ref=e74]:
      - generic [ref=e75]:
        - generic [ref=e76]:
          - generic [ref=e77]:
            - heading "Good Evening, Jayprakash! 👋" [level=1] [ref=e78]
            - paragraph [ref=e79]: Thursday, April 23, 2026 · 18:14:50
          - generic [ref=e80]:
            - generic [ref=e81]: 🟢 Clocked In
            - generic [ref=e82]: 18:14:50
            - button "Clock Out" [ref=e83] [cursor=pointer]
        - generic [ref=e84]:
          - generic [ref=e86]:
            - generic [ref=e87]:
              - paragraph [ref=e88]: Pending Leaves
              - paragraph [ref=e89]: "0"
            - img [ref=e91]
          - generic [ref=e100]:
            - generic [ref=e101]:
              - paragraph [ref=e102]: Total Tasks
              - paragraph [ref=e103]: "0"
            - img [ref=e105]
          - generic [ref=e111]:
            - generic [ref=e112]:
              - paragraph [ref=e113]: Completed Tasks
              - paragraph [ref=e114]: "0"
            - img [ref=e116]
          - generic [ref=e122]:
            - generic [ref=e123]:
              - paragraph [ref=e124]: Upcoming Holidays
              - paragraph [ref=e125]: "4"
            - img [ref=e127]
        - generic [ref=e134]:
          - heading "Quick Info" [level=2] [ref=e135]
          - generic [ref=e136]:
            - generic [ref=e137]: Department:Engineering
            - generic [ref=e138]: Designation:QA
            - generic [ref=e139]: Employee ID:EMP0010
            - generic [ref=e140]: Role:employee
  - alert [ref=e141]
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export async function expectToast(page, message) {
  4  |   const toast = page.locator('[data-sonner-toast][data-visible="true"][data-front="true"]');
> 5  |   await expect(toast).toBeVisible();
     |                       ^ Error: expect(locator).toBeVisible() failed
  6  |   await expect(toast).toContainText(message);
  7  | }
  8  | 
  9  | export async function expectToastType(page, type) {
  10 |   const toast = page.locator('[data-sonner-toast][data-visible="true"][data-front="true"]');
  11 |   await expect(toast).toHaveAttribute('data-type', type);
  12 | }
```