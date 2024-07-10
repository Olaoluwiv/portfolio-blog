import React from 'react';
tification
import './Notification.scss';

const Notification = ({ message }) => {
  return (
    <div className={`notification ${message.type}`}>
      {message.text}
    </div>
  );
};

export default Notification;
