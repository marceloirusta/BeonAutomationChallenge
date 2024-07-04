import { test, expect } from '@playwright/test';
import { PageManager } from '../pageManager/PageManager';

test('Perform a search', async ({ browser }) => {
  const context = await browser.newContext()
  const page = await context.newPage()
  const pageManager = new PageManager(page)
  const mainPage = pageManager.getMainPage();

  await mainPage.goTo()
  await mainPage.search()
});

test('Perform a search and enter to the first result', async ({ browser }) => {
  const context = await browser.newContext()
  const page = await context.newPage()
  const pageManager = new PageManager(page)
  const mainPage = pageManager.getMainPage();

  await mainPage.goTo()
  await mainPage.search()

  const searchResultsPage = pageManager.getSearchResultsPage()
  await searchResultsPage.clickOnFirstElement()
  
  const beonPage = pageManager.getBeonPage()
  await beonPage.verifyLogoIsThere()
});
