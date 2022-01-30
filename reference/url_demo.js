const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:1234/hello.html?id=100&status=active"
);

// Serialised url
console.log(myUrl.href);
console.log(myUrl.toString());

// host
console.log(myUrl.host); // include port number
console.log(myUrl.hostname); // doesnt include port number

// pathname
console.log(myUrl.pathname);

// serialised query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append("jake", "38");
console.log(myUrl.searchParams);

// loop
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
