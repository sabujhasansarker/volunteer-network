const router = require("express").Router();

const {
  getEvents,
  addEvent,
  deleteEvent,
} = require("../controller/eventController");

router.post("/", addEvent);

router.get("/", getEvents);

router.delete("/:id", deleteEvent);

module.exports = router;
