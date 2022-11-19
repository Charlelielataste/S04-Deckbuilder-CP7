const dotenv = require("dotenv");
dotenv.config();
const session = require("express-session");
const express = require("express");

const PORT = process.env.PORT || 1234;
const router = require("./app/router");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: (1000 * 60 * 60)
  }
}));

app.set("view engine", "ejs");
app.set("views", "app/views");

app.use(express.static("public"));

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
