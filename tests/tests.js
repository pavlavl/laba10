const { EnterDataField } = require('../pageobjects/enterDataField.js');
const { CompareField } = require('../pageobjects/compareStringsField.js');
const {
  CompareStringsField,
} = require('../pageobjects/compareStringsField.js');
const { AddToCart } = require('../pageobjects/AddToCart.js');
const { ChangeLang } = require('../pageobjects/ChangeLang.js');

const TestEnterDataField = async () => {
  const enterDataField = new EnterDataField();
  await enterDataField.driverGet('https://pastebin.com');
  await enterDataField.findElementByIdAndSendKeys(
    'postform-text',
    'Hello from WebDriver'
  );
  await enterDataField.findElementByCssAndClick(
    'div.form-group.field-postform-expiration span.select2-selection__arrow'
  );
  await enterDataField.findElementByXpathAndClick(
    '//span[@class="select2-results"]/ul[@class="select2-results__options"]/li[text()="10 Minutes"]'
  );
  await enterDataField.findElementByIdAndSendKeys('postform-name', 'helloweb');
  await enterDataField.driverSleep(5000);
  await enterDataField.driverQuit();
};

const TestCompareStringsField = async () => {
  const compareField = new CompareField();
  await compareField.getBrowser('https://pastebin.com');
  await compareField.findElementIDandEnter(
    'postform-text',
    `git config --global user.name  "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force`
  );
  await compareField.sleepDriver();
  await compareField.WaitElementLocatedCSS('.active-path');
  await compareField.findElementCSSandClick('.active-path');
  await compareField.findElementCSSandClick(
    '.toggle__control > label:nth-child(2)'
  );
  await compareField.findElementXpathandClick(
    '//*[@id="select2-postform-format-container"]'
  );
  await compareField.findElementXpathandClick(
    '(//ul[@class="select2-results__options select2-results__options--nested"]/*[.="Bash"])[1]'
  );
  await compareField.findElementCSSandClick(
    'div.form-group.field-postform-expiration span.select2-selection__arrow'
  );
  await compareField.findElementXpathandClick(
    '//span[@class="select2-results"]/ul[@class="select2-results__options"]/li[text()="10 Minutes"]'
  );
  await compareField.findElementIDandEnter(
    'postform-name',
    'how to gain dominance among developers'
  );
  await compareField.WaitElementLocatedXpath('//button[@class="btn -big"]');
  await compareField.findElementXpathandClick('//button[@class="btn -big"]');
  await compareField.sleepDriver();
  await compareField.WaitElementLocatedXpath(
    '(//a[@class="btn -small h_800"])[1]'
  );
  await compareField.WaitElementLocatedXpath(
    '(//a[@class="btn -small h_800"])[1]'
  );
  await compareField.ClosePage();
};

const TestAddToCart = async () => {
  const addToCart = new AddToCart();
  await addToCart.driverGet('https://www.marshallheadphones.com/us/en/');
  
  await addToCart.driverSleep(1000);
  await addToCart.findElementByXpathAndClick(
    '//*[@id="onetrust-accept-btn-handler"]'
  );
  await addToCart.driverSleep(1000);
  await addToCart.findElementByXpathAndClick(
    '/html/body/div[3]/div[6]/div/div[1]/div[3]/div/div[2]/div[1]/a'
  );
  await addToCart.driverSleep(1000);
  await addToCart.findElementByXpathAndClick(
    '//*[@id="splide01-clone06"]'
  );
  await addToCart.driverSleep(1000);
  await addToCart.findElementByXpathAndClick(
    '/html/body/div[3]/div[9]/div[2]/div[3]/div[5]/div/div/a[3]/span/img'
  );
  await addToCart.driverSleep(1000);
  await addToCart.findElementByXpathAndClick(
    '/html/body/div[3]/div[9]/div[2]/div[3]/div[7]/div[2]/div/button[2]'
  );

  await addToCart.driverSleep(1000);
  await addToCart.assertCartTitle();
  await addToCart.driverSleep(3000);
  await addToCart.driverQuit();
};

const TestChangeLang = async () => {
  const changeLang = new ChangeLang();
  await changeLang.driverGet('https://www.marshallheadphones.com/us/en/');

  await changeLang.driverSleep(3000);
  await changeLang.findElementByXpathAndClick(
    '//*[@id="onetrust-accept-btn-handler"]'
  );
  await changeLang.driverSleep(3000);
  await changeLang.findElementByXpathAndClick(
    '/html/body/div[3]/div[6]/div/div[1]/div[1]/div[2]/div'
  );
  await changeLang.driverSleep(3000);
  await changeLang.findElementByXpathAndClick(
    '/html/body/div[3]/div[1]/div[4]/div[1]'
  );
  await changeLang.driverSleep(3000);
  await changeLang.findElementByXpathAndClick(
    '/html/body/div[3]/div[1]/div[4]/div[1]/div[2]/div[7]'
  );
  await changeLang.driverSleep(3000);
  await changeLang.findElementByXpathAndClick(
    '/html/body/div[3]/div[1]/div[4]/div[2]/div[1]'
  );
  await changeLang.checkXpathExists(
    '/html/body/div[3]/div[1]/div[4]/div[2]/div[2]'
  );
  await changeLang.driverSleep(3000);
  await changeLang.findElementByXpathAndClick(
    'html/body/div[3]/div[1]/div[4]/div[2]/div[2]'
  );
  await changeLang.driverSleep(3000);
  await changeLang.findElementByXpathAndClick(
    '/html/body/div[3]/div[1]/div[4]/div[3]'
  );

  await changeLang.driverSleep(3000);
  await changeLang.driverQuit();
};


// TestEnterDataField();
// TestCompareStringsField();
TestAddToCart();
// TestChangeLang();