import React from 'react'
import Link from 'next/link';
import Styles from '../../../styles/teachernavbar.module.css'




export default function Navbar() {  // add teachers name 
  return (
      <div className={Styles.navbar}>
        <div className={Styles.name}>  
            Welcome Back Mrs Freeman
        </div>
        
            <Link href="/teacherhome" passHref>
                <button>Home</button>
            </Link>
     
            <Link href="/" passHref>
                <button>Log Out</button>
            </Link>
        </div>
  )
}


