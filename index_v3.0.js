const db = require("./modules/data.module.js");
let { getBrowser } = require("./modules/browser.module.js");

const AutomationEngine = require("./modules/automationEngine.module.js");

async function main() {
  console.log(`index.js : started...`);

  let { browser, page } = await getBrowser(db.options);

  // 2. Run Automation Engine
  await AutomationEngine(page);
}
main();
