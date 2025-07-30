import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-32 px-20 absolute text-white">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="w-1/3 text-md py-3">{overview}</p>
      <div>
        <button className="p-2 px-8 bg-white text-black font-semibold rounded-md text-lg hover:bg-opacity-70">
        Play
        </button>
        <button className="p-2 px-8 mx-2 bg-gray-700 font-semibold rounded-md text-lg">
        More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
