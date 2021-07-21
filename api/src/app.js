const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.json({ message: "Hello world" });
});

app.listen(PORT);
