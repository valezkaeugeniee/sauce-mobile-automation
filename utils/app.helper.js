const APP_ID = 'com.swaglabsmobileapp';

class AppHelper {
  async launch() { await driver.activateApp(APP_ID); }
  async close()  { await driver.terminateApp(APP_ID); }
  async reset()  { await this.close(); await this.launch(); }
}
export default new AppHelper();
