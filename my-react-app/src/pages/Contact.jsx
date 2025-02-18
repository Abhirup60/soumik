import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Contact = () => {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const navigate = useNavigate();

  // Handle Input Change
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://soumik-server.onrender.com/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // alert("Message sent successfully!");
        toast.success(" Message sent successfully!");
        setUser({ email: "", phone: "", message: "" });
        navigate("/");
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-600 flex items-center justify-center p-6">
      <section className="container mx-auto max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Image Section */}
        <div className="hidden md:flex items-center justify-center p-8 bg-blue-100">
          <img
            src="./registration.jpg"
            alt="Contact Illustration"
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </div>

        {/* Form Section */}
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Contact Us
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
                value={user.email}
                onChange={handleInput}
              />
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                Phone (+country code):
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
                value={user.phone}
                onChange={handleInput}
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                rows="5"
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                required
                value={user.message}
                onChange={handleInput}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

      </section>
    </div>
  );
};

export default Contact;
