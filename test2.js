const db = require("./modules/data.module.js");
let { getBrowser } = require("./modules/browser.module.js");

const { pageFactory } = require("./modules/newpage.module.js");

const AutomationEngine = require("./modules/automationEngine.module.js");

async function main() {
  console.log(`index.js : started...`);

  let { browser, page } = await getBrowser(db.options);

  // 2. Run Automation Engine
  // await AutomationEngine(page);
  page = await pageFactory(page);

  const elemetHandle = await page
    .locator("i.close:not(.van-overflow-hidden i.close)")
    .waitHandle();
  await elemetHandle.click();

  console.log(`Element visible icl : ${elemetHandle}`);
}
main();
