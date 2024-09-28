const userController = require("../controllers/user.controller");

const userRouter = require("express").Router();

userRouter.get("/user", userController.get);
userRouter.post("/user", userController.post);
userRouter.put("/user/:id", userController.put);
userRouter.delete("/user/:id", userController.delete);

module.exports = userRouter;
