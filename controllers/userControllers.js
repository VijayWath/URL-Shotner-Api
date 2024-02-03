import User from "../Models/users.js";
import { v4 as uuidv4 } from "uuid";
import { setUser, getUser } from "../service/auth.js";

async function handelUserSignUp(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/login");
}

async function handelUserLogin(req, res) {
  const { name, email, password } = req.body;
  const user = await User.findOne({
    email,
    password,
  });
  if (!user) {
    return res.render("login", { error: "user not found" });
  }
  const token = setUser(user);
  res.cookie("token",token)
  return res.redirect("/");
}

export { handelUserSignUp, handelUserLogin };
