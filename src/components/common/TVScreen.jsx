import React from 'react';

const TVScreen = ({ channelName, channelIcon, channelUrl }) => {


  const handlePlayClick = () => {
    setPlaying(!isPlaying);
  };

  return (
    <>
       <div className="flex flex-col items-center justify-center h-screen">
      {/* TV Screen */}
          <iframe
            className="w-[600px] h-[400px] mx-auto"
            src={channelUrl}
            name="iframe_a"
            scrolling="no"
            allowFullScreen
            frameBorder="0"
            title={channelName}
          ></iframe>
      </div>
       </>
  );
};

export default TVScreen;