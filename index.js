const http = require("http");
const fs = require("fs/promises");
const path = require("path");

http
  .createServer(async (req, res) => {
    let fileName;
    switch (req.url) {
      case "/":
        fileName = "./pages/index.html";
        break;
      case "/about":
        fileName = "./pages/about.html";
        break;
      case "/conservation":
        fileName = "./pages/conservation.html";
        break;
      default:
        fileName = "." + req.url;
        break;
    }

    const extname = path.extname(req.url);
    let contentType = "text/html";
    if (extname) {
      contentType = `text/${extname.slice(1)}`;
    }

    try {
      const data = await fs.readFile(fileName, { encoding: "utf8" });
      res.writeHeader(200, { "Content-Type": contentType });
      res.write(data);
      res.end();
    } catch (err) {
      res.write("err");
      res.end();
    }
  })
  .listen(8080, () => {
    console.log("running");
  });
