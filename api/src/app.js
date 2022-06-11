const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.json({ message: "Hello monago" });
});

app.get("/api/products", (req, res) => {
  const response = {
    info: {
      ...req.headers,
      ip: req.ip,
      reqHost: req.hostname,
    },
    products: [
      {
        id: 1,
        name: "LG OLED TV 45",
      },
    ],
  };
  res.json(response);
});

app.listen(PORT);
