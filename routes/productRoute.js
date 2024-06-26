const { Router } = require("express");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require("../controllers/productController");
const {
  authorizePermissions,
  authenticateUser,
} = require("../middleware/authentication");

const router = Router();

router
  .route("/")
  .get(getAllProducts)
  .post(authenticateUser, authorizePermissions("admin"), createProduct);

router
  .route("/uploadImage")
  .post(authenticateUser, authorizePermissions("admin"), uploadImage);
router
  .route("/:id")
  .get(getSingleProduct)
  .patch(authenticateUser, authorizePermissions("admin"), updateProduct)
  .delete(authenticateUser, authorizePermissions("admin"), deleteProduct);

module.exports = router;
