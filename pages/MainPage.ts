import { Page, expect, Locator } from '@playwright/test';

import MainPageLocators from "../locators/mainPage.locators";
import SearchResultsPageLocators from "../locators/searchResults.locators";

class MainPage {
    private page: Page;
    private searchIn: Locator;
    private searchResultsDiv: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchIn = page.locator(MainPageLocators.SEARCH_IN);
        this.searchResultsDiv = page.locator(SearchResultsPageLocators.SEARCHRESULTS);
    }

    async goTo(): Promise<void> {
        await this.page.goto('https://www.google.com/');
    }

    async search(): Promise<void> {
        await this.searchIn.fill('Beon tech');
        await this.page.keyboard.press('Enter');
        await expect(this.searchResultsDiv).toBeVisible();
    }
}

export { MainPage };