import React, { useState, useContext } from 'react';
import './Sidebar.css'; // Import the CSS file

import { SocketContext } from '../Context';

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  const handleCopyClick = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(me);
  };

  const handleCallClick = (event) => {
    event.preventDefault();
    callUser(idToCall);
  };

  const handleHangUpClick = (event) => {
    event.preventDefault();
    leaveCall();
  };

  return (
    <div className="container">
      <div className="paper1">
        <form className="root" noValidate autoComplete="off">
          <div className="grid-container">
            <div className="grid-item">
              <h6>Your Name</h6>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-field"
              />
              <div className="copy-to-clipboard">
                <button
                  type="button" // Prevent form submission
                  className="button"
                  onClick={handleCopyClick}
                >
                  <span className="icon">📋</span>
                  Copy Your ID
                </button>
              </div>
            </div>
            <div className="grid-item ">
              <h6>Make a call</h6>
              <input
                type="text"
                placeholder="ID to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                className="text-field"
              />
              <div className="callbutton">
              {callAccepted && !callEnded ? (
                <button
                  type="button" // Prevent form submission
                  className="button hang-up"
                  onClick={handleHangUpClick}
                >
                  <span className="icon">📞</span>
                  Hang Up
                </button>
              ) : (
                <button
                  type="button" // Prevent form submission
                  className="button call"
                  onClick={handleCallClick}
                >
                  <span className="icon">📲</span>
                  Call
                </button>
              )}
              </div>
            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
