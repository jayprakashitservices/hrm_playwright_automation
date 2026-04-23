# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login\login.spec.js >> Login Feature >> TC01 - Valid Login @smoke
- Location: tests\Login\login.spec.js:14:3

# Error details

```
Error: Element not found with any locator strategy
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e5]:
    - generic [ref=e6]:
      - img [ref=e8]
      - heading "HR System" [level=1] [ref=e12]
      - paragraph [ref=e13]: Sign in to your account
    - generic [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e16]:
          - generic [ref=e17]: Email Address
          - generic [ref=e18]:
            - img [ref=e19]
            - textbox "you@company.com" [ref=e22]
        - generic [ref=e23]:
          - generic [ref=e24]: Password
          - generic [ref=e25]:
            - img [ref=e26]
            - textbox "••••••••" [ref=e29]
            - button [ref=e30] [cursor=pointer]:
              - img [ref=e31]
        - button "Sign In" [ref=e34] [cursor=pointer]
      - paragraph [ref=e36]:
        - text: "ℹ Default password for new employees:"
        - strong [ref=e37]: Password@123
  - alert [ref=e38]
```

# Test source

```ts
  1  | class LocatorEngine {
  2  |     static async resolve(page, locatorConfig, options = {}) {
  3  |         const timeout = options.timeout || 3000;
  4  | 
  5  |         const strategies = [
  6  |             { name: 'testId', fn: () => locatorConfig.testId && page.getByTestId(locatorConfig.testId) },
  7  |             { name: 'role', fn: () => locatorConfig.role && page.getByRole(locatorConfig.role.role, { name: locatorConfig.role.name }) },
  8  |             { name: 'label', fn: () => locatorConfig.label && page.getByLabel(locatorConfig.label) },
  9  |             { name: 'placeholder', fn: () => locatorConfig.placeholder && page.getByPlaceholder(locatorConfig.placeholder) },
  10 |             { name: 'text', fn: () => locatorConfig.text && page.getByText(locatorConfig.text) },
  11 |             { name: 'css', fn: () => locatorConfig.css && page.locator(locatorConfig.css) },
  12 |             { name: 'xpath', fn: () => locatorConfig.xpath && page.locator(locatorConfig.xpath) }
  13 |         ];
  14 | 
  15 |         for (const strategy of strategies) {
  16 |             if (!strategy.fn()) continue;
  17 | 
  18 |             const locator = strategy.fn();
  19 | 
  20 |             try {
  21 |                 await locator.first().waitFor({ state: 'visible', timeout });
  22 |                 console.log(`✅ Found using: ${strategy.name} - locatorEngine.js:22`);
  23 |                 return locator;
  24 |             } catch (e) {
  25 |                 console.log(`❌ Failed: ${strategy.name} - locatorEngine.js:25`);
  26 |             }
  27 |         }
  28 | 
> 29 |         throw new Error('Element not found with any locator strategy');
     |               ^ Error: Element not found with any locator strategy
  30 |     }
  31 | }
  32 | 
  33 | module.exports = { LocatorEngine };
```