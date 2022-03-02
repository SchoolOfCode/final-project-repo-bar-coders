import React from 'react'
import Styles from '../../../styles/teacherdashboard.module.css'
import Timesread from '../Graphs/timesread'

function Teacherdashboard() {
  return (
    <div className={Styles.teacherdashboard}>

    <div className={Styles.timesreadcontainer}>
    <Timesread></Timesread>
    </div>


    <div className={Styles.bottomsection}>
    <div className={Styles.squarecontainers}>
   
    <div className={Styles.topcontainers}>
    <p>graph1</p>
    <p>graph2</p>
    </div>
   
   <div className={Styles.bottomcontainers}>
   <p>graph3</p>
    <p>more info</p>
   </div>
   
    </div>
    
    </div>
    </div>
  )
}

export default Teacherdashboard