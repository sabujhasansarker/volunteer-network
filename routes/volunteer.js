const router = require("express").Router();

const { getUser, addUser } = require("../controller/volunteerController");

router.get("/", getUser);

router.post("/:id", addUser);

module.exports = router;
