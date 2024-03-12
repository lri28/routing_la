const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Homepage");
  res.send("<h1>Homepage</h1>");
});

router.get("/login", (req, res, next) => {
  console.log("Login Page");
  res.send("<h1>Login Page</h1>");
});

router.get("/register", (req, res, next) => {
  console.log("Register Page");
  res.send("<h1>Register Page</h1>");
});
module.exports = router;
