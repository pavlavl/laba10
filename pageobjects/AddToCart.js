const { BasePage } = require('./basePage.js');
const { By } = require('selenium-webdriver');
const assert = require('assert');

class AddToCart extends BasePage {
  constructor() {
    super();
  }

  async findElementByXpathAndClick(xpath) {
    await this.driver.findElement(By.xpath(xpath)).click();
  }
  async driverSleep(time) {
    await this.driver.sleep(time);
  }
  async assertCartTitle() {
    let pageTitle = await this.driver.getTitle().then(function (title) {
      return title;
    });
    assert.strictEqual(pageTitle, 'Buy Major IV wireless Bluetooth headphones | Marshall');
  }

  async driverQuit() {
    await this.driver.quit();
  }
}

module.exports.AddToCart = AddToCart;
