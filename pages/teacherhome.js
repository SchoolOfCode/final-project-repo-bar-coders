import React from 'react'
import Styles from '../styles/globalteachview.module.css'


export default function Teacherhome() {
  return (
        <div className={Styles.container}> 
            <Classroomlist></Classroomlist>
            <div className={Styles.rightside}>
            <Navbar></Navbar>
            <Dashboard></Dashboard>
            </div>
        </div>
  )
}
