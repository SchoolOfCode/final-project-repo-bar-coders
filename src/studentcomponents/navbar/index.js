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

      {isNewMessage && (
        <img src="https://cdn-icons-png.flaticon.com/512/6875/6875112.png"></img>
      )}
      {!isNewMessage && (
        <img src="https://cdn-icons-png.flaticon.com/512/6875/6875170.png"></img>
      )}

      <button className={styles.logoutbutton}>Log Out</button>
    </div>
  );
}

export default Navbar