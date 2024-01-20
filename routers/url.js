import express from "express";
// const { url } = require("inspector");
import { handelgeneratenewShorlUrl } from "../controllers/urlControllers.js";

const urlRoute = express.Router();

urlRoute.post("/", handelgeneratenewShorlUrl);

export default urlRoute;
