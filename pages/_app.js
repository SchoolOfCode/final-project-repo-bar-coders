import '../styles/globals.css'
import { useState } from "react"

function MyApp({ Component, pageProps }) {

  const [isNewMessage, setIsNewMessage] = useState(true);

  return <Component {...pageProps} isNewMessage={isNewMessage} />

}

export default MyApp
