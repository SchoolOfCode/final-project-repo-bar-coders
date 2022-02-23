import React from 'react'
import Navbar from '../src/studentcomponents/navbar'
import Styles from '../styles/finishedbooks.module.css'



function finishedbooks({ isNewMessage }) {
  return (
    <div>
        {<Navbar isNewMessage={isNewMessage} />}
          <div className={Styles.container}>
            <div className={Styles.box}><img src='BB.JPG' alt="" width="350rem" height="350rem" />
            </div>
            <div className={Styles.box}><img src='CA.JPG' alt="" width="350rem" height="350rem" /></div>
            <div className={Styles.box}><img src='CW.JPG' alt="" width="350rem" height="350rem" /></div>
            <div className={Styles.box}><img src='GB.JPG' alt="" width="350rem" height="350rem" /></div>
           </div>
          <div className={Styles.container}>
            <div className={Styles.box}><img src='GE.JPG' alt="" width="350rem" height="350rem" /></div>
            <div className={Styles.box}><img src='HP.JPG' alt="" width="350rem" height="350rem" /></div>
            <div className={Styles.box}><img src='NA.JPG' alt="" width="350rem" height="350rem" /></div>
            <div className={Styles.box}><img src='SS.JPG' alt="" width="350rem" height="350rem" /></div>
          </div>
    </div>
  );
}
export default finishedbooks




