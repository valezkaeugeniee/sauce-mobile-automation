class HomePage {
  get productsTitle() { return 'android=new UiSelector().text("PRODUCTS")'; }
  get burgerMenu()    { return '~test-Menu'; }
  get logoutMenu()    { return '~test-LOGOUT'; }
  get sortButton()    { return '~test-Modal Selector Button'; }
  get productPrices() { return '~test-Price'; }

  sortOption(label)   { return `android=new UiSelector().text("${label}")`; }
  addToCartButton(i)  { return `(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[${i}]`; }
  removeButton(i)     { return `(//android.view.ViewGroup[@content-desc="test-REMOVE"])[${i}]`; }
}
export default new HomePage();
