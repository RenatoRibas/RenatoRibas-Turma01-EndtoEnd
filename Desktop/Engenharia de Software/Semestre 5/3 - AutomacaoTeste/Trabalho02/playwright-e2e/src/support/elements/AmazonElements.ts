import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class AmazonElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getSearchField(): Locator {
    return this.page.locator('#twotabsearchtextbox');
  }

  getSearchButton(): Locator {
    return this.page.locator('input#nav-search-submit-button');
  }

  getFirstResult(): Locator {
    return this.page.locator('.s-main-slot .s-result-item');
  }

  getFirstResult(): Locator {
    return this.page.locator('.s-main-slot .s-result-item[data-component-type="s-search-result"]').first();
}

}
