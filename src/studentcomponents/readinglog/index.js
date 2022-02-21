import { Link } from 'react'
import styles from '../../../styles/readinglog.module.css'


function Readinglog() {

    const handleSubmit =  event => {
        event.preventDefault()
        alert('You have submitted the form')
    }

  return (
    <div className={styles.container}>
    
    <form onSubmit={handleSubmit}>
        
        <h1>Harry Potter and the Philosopher's Stone</h1>

        <input type="text" placeholder="What page did you finish on">
        </input>

        <input type="text" placeholder="How many minutes did you read for">
        </input>

        <input type="text" placeholder="Summarise today's reading in one or two sentences" className={styles.summary}>
        </input>

        <div className={styles.buttons}>
            {/* <Link href="studenthome" passHref> */}
            <button type="submit">Submit</button>
            {/* </Link> */}
            <label>
            Finished the book?
            <input type="checkbox"></input>
            </label>
        </div>

    </form>


    </div>
  )
}

export default Readinglog