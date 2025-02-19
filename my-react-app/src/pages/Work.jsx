import React, { useState, useEffect } from "react";
import axios from 'axios';

const Work = () => {
  const [videoUrls, setVideoUrls] = useState({ shortFilms: "", assistantEditor: "", shortsImpression: "" });
  const [videos, setVideos] = useState({ shortFilms: [], assistantEditor: [], shortsImpression: [] });

  // Fetch videos from backend
  useEffect(() => {
    const fetchVideos = async (category) => {
      try {
        const res = await axios.get(`https://soumik-server.onrender.com/api/form/all-videos/${category}`);
        setVideos(prev => ({ ...prev, [category]: res.data }));
      } catch (error) {
        console.error(`Error fetching ${category} videos:`, error);
      }
    };

    fetchVideos("shortFilms");
    fetchVideos("assistantEditor");
    fetchVideos("shortsImpression");
  }, []);

  // Extract Video ID from YouTube URL
  const extractVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Handle video submission for each section
  const handleSubmit = async (e, category) => {
    e.preventDefault();
    const videoId = extractVideoId(videoUrls[category]);
    if (!videoId) {
      alert("Invalid YouTube URL");
      return;
    }

    try {
      const res = await axios.post("https://soumik-server.onrender.com/api/form/videos/post", {
        url: videoUrls[category],
        category
      });

      setVideos(prev => ({ ...prev, [category]: [...prev[category], res.data] }));
      setVideoUrls(prev => ({ ...prev, [category]: "" }));
    } catch (error) {
      console.error(`Error saving ${category} video:`, error);
    }
  };

  // Handle video removal
  const handleRemove = async (id, category) => {
    try {
      await axios.delete(`https://soumik-server.onrender.com/api/form/video/${id}`);
      setVideos(prev => ({ ...prev, [category]: prev[category].filter(video => video._id !== id) }));
    } catch (error) {
      console.error(`Error deleting ${category} video:`, error);
    }
  };

  // Reusable section component
  const VideoSection = ({ title, category }) => (
    <div className="w-full max-w-6xl mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6">{title}</h2>
      
      <form onSubmit={(e) => handleSubmit(e, category)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={videoUrls[category]}
          onChange={(e) => setVideoUrls(prev => ({ ...prev, [category]: e.target.value }))}
          required
          className="w-full sm:w-96 px-4 py-2 text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-white text-blue-600 font-semibold rounded-md shadow-md hover:bg-blue-500 hover:text-white transition"
        >
          Submit
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos[category].map((video) => {
          const videoId = extractVideoId(video.url);
          return videoId ? (
            <div key={video._id} className="bg-white p-3 rounded-lg shadow-lg">
              <iframe
                className="w-full h-48 sm:h-56 md:h-64 rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen
                title="YouTube Video"
              ></iframe>
              <button
                onClick={() => handleRemove(video._id, category)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition w-full"
              >
                Remove
              </button>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-600 p-6 flex flex-col items-center">
      <VideoSection title="Short Films 🎬" category="shortFilms" />
      <VideoSection title="Projects as an Assistant Editor 🎞️" category="assistantEditor" />
      <VideoSection title="Shorts Edited for Impression ✨" category="shortsImpression" />
    </div>
  );
};

export default Work;
