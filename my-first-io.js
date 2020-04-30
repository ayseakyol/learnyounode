const fs = require("fs");

const data = fs.readFileSync(process.argv[2]);
const line = data.toString().split("\n").length - 1;
console.log(line);
