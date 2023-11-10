import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="relative" style={{ paddingBottom: '56.25%' }}>
    {/* Responsive container to maintain aspect ratio */}
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://daddylivehd.one/embed/stream-370.php"
      name="iframe_a"
      scrolling="no"
      allowFullScreen
      frameBorder="0"
      height={100}
      width={100}
      title="Live TV Stream"
    ></iframe>
  </div>
  );
};

export default VideoPlayer;