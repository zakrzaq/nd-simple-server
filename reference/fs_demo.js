const fs = require("fs");
const path = require("path");

// cerate folder
fs.mkdir(path.join(__dirname, "test_dir"), {}, (err) => {
  if (err) throw err;
  console.log("Folder created");
});

// Create and write to file - writeFile overwrites the file
fs.writeFile(
  path.join(__dirname, "test_dir", "hello.txt"),
  "Hello Jake",
  (err) => {
    if (err) throw err;
    console.log("File created");

    // Append file
    fs.appendFile(
      path.join(__dirname, "test_dir", "hello.txt"),
      "Hello Judy",
      (err) => {
        if (err) throw err;
        console.log("File created");
      }
    );
  }
);

// Read file
fs.readFile(
  path.join(__dirname, "test_dir", "hello.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log("File read: ", data);
  }
);

// Rename file
fs.rename(
  path.join(__dirname, "test_dir", "hello.txt"),
  path.join(__dirname, "test_dir", "hello_jake.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed");
  }
);
