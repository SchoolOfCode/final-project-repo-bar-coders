import React from 'react'
import Navbar from '../src/studentcomponents/navbar'
import Image from 'next/image'
import rocketicon from '../images/rocketicon.png'
import styles from '../styles/newbook.module.css'

function Newbook() {
  return (
    <div>
    <Navbar />
    <div className={styles.pageBody}>
        
        <div className={styles.leftImage}>
        <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        </div>

        <div className={styles.container}>
            <h1>Search for a new book</h1>
            <input type="text" placeholder="Book title"></input>
            <input type="text" placeholder="Author"></input>
            <button>Search</button>


            <input type="text" list="valuelist" placeholder="Choose your book from this list"></input>
            <datalist id="valuelist">
            <option>Option</option>
            <option>Option</option>
            </datalist>

            <button>This is my book</button>
            <button>I can&apos;t find it</button>


        </div>
        <div className={styles.rightImage}>
        <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        </div>


    </div>
   
    </div>
    
    
    
  )
}

export default Newbook