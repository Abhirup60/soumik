import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Work = () => {
  const [shortFilms, setShortFilms] = useState([]);
  const [assistantProjects, setAssistantProjects] = useState([]);
  const [shortsEdited, setShortsEdited] = useState([]);

  // Handle video selection
  const handleFileChange = (event, setFunction, files) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFunction([...files, URL.createObjectURL(selectedFile)]);
    }
  };

  // Handle file removal
  const handleRemoveFile = (index, setFunction, files) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFunction(updatedFiles);
  };

  // Render video grid
  const renderVideoGrid = (files, setFunction) => (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3'>
      {files.length > 0 ? (
        files.map((file, index) => (
          <div
            key={index}
            className='relative rounded-lg overflow-hidden shadow-md bg-white p-3 flex flex-col items-center'
          >
            <video src={file} controls className='w-full h-48 object-cover rounded-lg'></video>
            <button
              onClick={() => handleRemoveFile(index, setFunction, files)}
              className='mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-lg flex items-center gap-2 transition-all'
            >
              <FaTrash /> Remove
            </button>
          </div>
        ))
      ) : (
        <p className='text-center text-gray-300 col-span-full'>No videos uploaded yet.</p>
      )}
    </div>
  );

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-500 to-teal-600 p-4 sm:p-6 flex flex-col items-center'>
      {/* Short Films Section */}
      <div className='w-full max-w-6xl mb-8'>
        <h2 className='text-2xl font-semibold text-white text-center mb-4'>Short Films 🎬</h2>

        {/* Upload Button */}
        <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl text-center mx-auto'>
          <button
            onClick={() => document.getElementById("short-films-input").click()}
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg'
          >
            Add Short Film
          </button>
          <input
            id='short-films-input'
            type='file'
            accept='video/*'
            onChange={(event) => handleFileChange(event, setShortFilms, shortFilms)}
            className='hidden'
          />
        </div>

        {renderVideoGrid(shortFilms, setShortFilms)}

        {/* Embedded YouTube Videos */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3'>
          <iframe
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
          ></iframe>
        </div>
      </div>

      {/* Assistant Editor Section */}
      <div className='w-full max-w-6xl mb-8'>
        <h2 className='text-2xl font-semibold text-white text-center mb-4'>Projects as an Assistant Editor 🎞️</h2>

        {/* Upload Button */}
        <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl text-center mx-auto'>
          <button
            onClick={() => document.getElementById("assistant-projects-input").click()}
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg'
          >
            Add Assistant Editor Project
          </button>
          <input
            id='assistant-projects-input'
            type='file'
            accept='video/*'
            onChange={(event) => handleFileChange(event, setAssistantProjects, assistantProjects)}
            className='hidden'
          />
        </div>

        {renderVideoGrid(assistantProjects, setAssistantProjects)}

        {/* Embedded YouTube Videos */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3'>
          <iframe
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
          ></iframe>
        </div>
      </div>

      {/* Shorts Edited for Impression Section */}
      <div className='w-full max-w-6xl mb-8'>
        <h2 className='text-2xl font-semibold text-white text-center mb-4'>Shorts Edited for Impression ✨</h2>

        {/* Upload Button */}
        <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl text-center mx-auto'>
          <button
            onClick={() => document.getElementById("shorts-edited-input").click()}
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg'
          >
            Add Short for Impression
          </button>
          <input
            id='shorts-edited-input'
            type='file'
            accept='video/*'
            onChange={(event) => handleFileChange(event, setShortsEdited, shortsEdited)}
            className='hidden'
          />
        </div>

        {renderVideoGrid(shortsEdited, setShortsEdited)}

        {/* Embedded YouTube Videos */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3'>
          <iframe
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
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Work;
