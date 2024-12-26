const loginPage = require("./Classes/loginPage.page.js");
const okWinHomePage = require("./Classes/okWinHomePage.page.js");
let { getBrowser } = require("./modules/browser.module.js");
const { pageFactory } = require("./modules/page.module.js");
async function main() {
  let { browser, page } = await getBrowser(db.options);

  await pageFactory(page);
  console.log(`Page Name : ${await page.getPageName()}`);
}
main();
