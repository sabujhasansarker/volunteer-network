const Volunteer = require("../models/Volunteer");

const { error } = require("../utilities/error");

exports.getUser = async (req, res) => {
  try {
    const volunteers = await Volunteer.find().populate("event").exec();
    if (volunteers.length !== 0) {
      return res.status(200).json(volunteers);
    } else {
      return res.status(404).json({ message: "Volunteer is empty" });
    }
  } catch (err) {
    error(res, err);
  }
};

exports.addUser = async (req, res) => {
  try {
    const { name, email, description, date } = req.body;
    const newVolunteer = new Volunteer({
      name,
      email,
      description,
      date,
      event: req.params.id,
    });
    await newVolunteer.save();
    return res.status(200).json(newVolunteer);
  } catch (err) {
    error(res, err);
  }
};

exports.deleteVolunteer = async (req, res) => {
  try {
    await Volunteer.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Delete volunteer" });
  } catch (err) {
    error(res, err);
  }
};
