const router = require("express").Router();

const {
   getUser,
   addUser,
   deleteVolunteer,
   getEventByUser,
} = require("../controller/volunteerController");

router.get("/", getUser);

router.get("/:id", getEventByUser);

router.post("/:id", addUser);

router.delete("/:id", deleteVolunteer);

module.exports = router;
