const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('https://kira-pang.github.io/resume-pages/intern/ai/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  const html = await page.content();
  
  // Find all occurrences of baidu/百度
  const lines = html.split('\n');
  lines.forEach((line, i) => {
    if (line.toLowerCase().includes('baidu') || line.includes('百度')) {
      console.log(`Line ${i}: ${line.trim().substring(0, 200)}`);
    }
  });
  
  // Also check visible text
  const text = await page.evaluate(() => document.body.innerText);
  const textLines = text.split('\n');
  console.log('\n=== Visible text containing baidu/百度 ===');
  textLines.forEach((line, i) => {
    if (line.toLowerCase().includes('baidu') || line.includes('百度')) {
      console.log(`[${i}] ${line.trim()}`);
    }
  });
  
  await page.screenshot({ path: '/tmp/resume_check.png', fullPage: true });
  await browser.close();
})();
