import React from 'react'
import styles from '../../../styles/Navbar.module.css'

function Navbar({isNewMessage}) {

    


  return (
    <div className={styles.navbar}>
    <div className={styles.student}>
    <img src="https://cdn-icons-png.flaticon.com/512/2490/2490295.png"></img>
    <h1>Alice</h1>
    </div>
        
        <button>Home</button>
        <button>Dictionary</button>
        <button>Finished Books</button>
        
    

        {isNewMessage && <img src="https://cdn-icons.flaticon.com/png/512/2524/premium/2524018.png?token=exp=1645193851~hmac=899f93c1516388a9dc9f835be892cc6e"></img>}
        {!isNewMessage && <img src="https://cdn-icons.flaticon.com/png/512/1744/premium/1744763.png?token=exp=1645193807~hmac=b55c05da52d7f03685617109179078c2"></img>}
        
    
        <button className={styles.logoutbutton}>Log Out</button>
    </div>
  )
}

export default Navbar