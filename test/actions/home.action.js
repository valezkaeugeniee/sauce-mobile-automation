import HomePage from '../pageobjects/home.page.js';

class HomeAction {
  async waitForHome() {
    await $(HomePage.productsTitle).waitForDisplayed({ timeout: 5000 });
  }

  async isHomeDisplayed() {
    return $(HomePage.productsTitle).isDisplayed();
  }

  async sortBy(label) {
    await $(HomePage.sortButton).click();
    const option = $(HomePage.sortOption(label));
    await option.waitForDisplayed({ timeout: 5000 });
    await option.click();
  }

  async getPrices() {
    const elements = await $$(HomePage.productPrices);
    const prices = [];
    for (const el of elements) {
      prices.push(parseFloat((await el.getText()).replace('$', '')));
    }
    return prices;
  }

  async logout() {
    await $(HomePage.burgerMenu).click();
    await $(HomePage.logoutMenu).waitForDisplayed({ timeout: 5000 });
    await $(HomePage.logoutMenu).click();
  }
}
export default new HomeAction();
