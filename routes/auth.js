const authRouter = require("express").Router();
const { login } = require("../controller/auth")

authRouter.post("/auth/login", login)

module.exports = authRouter
