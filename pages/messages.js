import React from 'react'
import Navbar from '../src/studentcomponents/navbar'
import Image from 'next/image'
import rocketicon from '../images/rocketicon.png'
import styles from '../styles/messages.module.css'

function messages({ isNewMessage, studentName }) {
  return (
    <div>
    <Navbar isNewMessage={isNewMessage} studentName={studentName}/>
    <div className={styles.pageBody}>
        
        <div className={styles.leftImage}>
        <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        </div>

        <div className={styles.container}>
            <h1>(Alice), (Mrs Freeman) sent you a message!</h1>
           
            <p>Message</p>
            
            <p>Another message</p>

            <p>Another message</p>
        </div>
        <div className={styles.rightImage}>
        <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        </div>


    </div>
   
    </div>
  );
}

export default messages