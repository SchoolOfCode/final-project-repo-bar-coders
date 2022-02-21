import React from 'react'
import styles from '../../../styles/window.module.css'
import bag from '../../../images/bag.png'
import Image from 'next/image'

 function infoWindow() {
  return (
    <div className={styles.window} >
      <div className={styles.inner}> 
      <h1>Select a book to log today’s reading </h1>
      <p1>You’ve  earned  {10} coins this week</p1>
      <p2>You need {30} more coins to unlock the next icon!</p2>
      <div className={styles.image}>
      <Image src={bag.src} alt="icon" width="130px" height="120px"/>
      </div>
      </div>
      
    </div>
  )
}

export default infoWindow