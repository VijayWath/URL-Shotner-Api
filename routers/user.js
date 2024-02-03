import express from "express";
import { handelUserSignUp ,handelUserLogin } from "../controllers/userControllers.js";

const userRoute = express.Router();

userRoute.post("/",handelUserSignUp)
userRoute.post("/login",handelUserLogin)

export default userRoute
