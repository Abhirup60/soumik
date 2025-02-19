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
    <div className="w-full max-w-6xl mb-8">
      <h2 className="text-2xl font-semibold text-white text-center mb-4">{title}</h2>
      <form onSubmit={(e) => handleSubmit(e, category)}>
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={videoUrls[category]}
          onChange={(e) => setVideoUrls(prev => ({ ...prev, [category]: e.target.value }))}
          required
          style={{ width: "300px", padding: "8px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "8px 15px" }}>Submit</button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3">
        {videos[category].map((video) => {
          const videoId = extractVideoId(video.url);
          return videoId ? (
            <div key={video._id} style={{ marginTop: "20px" }}>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen
                title="YouTube Video"
              ></iframe>
              <br />
              <button
                onClick={() => handleRemove(video._id, category)}
                style={{
                  padding: "5px 10px",
                  marginTop: "10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
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
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-600 p-4 sm:p-6 flex flex-col items-center">
      <VideoSection title="Short Films 🎬" category="shortFilms" />
      <VideoSection title="Projects as an Assistant Editor 🎞️" category="assistantEditor" />
      <VideoSection title="Shorts Edited for Impression ✨" category="shortsImpression" />
    </div>
  );
};

export default Work;
