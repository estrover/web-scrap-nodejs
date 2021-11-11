const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({})
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation({ waitUntil: ['networkidle2'] })
    await page.setViewport({ width: 1920, height: 1080 })
    await page.goto('https://www.google.co.th/imghp')
    await page.focus('input')
    await page.keyboard.type('Mosquito aedes')
    await page.click('button.Tg7LZd')

    await navigationPromise
    const elem = await page.$('div');
    const boundingBox = await elem.boundingBox();

    for (let i=1, count=10; i<=count; i++){
        await page.screenshot({ path: `temp/mosquito-${i}.png` })
        
        await page.mouse.move(
            boundingBox.x + boundingBox.width / 2,
            boundingBox.y + boundingBox.height / 2
        );

        await page.mouse.wheel({ deltaY: 1080 });
        await page.waitForTimeout(1000)
    }
    browser.close()
})();
