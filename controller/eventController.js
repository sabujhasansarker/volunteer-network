const Event = require("../models/Events");
const { error } = require("../utilities/error");

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    if (events) {
      return res.status(200).json(events);
    } else {
      return res.status(404).json({ message: "Event not found" });
    }
  } catch (err) {
    error(res, err);
  }
};

exports.addEvent = async (req, res) => {
  try {
    const { title, description, date, banner } = req.body;
    const newEvent = new Event({
      title,
      description,
      date,
      banner,
    });
    await newEvent.save();
    return res.json(newEvent);
  } catch (err) {
    error(res, err);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    return res.json({ message: "Event deleted" });
  } catch (err) {
    error(res, err);
  }
};
