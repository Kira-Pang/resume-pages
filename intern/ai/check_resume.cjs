const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  const failedUrls = [];
  page.on('response', res => {
    if (res.status() === 404) failedUrls.push(res.url());
  });
  
  await page.goto('https://kira-pang.github.io/resume-pages/intern/ai/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  for (let i = 0; i < 12; i++) {
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(300);
  }
  await page.waitForTimeout(1000);
  
  await page.screenshot({ path: '/tmp/resume_check.png', fullPage: true });
  
  console.log('=== 404 URLs ===');
  [...new Set(failedUrls)].forEach(u => console.log(u));
  if (failedUrls.length === 0) console.log('None');
  
  // Check for baidu references
  const html = await page.content();
  const hasBaidu = html.toLowerCase().includes('baidu') || html.includes('百度');
  console.log('\n=== Baidu references ===');
  console.log(hasBaidu ? 'FOUND' : 'None');
  
  await browser.close();
})();
