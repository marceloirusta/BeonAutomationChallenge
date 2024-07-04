import { Page, expect, Locator } from '@playwright/test';

import BeonPageLocators from "../locators/beonPage.locators";

class BeonPage {
    private page: Page;
    private beonLogo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.beonLogo = page.locator(BeonPageLocators.PAGELOGO_IMG);
    }

    async verifyLogoIsThere(): Promise<void> {
        await expect(this.beonLogo).toBeVisible()
    }
}

export { BeonPage };