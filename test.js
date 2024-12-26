// const boolT = true;
// const boolF = false;

// const ints = [1, 2, 3, 4, 5];

// ints.forEach((i) => i !== 4 || console.log("int is : ", i));

/*async function pageIdentifier(page, pageSelectors, timeout = 30000) {
  const pagePromises = pageSelectors.map(async (pageSelector) => {
    await Promise.all[
      pageSelector.IDSelectors.map((IDSelector) =>
        page
          .waitForSelector(IDSelector, { timeout })
          // .then((el) => ({ el, IDSelector }))
          .then((el) => true)
          .catch(() => null)
      )
    ];

    return pageSelector;
  });

  const identifiedPage = await Promise.race(pagePromises);
  console.log("identifiedPage", identifiedPage);
}
here pageSelectors is an array of objects with pageName and IDSelectors
 i want this function to return the pageSelector object for which page.waitForSelector returns true
 but this function always returns the first pageSelector object of pageSelectors array
*/
class MyClass {
  static IDselectors = ["#home"];
  constructor() {
    console.log("MyClass instance created");
  }
  async getPageName() {
    // return "okWinPage";
    return "MyClassExample";
  }
}
module.exports = MyClass;
