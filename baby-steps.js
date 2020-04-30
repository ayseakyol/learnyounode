let result = 0;
for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i]);
}
console.log(result);
const fs = require("fs");
//fs.readFileSync("/path/to/baby-steps.js");
//const str = buf.toString();

fs.readFile("baby-staps.js", function (err, data) {
  //call back
  if (err) {
    console.log(err.stack);
    return;
  }
  console.log(data.toString());
});
