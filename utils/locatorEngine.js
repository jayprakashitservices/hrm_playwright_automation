class LocatorEngine {
    static async resolve(page, locatorConfig, options = {}) {
        const timeout = options.timeout || 3000;

        const strategies = [
            { name: 'testId', fn: () => locatorConfig.testId && page.getByTestId(locatorConfig.testId) },
            { name: 'role', fn: () => locatorConfig.role && page.getByRole(locatorConfig.role.role, { name: locatorConfig.role.name }) },
            { name: 'label', fn: () => locatorConfig.label && page.getByLabel(locatorConfig.label) },
            { name: 'placeholder', fn: () => locatorConfig.placeholder && page.getByPlaceholder(locatorConfig.placeholder) },
            { name: 'text', fn: () => locatorConfig.text && page.getByText(locatorConfig.text) },
            { name: 'css', fn: () => locatorConfig.css && page.locator(locatorConfig.css) },
            { name: 'xpath', fn: () => locatorConfig.xpath && page.locator(locatorConfig.xpath) }
        ];

        for (const strategy of strategies) {
            if (!strategy.fn()) continue;

            const locator = strategy.fn();

            try {
                await locator.first().waitFor({ state: 'visible', timeout });
                console.log(`✅ Found using: ${strategy.name} - locatorEngine.js:22`);
                return locator;
            } catch (e) {
                console.log(`❌ Failed: ${strategy.name} - locatorEngine.js:25`);
            }
        }

        throw new Error('Element not found with any locator strategy');
    }
}

module.exports = { LocatorEngine };