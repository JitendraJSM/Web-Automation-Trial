const testTwo = require("./test2");
async function testOne() {
  let i = 0;
  while (i < 2) {
    console.count(`testOne :`);
    const pageStack = [{ value: "added by func 1" }];
    console.log(
      `\x1b[31mpageStack in testOne before testTwo : ${JSON.stringify(
        pageStack
      )}\x1b[0m`
    );
    console.log(`---------------------------------------------------`);

    testTwo(pageStack);
    console.log(`---------------------------------------------------`);
    console.log(
      `\x1b[31mpageStack in testOne after testTwo : ${JSON.stringify(
        pageStack
      )}\x1b[0m`
    );

    console.log(`\x1b[31mtestOne completed\x1b[0m`);
    console.log(`===================================================`);
    i++;
  }
}
testOne();
