const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");

router.get("/", getProducts);
router.get("/", createProducts);
router.get("/user_id", updateProduct);
router.get("/user_id", deleteProduct);

module.exports = router;
