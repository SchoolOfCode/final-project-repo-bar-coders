import React from 'react'
import Navbar from '../src/studentcomponents/navbar'

function finishedbooks({ isNewMessage }) {
  return (
    <div>
      <Navbar isNewMessage={isNewMessage} />
    </div>
  );
}

export default finishedbooks