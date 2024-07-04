import { Page, expect, Locator } from '@playwright/test';

import SearchResultsPageLocators from "../locators/searchResults.locators";

class SearchResultsPage {
    private page: Page;
    private firstResult: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstResult = page.locator(SearchResultsPageLocators.FIRSTRESULT_TEXT);
    }

    async clickOnFirstElement(): Promise<void> {
        await this.firstResult.click()
        await expect(this.page).toHaveURL("https://beon.tech/companies");

    }
}

export { SearchResultsPage };