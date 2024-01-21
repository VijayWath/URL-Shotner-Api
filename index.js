import express from "express";
import urlRoute from "./routers/url.js";
import { connectToDb } from "./connections.js";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const port = process.env.port | 3001;
const password = encodeURIComponent("Omwath@2004");
const DB = `mongodb+srv://vijaywath:${password}@cluster0.scee2et.mongodb.net/?retryWrites=true&w=majority`;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connectToDb(DB).then(() => {
  console.log("DB connected");
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/url", urlRoute);

app.get('/',(req,res)=>{
  res.render('home');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
