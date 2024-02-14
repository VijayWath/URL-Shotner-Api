import { setUser, getUser } from "../service/auth.js";

function checkForAuthentication(req, res, next) {
  req.user = null;
  // const authorizationTokenValue = req.headers["authorization"];
  const authorizationTokenValue = req.cookies?.token;
  if (!authorizationTokenValue) {
    return next();
  }
  // const token = authorizationTokenValue.split("Bearer ")[1];
  const user = getUser(authorizationTokenValue);
  req.user = user;
  console.log(user)
  next();
}

function restrictTo(roles) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login");
    if (!roles.includes(req.user.role)) return res.end("Unauthorised");
    next();
  };
}

export { checkForAuthentication, restrictTo };
