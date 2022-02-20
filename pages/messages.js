import React from 'react'
import Navbar from '../src/studentcomponents/navbar'

function messages({ isNewMessage }) {
  return (
    <div>
      <Navbar isNewMessage={isNewMessage} />
    </div>
  );
}

export default messages