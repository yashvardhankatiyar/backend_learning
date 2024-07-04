const express = require("express");

const productController = require("../controller/product")
const router = express.Router();

router.get("/", productController.getAllProducts)
.get("/:id", productController.getProduct)
.post("/", productController.createProduct)
.delete('/:id', productController.deleteProduct)
.put('/:id', productController.updateCompleteProduct)
.patch('/:id', productController.updatePartiallyProduct)

exports.router = router;