import React from 'react'
import Link from 'next/link';
import Styles from '../../../styles/teachernavbar.module.css'
import { Button, ButtonGroup, Stack, Heading, Flex} from '@chakra-ui/react'




export default function Navbar() {  // add teachers name 
  return (
      <div className={Styles.navbar}>
        <flex>
         <Heading>  
            Welcome Back,
            </Heading>
            <Heading> 
            Mrs Freeman
         </Heading>
        </flex>

        <Stack direction='row' spacing={4} align='center' paddingTop='1rem' paddingRight='1rem'>
                <Link href="/teacherhome" passHref>
                    <Button colorScheme='gray' variant='outline' size='lg' color='white'>
                     HOME
                    </Button>
                </Link>
        
                <Link href="/" passHref>
                    <Button colorScheme='gray' variant='outline' size='lg' color='white'>
                     LOGOUT
                    </Button>
                </Link>
            </Stack>
        </div>
  )
}


