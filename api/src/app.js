const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.json({ message: "Hello monago" });
});

app.get("/api/products", (req, res) => {
  const response = {
    ...req.headers,
    ip: req.ip,
    ips: req.ips,
    reqHost: req.hostname,
  };
  res.json(response);
});

app.listen(PORT);
