const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("styles"));

const options = {
  root: __dirname,
};

const sendFile = (res, fileName) => {
  res.sendFile(fileName, options, (err) => {
    if (err) {
      res.status(404).send("Something is wrong");
      res.end();
    }
    res.end();
  });
};

app.get("/", (req, res) => {
  const fileName = "./pages/index.html";
  sendFile(res, fileName);
});

app.get("/conservation", (req, res) => {
  const fileName = "./pages/conservation.html";
  sendFile(res, fileName);
});

app.get("/about", (req, res) => {
  const fileName = "./pages/about.html";
  sendFile(res, fileName);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
