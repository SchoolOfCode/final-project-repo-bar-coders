import React from 'react'
import Classroomlist from '../src/teacherComponents/classroomlist/classroomlist'
import Dashboard from '../src/teacherComponents/classroomlist/dashboard'
import Styles from '../styles/globalteachview.module.css'

export default function Teacherhome() {
  return (
        <div className={Styles.container}> 
            <Classroomlist></Classroomlist>
            <Dashboard></Dashboard>

        </div>
  )
}
