//  This is version 2.0, in this page is identified by selectors but in this version page is identified by URL only.
//  The state of page is identified by selector.
//  The AutomationApp Module is removed and all control is shifted to index.js

const db = require("./modules/data.module.js");
let { getBrowser } = require("./modules/browser.module.js");

const { pageFactory } = require("./modules/newpage.module.js");

async function main() {
  console.log("Start....,,,1 new ");

  let { browser, page } = await getBrowser(db.options);

  // await app.page.locator("span ::-p-text(Win Go)").click();
  // console.log("Chp 1");
  // await app.page.waitForSelector("input[name='userNumber']");
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // await app.page.locator('input[name="userNumber"]').fill("");
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  page = await pageFactory(page);

  console.log(`Page Name : ${await page.getPageName()}`);

  // await page.locator("span ::-p-text(Win Go)").click();
  //----------------------------------------------------------------//
  const automationQueue = [
    {
      selector: "i.close",
      action: "click",
    },
    {
      selector: "span ::-p-text(Win Go)",
      action: "click",
    },
  ];

  //================================================================//
  const automationEngine = async () => {
    function createArrayOfPromises() {
      let isResolved = false; // Flag to track if a promise has resolved
      const arrayOfPromises = automationQueue.map((action, index) => {
        return new Promise((resolve, reject) => {
          page
            .locator(action.selector)
            .wait({ state: "visible", timeout: 30000 })
            .then(() => {
              if (!isResolved) {
                console.log(`Element visible : ${action.selector}`);
                isResolved = true; // Mark as resolved
                resolve(index); // Resolve this promise
              } else {
                resolve(false); // Resolve but with false if already resolved
              }
            })
            .catch(() => {
              if (!isResolved) {
                resolve(false); // Resolve but with false if the element is not visible
              }
            });
        });
      });

      return arrayOfPromises;
    }

    async function stateIdentifier() {
      let action = automationQueue[currentStateIndex];
      try {
        // Wait for the element to be visible
        await page
          .locator(action.selector)
          .wait({ state: "visible", timeout: 30000 });
      } catch (e) {
        console.log(`Element not visible : ${action.selector}`);
        console.log(`Error : ${e}`);
        const elementPromises = createArrayOfPromises();

        currentStateIndex = await Promise.race(elementPromises);
        action = automationQueue[currentStateIndex];
        console.log(`Element visible icl : ${action.selector}`);
      }
      console.log(`Element visible icl : ${action.selector}`);
      // Wait for the element handle to be available
      const elementHandle = await page.locator(action.selector).waitHandle();

      // Scroll the element into view
      await page.evaluate((element) => {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }, elementHandle);

      return currentStateIndex;
    }

    let currentState;
    let currentStateIndex = 0;

    while (currentStateIndex < automationQueue.length) {
      console.log("Automation Engine loop i......");

      currentStateIndex = await stateIdentifier();
      currentState = automationQueue[currentStateIndex];

      if (currentState.action !== "funciton") {
        const elementHandle = await page
          .locator(currentState.selector)
          .waitHandle();

        await elementHandle[currentState.action]();
      }

      currentStateIndex++;
    }
  };

  await automationEngine();
  //================================================================//
  //----------------------------------------------------------------//
  /*
  const createArrayOfPromises = () => {
    let isResolved = false; // Flag to track if a promise has resolved
    const arrayOfPromises = automationQueue.map((action) => {
      return new Promise((resolve, reject) => {
        page
          .locator(action.selector)
          .wait({ state: "visible", timeout: 30000 })
          .then(() => {
            if (!isResolved) {
              console.log(`Element visible : ${action.selector}`);
              isResolved = true; // Mark as resolved
              resolve(action); // Resolve this promise
            } else {
              resolve(false); // Resolve but with false if already resolved
            }
          })
          .catch(() => {
            if (!isResolved) {
              resolve(false); // Resolve but with false if the element is not visible
            }
          });
      });
    });

    return arrayOfPromises;
  };

  async function performAutomation() {
    console.log("Performing Automation...");
    const elementPromises = createArrayOfPromises();

    const action = await Promise.race(elementPromises);
    // console.log(`Results : ${JSON.stringify(action)}`);

    const el = await page.locator(action.selector).waitHandle();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await el[action.action]();
    console.log("---- Performing Automation Ended");
  }
*/
  //----------------------------------------------------------------//

  // await el.click();
  console.log("End...");
}
main();

// async function pageIdentifier(page, pageSelectors, timeout = 30000) {
//   const elementPromises = pageSelectors.map(
//     (pageSelector) =>
//       new Promise((resolve, reject) => {
//         pageSelector.IDSelectors.map((selector) =>
//           page
//             .waitForSelector(selector, { timeout })
//             .then((el) => ({ el, selector }))
//             .catch(() => null)
//         );
//         resolve({
//           pageName: pageSelector.pageName,
//           selector: pageSelector.IDSelectors,
//           element: el,
//         });
//       })
//   );
