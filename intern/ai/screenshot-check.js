const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  const logs = [];
  page.on('console', msg => logs.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => logs.push(`[PAGE ERROR] ${err.message}`));
  
  await page.goto('http://localhost:4173/resume-pages/intern/baidu/product-operation/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  
  const html = await page.content();
  console.log('=== HTML length:', html.length);
  
  try {
    const rootHtml = await page.$eval('#root', el => el.innerHTML.substring(0, 800));
    console.log('=== Root innerHTML:', rootHtml);
  } catch (e) {
    console.log('=== Root not found or empty');
  }
  
  console.log('=== Console logs:');
  logs.forEach(l => console.log(l));
  
  await page.screenshot({ path: '/tmp/baidu_debug.png', fullPage: true });
  await browser.close();
})();
