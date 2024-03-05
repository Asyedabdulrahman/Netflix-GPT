import React from "react";

const VideoTitle = ({ titleOverview, titleName }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-10 absolute  text-white bg-gradient-to-r from-black no-scrollbar">
      <p className="font-bold text-6xl">{titleName}</p>
      <p className="py-6 text-lg w-1/3">{titleOverview}</p>
      <div>
        <button className="bg-white text-black p-2 px-10 text-lg font-semibold mr-2 rounded-lg hover:bg-opacity-85 ">
          Play
        </button>
        <button className="bg-gray-500 text-white p-2 px-3 text-lg  bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
