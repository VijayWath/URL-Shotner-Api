import express from "express";
import urlRoute from "./routers/url.js";
import { connectToDb } from "./connections.js";
import bodyParser from "body-parser";

const app = express();
const port = 2000;

connectToDb("mongodb://127.0.0.1:27017/short-url").then(() => {
  console.log("DB connected");
});

app.use(bodyParser.urlencoded({extended : false}))

app.use("/url", urlRoute);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
