import React from 'react';
import './App.css'; 

import VideoPlayer from './components/VideoPlayer';

import Sidebar from './components/Sidebar';

import Notifications from './components/Notification';

const App = () => {
  return (
    <div className="wrapper">
      <div className="appBar">
        <h2 className="title">Video Chat</h2>
      </div>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;
