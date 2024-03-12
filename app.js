const express = require("express");
const app = express();

const allRoutes = require("./routes/route");

app.use(express.json());

app.use(allRoutes);

app.use((req, res, next) => {
  res.send("<h1>Page not found</h1>");
});

app.listen(7000, () => {
  console.log("server is running........");
});
