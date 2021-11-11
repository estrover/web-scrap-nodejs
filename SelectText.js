const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({})
  const page = await browser.newPage()

  await page.goto('https://www.thesaurus.com/browse/smart')
  for (let i=1, count=10; i<count; i++) {
    var element = await page.waitForSelector(`#meanings > div.css-ixatld.e15rdun50 > ul > li:nth-child(${i}) > a`)
    var text = await page.evaluate(element => element.textContent, element)
    console.log(text)
  }
  browser.close()
})();
