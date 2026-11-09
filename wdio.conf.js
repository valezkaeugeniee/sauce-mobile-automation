import path from 'node:path';

export const config = {
  runner: 'local',
  port: 4723,
  specs: ['./test/specs/**/*.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Pixel_8',
    'appium:app': path.join(process.cwd(), 'apps', 'sauce-demo.apk'),
    'appium:appWaitActivity': '*',
    'appium:autoGrantPermissions': true,
    'appium:newCommandTimeout': 240
  }],
  logLevel: 'info',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: './reports/allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false
    }]
  ],
  mochaOpts: { ui: 'bdd', timeout: 60000 }
};