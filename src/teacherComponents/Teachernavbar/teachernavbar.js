import React from 'react'
import Styles from '../../../styles/teachernavbar.module.css'

function Teachernavbar() {
  return (
    <div className={Styles.teachernavbar}>
        <div className={Styles.leftside}>
        <h1>Welcome, name</h1>
        </div>
        <div className={Styles.rightside}>
        <button>Home</button>
        <button>Log out</button>
        </div>
    </div>
  )
}
export default Teachernavbar