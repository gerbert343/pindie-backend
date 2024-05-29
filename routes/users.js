const usersRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");
const { sendAllUsers, sendUserCreated, sendUsersById, sendUserUpdated, sendUserDeleted, sendMe } = require("../controller/users")
const { findAllUsers, createUser, findUsersById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists, checkIfUsersAreSafe, hashPassword } = require("../middlewares/users")

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUsersById, sendUsersById);
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
);
usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
);
usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
);

module.exports = usersRouter;