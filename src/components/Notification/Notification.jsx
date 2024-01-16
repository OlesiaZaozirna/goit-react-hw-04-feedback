import React from 'react';
import '../fonts/font.css'


const Notification = ({ message }) => {
  return <p style={{ fontFamily: 'PencilFont', fontSize: '30px' }}>{message}</p>;
};

export default Notification;

