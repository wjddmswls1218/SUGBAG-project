import express from "express";

import {
  mainController,
  hotelController,
  motelController,
  campingController,
  glampingController,
  hanokController,
  pensionController,
  resortController,
  searchController,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", mainController);

globalRouter.get("/hotel", hotelController);
globalRouter.get("/motel", motelController);
globalRouter.get("/camping", campingController);
globalRouter.get("/glamping", glampingController);
globalRouter.get("/hanok", hanokController);
globalRouter.get("/pension", pensionController);
globalRouter.get("/resort", resortController);

globalRouter.get("/search", searchController);

export default globalRouter;
