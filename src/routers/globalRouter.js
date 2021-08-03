import express from "express";

import { testController } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", testController);

export default globalRouter;
