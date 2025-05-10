const express = require("express");
const router = express.Router();

const {
  getAllComponents,
  addComponent,
} = require("../controllers/componentLibrary");

router.route("/getAllComponents").get(getAllComponents);
router.route("/addComponent").post(addComponent);

module.exports = router;
