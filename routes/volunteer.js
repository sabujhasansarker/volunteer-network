const router = require("express").Router();

const { getUser } = require("../controller/volunteerController");

router.get("/", getUser);

module.exports = router;
