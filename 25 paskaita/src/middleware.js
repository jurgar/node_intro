/* eslint-disable linebreak-style */
const jwt = require("jsonwebtoken");

const { jwtSecret } = require("./config");

module.exports = {
  isLoggedIn: async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      const user = jwt.verify(token, jwtSecret);
      req.body = user;
      next();
    } catch (error) {
      res.status(401).send({ error: "Invalid token" });
    }
  },
  isAuth: async (req) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      jwt.verify(token, jwtSecret);
      return true;
    } catch (error) {
      return false;
    }
  },
};
