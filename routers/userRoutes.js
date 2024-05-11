const express = require("express");
const router = express.Router();

const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

router.get("/", getUser);
router.get("/", createUser);
router.get("/user_id", updateUser);
router.get("/user_id", deleteUser);

module.exports = router;
