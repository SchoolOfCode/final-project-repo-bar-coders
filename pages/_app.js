import '../styles/globals.css'
import { useState } from "react"

function MyApp({ Component, pageProps }) {

  const [isNewMessage, setIsNewMessage] = useState(true);
  const [studentDaysRead, setStudentDaysRead] = useState(5)

  return (
    <Component {...pageProps} isNewMessage={isNewMessage} studentDaysRead={studentDaysRead}/>
  );

}

export default MyApp
