import React from 'react'
import Navbar from '../src/studentcomponents/navbar'
import Image from 'next/image'
import rocketicon from '../images/rocketicon.png'
import styles from '../styles/cantfindbook.module.css'

function Cantfindbook() {
  return (
    <div>
    <Navbar />
    <div className={styles.pageBody}>
        
        <div className={styles.leftImage}>
        <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        </div>

        <div className={styles.container}>
            <h1>Couldn&apos;t find your book in the list? Enter it below!</h1>
            <input type="text" placeholder="Book title"></input>
            <input type="text" placeholder="Author"></input>
            <input type="text" placeholder="Number of pages"></input>
            <button>Add book</button>
        </div>
        <div className={styles.rightImage}>
        <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        </div>


    </div>
   
    </div>
  )
}

export default Cantfindbook