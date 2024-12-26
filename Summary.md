# Code / Concepts learned whlile working on this project

1. Check page is loaded or not
   await page.evaluate(() => {
   return document.readyState === 'complete';
   });

2. Wait for page to get loaded completely
   await page.waitForFunction(() => document.readyState === 'complete');
