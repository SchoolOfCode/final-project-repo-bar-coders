import React from 'react'
import Styles from '../../../styles/teacherdashboard.module.css'
import { Grid, GridItem } from '@chakra-ui/react'

export default function Dashboard() {
  return (
    <div className={Styles.mainbox}>
<Grid className={Styles.grid}
  h='765px'
  w='1200px'
  templateRows='repeat(3, 2fr)'
  templateColumns='repeat(6, 1fr)'
  gap={5}
  bg='silver'
>
    
      <GridItem w='1130px' colSpan={4} bg='white' />
      <GridItem w='539px'  colSpan={3} bg='white' />
      <GridItem w='539px'  colSpan={3} bg='white' />
      <GridItem w='539px'  colSpan={3} bg='white' />
      <GridItem w='539px'  colSpan={3} bg='white' />
   
  
</Grid>
    </div>
  )
}
