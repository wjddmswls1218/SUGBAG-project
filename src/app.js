const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const globalRouter = require("./routers/globalRouter");
const expressSession = require("express-session");
const axios = require("axios");
const connect = require("../db");

const PORT = process.env.PORT;

const app = express();

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));
app.use("/", globalRouter);
connect();
app.use(
  expressSession({
    name: "codeil",
    secret: '@#@$MYSIGN#@$#$",',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

app.listen(PORT, () => {
  console.log(`${PORT} start `);
});
