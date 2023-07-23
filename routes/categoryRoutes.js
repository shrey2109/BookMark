const express = require("express");
const { requireSignIN, isAdmin } = require("../middlewares/authMiddleware");
const {
  createCategoryController,
  updateCategoryController,
  categoryController,
  singleCategoryController,
  deleteCategoryController,
} = require("../controllers/categoryController");

const router = express.Router();

// routes
router.post(
  "/create-category",
  requireSignIN,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIN,
  isAdmin,
  updateCategoryController
);

//get all category
router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete("/delete-category/:id", requireSignIN, isAdmin, deleteCategoryController);


module.exports = router;
