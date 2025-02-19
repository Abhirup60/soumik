import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import axios from 'axios';

const Work = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videos, setVideos] = useState([]);

  // Fetch Videos from Backend
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("https://soumik-server.onrender.com/api/form/all-videos");
        setVideos(res.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  // Extract Video ID
  const extractVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const videoId = extractVideoId(videoUrl);
    if (!videoId) {
      alert("Invalid YouTube URL");
      return;
    }

    try {
      const res = await axios.post("https://soumik-server.onrender.com/api/form/videos/post", { url: videoUrl });
      setVideos([...videos, res.data]);
      setVideoUrl("");
    } catch (error) {
      console.error("Error saving video:", error);
    }
  };

   // Handle Video Removal
   const handleRemove = async (id) => {
    try {
      await axios.delete(`https://soumik-server.onrender.com/api/form/videos/${id}`);
      setVideos(videos.filter((video) => video._id !== id));
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };
  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-500 to-teal-600 p-4 sm:p-6 flex flex-col items-center'>
      {/* Short Films Section */}
      <div className='w-full max-w-6xl mb-8'>
        <h2 className='text-2xl font-semibold text-white text-center mb-4'>Short Films 🎬</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Enter YouTube URL'
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            required
            style={{ width: "300px", padding: "8px", marginRight: "10px" }}
          />
          <button type='submit' style={{ padding: "8px 15px" }}>
            Submit
          </button>
        </form>
        {/* Embedded YouTube Videos */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3'>
          {/* <iframe
            className='w-full h-56 rounded-lg shadow-md'
            src='https://www.youtube.com/embed/5a8WgadO5bA'
            title='Short Film'
            allowFullScreen
          ></iframe>

          <iframe
            className='w-full h-56 rounded-lg shadow-md'
            src='https://www.youtube.com/embed/vLnTk0QQTh8'
            title='Assistant Editing Project'
            allowFullScreen
          ></iframe>

          <iframe
            className='w-full h-56 rounded-lg shadow-md'
            src='https://www.youtube.com/embed/HzgUhntK_wM'
            title='Short Edited for Impression'
            allowFullScreen
          ></iframe> */}
          {videos.map((video) => {
            const videoId = extractVideoId(video.url);
            return videoId ? (
              <div key={video._id} style={{ marginTop: "20px" }}>
                <iframe
                  width='560'
                  height='315'
                  src={`https://www.youtube.com/embed/${videoId}`}
                  allowFullScreen
                  title='YouTube Video'
                ></iframe>
                <br />
                <button
                  onClick={() => handleRemove(video._id)}
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

      {/* Assistant Editor Section */}
      <div className='w-full max-w-6xl mb-8'>
        <h2 className='text-2xl font-semibold text-white text-center mb-4'>Projects as an Assistant Editor 🎞️</h2>

        {/*  */}
        {/* Upload Button */}
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Enter YouTube URL'
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            required
            style={{ width: "300px", padding: "8px", marginRight: "10px" }}
          />
          <button type='submit' style={{ padding: "8px 15px" }}>
            Submit
          </button>
        </form>
        {/*  */}

        {/* Embedded YouTube Videos */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3'>
          {/* <iframe
            className='w-full h-56 rounded-lg shadow-md'
            src='https://www.youtube.com/embed/MoY3HWG6if4?si=s6P3QTos_eetfCyM'
            title='Assistant Editing Project'
            allowFullScreen
            referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen
          ></iframe>

          <iframe
            className='w-full h-56 rounded-lg shadow-md'
            src='https://www.youtube.com/embed/IRxL7nRg4zg?si=_UICeXspJV-Sdh5b'
            title='Assistant Editing Project'
            allowFullScreen
            referrerpolicy='strict-origin-when-cross-origin'
          ></iframe> */}
          {videos.map((video) => {
            const videoId = extractVideoId(video.url);
            return videoId ? (
              <div key={video._id} style={{ marginTop: "20px" }}>
                <iframe
                  width='560'
                  height='315'
                  src={`https://www.youtube.com/embed/${videoId}`}
                  frameBorder='0'
                  allowFullScreen
                  title='YouTube Video'
                ></iframe>
                <br />
                <button
                  onClick={() => handleRemove(video._id)}
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

      {/* Shorts Edited for Impression Section */}
      <div className='w-full max-w-6xl mb-8'>
        <h2 className='text-2xl font-semibold text-white text-center mb-4'>Shorts Edited for Impression ✨</h2>

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Enter YouTube URL'
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            required
            style={{ width: "300px", padding: "8px", marginRight: "10px" }}
          />
          <button type='submit' style={{ padding: "8px 15px" }}>
            Submit
          </button>
        </form>

        {/* Embedded YouTube Videos */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3'>
          {/* <iframe
            className='w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-md'
            src='https://youtube.com/embed/zLwvY3Db1H0?si=D_xXA_ewcUqIrSVE'
            title='YouTube Shorts'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>

          <iframe
            className='w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-md'
            src='https://youtube.com/embed/V03_bM7E2Sw?si=j4KHxsorwazjXHhg
'
            title='YouTube Shorts'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>

          <iframe
            className='w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-md'
            src='https://youtube.com/embed/rbg-LKwyavM?si=PcTtmcEdts8rDCHz
'
            title='YouTube Shorts'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>

          <iframe
            className='w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-md'
            src='https://youtube.com/embed/uQne3zgcsCg?si=tvxuSIpCycHFT3dR
'
            title='YouTube Shorts'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>

          <iframe
            className='w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-md'
            src='https://youtube.com/embed/mRFvfKaKRaM?si=k8Xl3T1atn84KAnr
'
            title='YouTube Shorts'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe> */}
          {videos.map((video) => {
            const videoId = extractVideoId(video.url);
            return videoId ? (
              <div key={video._id} style={{ marginTop: "20px" }}>
                <iframe
                  width='560'
                  height='315'
                  src={`https://www.youtube.com/embed/${videoId}`}
                  allowFullScreen
                  title='YouTube Video'
                ></iframe>
                <br />
                <button
                  onClick={() => handleRemove(video._id)}
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
    </div>
  );
};

export default Work;
