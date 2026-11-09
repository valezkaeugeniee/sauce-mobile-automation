import LoginAction from '../actions/login.action.js';
import HomeAction from '../actions/home.action.js';
import AppHelper from '../../utils/app.helper.js';
import { credentials, messages } from '../test_data/credentials.js';

describe('Swag Labs App', () => {
  beforeEach(async () => {
    await AppHelper.reset();
  });

  afterEach(async function () {
    if (this.currentTest?.state === 'failed') {
      const name = this.currentTest.title.replace(/\W+/g, '_');
      await driver.saveScreenshot(`./reports/screenshots/${name}.png`);
    }
  });

  after(async () => {
    await AppHelper.close();
  });

  it('sukses login dengan standard_user', async () => {
    const { username, password } = credentials.standard_user;
    await LoginAction.login(username, password);
    await HomeAction.waitForHome();
    expect(await HomeAction.isHomeDisplayed()).toBe(true);
  });

  it('gagal login dengan kredensial salah', async () => {
    const { username, password } = credentials.invalid_user;
    await LoginAction.login(username, password);
    expect(await LoginAction.getErrorText()).toContain(messages.invalidLogin);
  });

  it('sorting harga low to high', async () => {
    const { username, password } = credentials.standard_user;
    await LoginAction.login(username, password);
    await HomeAction.waitForHome();
    await HomeAction.sortBy('Price (low to high)');
    const prices = await HomeAction.getPrices();
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  });

  it('logout dari aplikasi', async () => {
    const { username, password } = credentials.standard_user;
    await LoginAction.login(username, password);
    await HomeAction.waitForHome();
    await HomeAction.logout();
    expect(await LoginAction.isLoginPageDisplayed()).toBe(true);
  });
});
