import { test, expect } from '@playwright/test';
import AmazonElements from '../support/elements/AmazonElements';

test.describe('Amazon Product Search', () => {
  let amazonElements: AmazonElements;
  const BASE_URL = 'https://www.amazon.com';

  test.beforeEach(async ({ page }) => {
    amazonElements = new AmazonElements(page);
    await page.goto(BASE_URL);
  });

  test('Search for a product on Amazon', async ({ page }) => {
    // Digita o termo de busca e clica no botão de busca
    await amazonElements.getSearchField().fill('laptop');
    await amazonElements.getSearchButton().click();

    // Verifica se o primeiro resultado está visível
    const firstResult = amazonElements.getFirstResult().first();
    await expect(firstResult).toBeVisible();

    // Valida se o título da página contém o termo de busca
    const title = await page.title();
    expect(title.toLowerCase()).toContain('laptop');
  });
});
