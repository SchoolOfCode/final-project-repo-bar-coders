import Navbar from "../src/studentcomponents/navbar";
import ProgressBar from "../src/studentcomponents/progressbar";
import InfoWindow from "../src/studentcomponents/infowindow";
import Carousel from "../src/studentcomponents/bookcarousel";
import styles from "../styles/studenthome.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { getIdToken } from "../src/lib/firebase/refresh-tokens";

function StudentHome({
  studentName,
  isNewMessage,
  studentDaysRead,
  inProgressBooks,
  currentBook,
  updateCurrentBook,
  minutesRead,
  getStudentData,
}) {
  useEffect(() => {
    getStudentData();
  }, []);

  return (
    <div>
      <div>
        <Navbar isNewMessage={isNewMessage} studentName={studentName} />
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
// Adding Authentication to this page by checking for valid token
export async function getServerSideProps({ req, res }) {
  try {
    // This is the cookie
    const cookie = req.cookies.token;
    // This refreshes the id token
    const token = await getIdToken(cookie);
    const isStudent = true;

    if (!token.getIdToken.user_id) {
      return {
        redirect: {
          destination: "/",
        },
      };
    }

    return {
      props: {
        userObject: [],
      },
    };
  } catch (err) {
    console.log("THIS ERR WAS:", err);
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}

export default StudentHome;
