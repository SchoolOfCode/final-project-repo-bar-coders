import React from 'react'
import styles from '../../../styles/Navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';
import bookwormicon from '../../../images/bookwormicon.png'
import newmessageicon from '../../../images/newmessageicon.png'
import messagesicon from '../../../images/messagesicon.png'

function Navbar({isNewMessage}) {

    


  return (
    <div className={styles.navbar}>
      <div className={styles.student}>
        {/* <img src="https://cdn-icons-png.flaticon.com/512/2490/2490295.png"></img> */}
        <Image src={bookwormicon.src} alt="icon" width="60px" height="60px" />
        <h1>Alice</h1>
      </div>

      <Link href="/" passHref>
        <button>Home</button>
      </Link>
      <button>Dictionary</button>
      <button>Finished Books</button>

      {isNewMessage && (
        /* <img src="https://cdn-icons-png.flaticon.com/512/6875/6875112.png"></img> */
        <Image src={newmessageicon.src} alt="icon" width="60px" height="60px" />
      )}
      {!isNewMessage && (
        /* <img src="https://cdn-icons-png.flaticon.com/512/6875/6875170.png"></img> */
        <Image src={messagesicon.src} alt="icon" width="60px" height="60px" />
      )}

      <button className={styles.logoutbutton}>Log Out</button>
    </div>
  );
}

export default Navbar