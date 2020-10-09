const router = require("express").Router();

const {
  getUser,
  addUser,
  deleteVolunteer,
} = require("../controller/volunteerController");

router.get("/", getUser);

router.post("/:id", addUser);

router.delete("/:id", deleteVolunteer);

module.exports = router;
