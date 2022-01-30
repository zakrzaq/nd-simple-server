const path = require("path");

// base name
console.log(__filename);
console.log(path.basename(__filename));

// Directory name

console.log(path.dirname(__filename));

// File extensions
console.log(path.extname(__filename));

// Path object
console.log(path.parse(__filename));

// concatonate paths
console.log(path.join(__dirname, "test", "hello.html"));
