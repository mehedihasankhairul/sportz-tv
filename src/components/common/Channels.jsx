// Channels.js
import React, { useState } from 'react';
import TVScreen from './TVScreen';

const Channels = () => {

  const categories = [
    {
      categoryName: 'Sports',
      channels: [
        {
          name: 'Sky Sports',
          icon: 'path/to/cricket-icon.png',
        },
        {
          name: 'Super Cricket',
          icon: 'path/to/football-icon.png',
        },
        // Add more sports channels as needed
      ],
    },
    // Add more categories as needed
  ];

  const [selectedChannel, setSelectedChannel] = useState(categories[0].channels[0]);

  console.log (selectedChannel)

  const handleChannelClick = (channel) => {
    setSelectedChannel(channel);
  };

  const commonURL = 'https://daddylivehd.one/live/stream-368.php';

  return (
    <div>
      <div className="mb-1">
        <h2 className="text-2xl font-bold mb-4">Current Channel</h2>
        <TVScreen
          channelName={selectedChannel.name}
          channelIcon={selectedChannel.icon}
          channelUrl={commonURL}
        />
        <div className="text-white text-center mt-4">
    
        </div>
      </div>
    </div>
  );
};

export default Channels;