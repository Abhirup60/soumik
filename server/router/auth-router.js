const express = require("express");
const router = express.Router();
const authController = require("../controller/auth-controller");
// const multer = require("multer");



// Home route for testing
// router.route("/").get(authController.home);

router.route("/contact").post(authController.contactForm);

//get all the contact data 
router.route("/contact-details").get(authController.getAllContactData);

// delete contact
router.route("/contact/delete/:id").delete(authController.deleteUserById);
module.exports = router;
