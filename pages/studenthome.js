import Navbar from "../src/studentcomponents/navbar";
import ProgressBar from "../src/studentcomponents/progressbar";
import Readinglog from "../src/studentcomponents/readinglog";
import InfoWindow from "../src/studentcomponents/infowindow";
import Carousel from "../src/studentcomponents/bookcarousel";
import styles from "../styles/studenthome.module.css";
import Link from "next/link";

export default function StudentHome({
  isNewMessage,
  studentDaysRead,
  inProgressBooks,
  currentBook,
    updateCurrentBook,
  minutesRead
}) {
  return (
    <div>
      <div>
        <Navbar isNewMessage={isNewMessage} />
        <ProgressBar studentDaysRead={studentDaysRead} />
      </div>

      <div className={styles.pageBody}>
        <div className={styles.leftSide}>
          <h2>Click on a book cover to pick up where you left off</h2>
          <Carousel
            inProgressBooks={inProgressBooks}
            currentBook={currentBook}
            updateCurrentBook={updateCurrentBook}
          />
          <Link href="/newbook" passHref>
            <button className={styles.newBookButton}>
              Want to add a book to your library?
            </button>
          </Link>
        </div>

        <div className={styles.rightSide}>
          <InfoWindow minutesRead={minutesRead} />
        </div>
      </div>
    </div>
  );
}
