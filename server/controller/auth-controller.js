// basically it is used to store the contact details . who will connect to me
const Contact = require("../models/user-model");

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

module.exports = { contactForm, getAllContactData, deleteUserById };
