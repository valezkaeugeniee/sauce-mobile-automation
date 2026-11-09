import LoginPage from '../pageobjects/login.page.js';

class LoginAction {
  async login(username, password) {
    await $(LoginPage.usernameInput).waitForDisplayed({ timeout: 5000 });
    await $(LoginPage.usernameInput).setValue(username);
    await $(LoginPage.passwordInput).setValue(password);
    await $(LoginPage.loginButton).click();
  }

  async isLoginPageDisplayed() {
    return $(LoginPage.loginButton).isDisplayed();
  }

  async getErrorText() {
    const error = $(LoginPage.errorMessage);
    await error.waitForDisplayed({ timeout: 5000 });
    return error.$('android.widget.TextView').getText();
  }
}
export default new LoginAction();
