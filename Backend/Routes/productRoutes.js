const express = require("express");
const productController = require("../Controllers/productController");

const router = express.Router();

router.get("/", productController.getAllProducts);
router.post("/", productController.createProduct);
router.get("/:id", productController.getProduct);
router.delete("/:id", productController.deleteProduct);
router.patch("/:id", productController.updateProduct);

module.exports = router;
