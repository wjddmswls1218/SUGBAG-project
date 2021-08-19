import express from "express";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import globalRouter from "./routers/globalRouter";
import connect from "../db";

const PORT = process.env.PORT;

const app = express();

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));
app.use("/", globalRouter);
connect();

app.listen(PORT, () => {
  console.log(`${PORT} start `);
});
