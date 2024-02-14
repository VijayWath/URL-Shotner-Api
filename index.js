import express from "express";
import urlRoute from "./routers/url.js";
import { connectToDb } from "./connections.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from "path";
import DB from "./secerets/secerates.js";
import Url from "./Models/url.js";
import userRoute from "./routers/user.js";
import { checkForAuthentication, restrictTo } from "./middlewares/auth.js";

const app = express();
const port = process.env.port | 3001;

app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connectToDb(DB).then(() => {
  console.log("DB connected");
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(checkForAuthentication);
app.use("/url",restrictTo(["NORMAL"]), urlRoute);
app.use("/user", userRoute);

app.get("/admin",restrictTo(["ADMIN"]),async(req,res)=>{
  const userUrls = await Url.find({});
  res.render("home", { urls: userUrls });
})

app.get("/",restrictTo(["NORMAL","ADMIN"]), async (req, res) => {
  const userUrls = await Url.find({ createdBy: req.user._id });
  res.render("home", { urls: userUrls });
});

app.get("/signup", (req, res) => {
  return res.render("signup.ejs");
});

app.get("/signup", (req, res) => {
  return res.cookie("token","").redirect("/login");
});

app.get("/login", (req, res) => {
  return res.render("login.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
