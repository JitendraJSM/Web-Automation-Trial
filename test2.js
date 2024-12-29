async function testTwo(pageStack) {
  console.log(`testTwo  started...`);
  console.log(
    `\x1b[31mpageStack in testTwo before pusheing : ${JSON.stringify(
      pageStack
    )}\x1b[0m`
  );

  pageStack.push({ modifiedValue: "added by func 2" });
  console.log(
    `\x1b[31mpageStack in testTwo in after pushing : ${JSON.stringify(
      pageStack
    )}\x1b[0m`
  );
}
module.exports = testTwo;
