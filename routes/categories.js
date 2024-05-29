const categoriesRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");
const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require("../controller/categories")
const { findAllCategories, createCategory, findCategoriesById, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName } = require("../middlewares/categories")

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoriesById, sendCategoryById);
categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated
);
categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    checkAuth,
    updateCategory,
    sendCategoryUpdated
);
categoriesRouter.delete(
    "/categories/:id",
    checkAuth,
    deleteCategory,
    sendCategoryDeleted
);

module.exports = categoriesRouter