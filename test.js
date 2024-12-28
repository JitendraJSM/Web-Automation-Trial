const pageURL = "https://okwingame.com/#/";
const importedPagesURL = [
  "https://okwingame.com/#/",
  "https://okwingame.com/#/login/submit",
  "https://okwingame.com/#/login",
];

// const found = importedPagesURL.reduce(
//   (max, url) =>
//     url.startsWith(pageURL) && url.length > (max ? max.length : 0) ? url : max,
//   null
// );

const found =
  importedPagesURL.find((url) => url === pageURL) ||
  importedPagesURL.reduce(
    (max, url) =>
      url.startsWith(pageURL) && url.length > max.length ? url : max,
    ""
  );

console.log(found); // Outputs: https://okwingame.com/#/login
