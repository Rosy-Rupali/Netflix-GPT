import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 px-20 absolute">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="w-1/3 text-lg py-3 font-bold">{overview}</p>
      <div>
        <button className="p-2 px-8 bg-gray-500 bg-opacity-50 text-white font-semibold rounded-md text-xl">
          ▶ Play
        </button>
        <button className="p-2 px-8 mx-2 bg-gray-500 bg-opacity-50 text-white font-semibold rounded-md text-xl">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
