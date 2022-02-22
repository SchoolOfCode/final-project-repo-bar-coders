import React from 'react'
import Navbar from '../src/studentcomponents/navbar'
import Styles from '../styles/finishedbooks.module.css'
import hp from '../images/HP.jpg' 
import Image from 'next/image';

function finishedbooks({ isNewMessage }) {
  return (
    <div>
        {<Navbar isNewMessage={isNewMessage} />}
          <div className={Styles.container}>
            <div className={Styles.box}><Image src={hp.src} alt="" width="350rem" height="350rem" />
            </div>
            <div className={Styles.box}><Image src={hp.src} alt="" width="350rem" height="350rem" /></div>
            <div className={Styles.box}><Image src={hp.src} alt="" width="350rem" height="350rem" /></div>
            <div className={Styles.box}><Image src={hp.src} alt="" width="350rem" height="350rem" /></div>
           </div>
          <div className={Styles.container}>
            <div className={Styles.box}><Image src={hp.src} alt="" width="350rem" height="350rem" /></div>
            <div className={Styles.box}><Image src={hp.src} alt="" width="350rem" height="350rem" /></div>
            <div className={Styles.box}><Image src={hp.src} alt="" width="350rem" height="350rem" /></div>
            <div className={Styles.box}><Image src={hp.src} alt="" width="350rem" height="350rem" /></div>
          </div>
    </div>
  );
}
export default finishedbooks




