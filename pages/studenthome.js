
import Navbar from "../src/studentcomponents/navbar"
import ProgressBar from "../src/studentcomponents/progressbar"
import Readinglog from "../src/studentcomponents/readinglog";
import InfoWindow from "../src/studentcomponents/infowindow";
import Carousel from "../src/studentcomponents/bookcarousel";
import styles from '../styles/studenthome.module.css'



export default function StudentHome({
  isNewMessage,
  studentDaysRead,
  inProgressBooks,
  currentBook,
  updateCurrentBook,
}) {
  return (
    <div>
      <div>
        <Navbar isNewMessage={isNewMessage} />
        <ProgressBar studentDaysRead={studentDaysRead} />
      </div>

      <div className={styles.pageBody}>
        <div>
          <Carousel
            inProgressBooks={inProgressBooks}
            currentBook={currentBook}
            updateCurrentBook={updateCurrentBook}
                  />
                  <button className={styles.newBookButton}>Choose a new book</button>
        </div>

        <div className={styles.window}>
          <InfoWindow />
        </div>
      </div>
    </div>
  );
}
