const http = require("http");

// crete server ovject
http
  .createServer((req, res) => {
    res.write("Hello World");
    res.end();
  })
  .listen(5000, () => console.log("Server running on port 5000"));
