import jwt from "jsonwebtoken";

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role : user.role
    },
    "password"
  );
}

function getUser(token) {
  if (!token) return null;
  return jwt.verify(token, "password");
}

export { setUser, getUser };
