const Volunteer = require("../models/Volunteer");

const { error } = require("../utilities/error");

exports.getUser = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    console.log(volunteers.length);
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
  } catch (err) {
    error(res, err);
  }
};
