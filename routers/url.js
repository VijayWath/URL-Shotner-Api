import express from "express";
import {
  handelgeneratenewShorlUrl,
  handeRedirectlUrl,
  handeGetAnalytics,
} from "../controllers/urlControllers.js";

const urlRoute = express.Router();

urlRoute.post("/", handelgeneratenewShorlUrl);

urlRoute.get("/:id", handeRedirectlUrl);

urlRoute.get("/analytics/:id", handeGetAnalytics);

export default urlRoute;
