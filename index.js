import express from "express";
import urlRoute from "./routers/url.js";
import { connectToDbt } from "./connections.js";

const app = express();
const port = 2000;

app.use(connectToDbt("mongodb://127.0.0.1:27017/short-url")).then(() => {
  console.log("DB connected");
});
app.use("/url", urlRoute);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
