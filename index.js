const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // extension of the file
  let fileExt = path.extname(filePath);

  // initial content type
  let contentType = "text/html";

  // check extension
  switch (fileExt) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Read file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code == "ENONET") {
        // PAGE NOT FOUND
        fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
          if (err) throw err;
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data, "utf8");
        });
      } else {
        // some server error
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      // sucess
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
