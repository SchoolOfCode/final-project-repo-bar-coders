import React from 'react'
import Navbar from '../src/studentcomponents/navbar'

function dictionary({ isNewMessage }) {
  return (
    <div>
          <Navbar isNewMessage={isNewMessage} />
         
    </div>
  );
}

export default dictionary