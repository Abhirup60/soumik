// basically it is used to store the contact details . who will connect to me
const Contact = require("../models/user-model");
const Video = require("../models/video-model");

// main contact-controller
const contactForm = async (req, res) => {
  try {
    const { email, phone, message } = req.body;
    const contactData = await Contact.create({ email, phone, message });

    console.log(contactData);
    return res.status(200).json({ msg: contactData });
  } catch (error) {
    return res.status(400).json({ message: "message not delivered" });
  }
};

// get all the contact data
const getAllContactData = async (req, res) => {
  try {
    const contactDetails = await Contact.find();
    console.log(contactDetails);
    return res.status(200).json({ msg: contactDetails });
  } catch (error) {
    return res.status(401).json({ msg: "contact data can't be fetched" });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ msg: "Contact deleted successfullty" });
  } catch (error) {
    return res.status(500).json({ msg: "Can't delete" });
  }
};

// videos get and post

const postVideo = async (req, res) => {
  try {
    const { url, category } = req.body; // Get category from frontend
    if (!url || !category) {
      return res.status(400).json({ error: "URL and category are required" });
    }

    const newVideo = new Video({ url, category });
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(500).json({ error: "Error saving video" });
  }
};

// API to Get all Videos
const allVideos = async (req, res) => {
  try {
    const { category } = req.params;
    const videos = await Video.find({ category });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: "Error fetching videos" });
  }
};

// delete videos
const deleteVideo = async (req, res) => {
  try {
    await Video.findByIdAndDelete(req.params.id);
    res.json({ message: "Video removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { contactForm, getAllContactData, deleteUserById, postVideo, allVideos, deleteVideo };
