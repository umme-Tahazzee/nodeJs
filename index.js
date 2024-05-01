const http = require("http");
const fs = require("fs");
const port = process.env.PORT;
const hostName = "127.0.0.1";

const handleReadFile = (fileName, statusCode, req, res) => {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(statusCode, {
        "Content-Type": "text/html",
      });
      res.write(data);
    }
  });
};


const server = http.createServer((req, res) => {
  if (req.url === "/") {
    handleReadFile( "./view/index.html",200, req, res);
  }
  else if(req.url === '/about'){
      handleReadFile( './view/about.html',200, req, res)
  }
  else if(req.url === '/contact'){
       handleReadFile( './view/contact.html',200, req, res)
  }else{
       handleReadFile( './view/error.html',404, req, res)
  }


});

server.listen(port, () => {
  console.log(`open server`);
});
