import { MainPage } from '../pages/MainPage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import {BeonPage} from '../pages/BeonPage'

class PageManager {
    private page: any;
    private mainPage: MainPage;
    private beonPage: BeonPage;
    private searchResultsPage: SearchResultsPage;

    constructor(page: any) {
        this.page = page;
        this.mainPage = new MainPage(this.page);
        this.beonPage = new BeonPage(this.page);
        this.searchResultsPage = new SearchResultsPage(this.page);
    }

    getMainPage(): MainPage {
        return this.mainPage;
    }

    getBeonPage(): BeonPage {
        return this.beonPage;
    }

    getSearchResultsPage(): SearchResultsPage {
        return this.searchResultsPage;
    }
}

export { PageManager };