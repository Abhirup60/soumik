import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-600 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Hi, I'm Soumik 👋
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl font-semibold text-blue-600">
          Visual Storyteller & Video Editor
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
          I'm Soumik, a visual storyteller from West Bengal, India. As a
          passionate freelance video editor with six months of hands-on
          experience, I've had the privilege of working with a variety of
          clients, creating cinematic visuals that tell compelling stories.
        </p>

        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
          My expertise and interests lie in video editing, filmmaking, short
          films, documentaries, music videos, podcasts, and cinematic travel
          films. I began my journey into film editing after a transformative
          experience in college while pursuing a B.A. in Journalism and Mass
          Communication.
        </p>

        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
          A short film editing assignment ignited my passion for storytelling
          through visuals, and from that moment, I committed myself to mastering
          the craft. To further develop my skills, I completed formal training
          at the National Institute of Film and Fine Arts in Kolkata, where I
          deepened my technical knowledge and artistic approach.
        </p>

        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
          Although I am relatively new to the freelance market, my enthusiasm
          and determination to grow in this field are unparalleled. I am eager
          to take on new challenges and collaborate with forward-thinking
          clients.
        </p>

        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
          I look forward to working on bigger and bolder projects in the future,
          continually refining my craft and bringing powerful, visually striking
          stories to life.
        </p>

        {/* Call to Action */}
        <div className="mt-6">
          <a
            href="mailto:bsoumik07@gmail.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
          >
            Let's Connect 🚀
          </a>
        </div>

        {/* Download Resume */}
        <div className="mt-4">
          <a
            href="/resumes/soumik.pdf" 
            download
            className="bg-teal-600 text-white px-6 py-3 rounded-lg 
            font-semibold shadow-md transition-all hover:bg-teal-700 hover:shadow-lg"
          >
            Download Resume 📄
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
