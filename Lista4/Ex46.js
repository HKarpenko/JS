let fs = require("fs");

let fileContent = fs.readFileSync("info1.txt", "utf8");
console.log(fileContent);