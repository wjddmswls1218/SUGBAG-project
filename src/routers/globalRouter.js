const express = require("express");

const {
  mainController,
  hotelController,
  motelController,
  campingController,
  glampingController,
  hanokController,
  pensionController,
  resortController,
  searchController,
  loginController,
  menuController,
  createController,
  postcreateController,
} = require("../controllers/globalController");

const globalRouter = express.Router();

globalRouter.get("/", mainController);

globalRouter.get("/hotel", hotelController);
globalRouter.get("/motel", motelController);
globalRouter.get("/camping", campingController);
globalRouter.get("/glamping", glampingController);
globalRouter.get("/hanok", hanokController);
globalRouter.get("/pension", pensionController);
globalRouter.get("/resort", resortController);
globalRouter.get("/menu", menuController);
globalRouter.get("/create", createController);

globalRouter.get("/search", searchController);

globalRouter.post("/login", loginController);
globalRouter.post("/postcreate", postcreateController);

module.exports = globalRouter;
