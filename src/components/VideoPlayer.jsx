import React, { useContext } from 'react';
import './VideoPlayer.css'; // Import the CSS file

import { SocketContext } from '../Context';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div className="grid-container1">
      { stream && (
        <div className="paper">
          <div className="video-container">
            <h5>{name || 'Name'}</h5>
            <video playsInline muted ref={myVideo} autoPlay className="video" />
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="paper">
          <div className="video-container">
            <h5>{call.name || 'Name'}</h5>
            <video playsInline ref={userVideo} autoPlay className="video" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
