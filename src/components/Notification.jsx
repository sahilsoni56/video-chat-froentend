import React, { useContext } from 'react';
import './Notifications.css'; // Import the CSS file

import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {/* {call.isReceivingCall && !callAccepted && (
       
      )} */}
       <div className="notification-content">
          <h1 className='name'>{call.name} is calling:</h1>
          <button className="button1" onClick={answerCall}>
            Answer
          </button>
        </div>
    </>
  );
};

export default Notifications;
