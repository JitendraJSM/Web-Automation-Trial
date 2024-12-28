const loginPage = require("../Classes/loginPage.page.js");
const okWinHomePage = require("../Classes/okWinHomePage.page.js");

const importedPages = module.children
  .filter((m) => m.exports?.pageURL)
  .map((m) => {
    return {
      pageClassName: m.exports.name,
      pageURL: m.exports.pageURL,
      pageConstructor: m.exports,
    };
  });

const pageFactory = async (page) => {
  try {
    //   1. Wait for page to get loaded completely
    await page.waitForFunction(() => document.readyState === "complete");

    //   2. Identify on the basis of Page URL
    let url = await page.url();
    let currentPageClass =
      importedPages.find((p) => url === p.pageURL) ||
      importedPages.reduce(
        (max, url) =>
          url.startsWith(p.pageURL) && url.length > max.length ? url : max,
        ""
      );
    if (!currentPageClass)
      throw new Error("Page's URL is not matched with any imported page.");

    //   3. Return the identified page object
    return new currentPageClass.pageConstructor(page);
  } catch (e) {
    console.log("Error in pageFactory function : ", e.message);
  }
};

module.exports.pageFactory = pageFactory;
// =======================================================
