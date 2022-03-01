import React from 'react'
import Classroomlist from '../src/teacherComponents/classroomlist/classroomlist'
import Dashboard from '../src/teacherComponents/dashboard/dashboard'
import Styles from '../styles/globalteachview.module.css'
import Navbar from '../src/teacherComponents/navbar/navbar'

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
