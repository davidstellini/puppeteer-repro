const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://allfront.io');
    // Scrape the website here using Puppeteer
    const content = await page.content();

    if (content.length > 100) {
        console.log('Success: ' + content.substring(0, 100));
    }

    await browser.close();
})();
