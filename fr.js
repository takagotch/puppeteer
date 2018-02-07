const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page    = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path; 'ex.png'});

  await browser.close();
})();

//create pdf
(async () => {
  const browser = await puppeteer.launch();
  const page    = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {aitUntil: 'networkiedle2'});
  await page.pdf({path: 'hn.pdf', format: 'A4'});

  await browser.close();
})();

//Page.pdf()
(async () => {
  const browser = await puppeteer.launch();
  const page    = await browser.newPage();
  await page.goto('https://ex.com');

  const dimensions = await page.evaluate(() => {
    return{
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceSacelFactor: window.devicePixelRaito
    };
  });
  
  console.log('Dimensions:', dimensions);

  await browser.close();
})();


