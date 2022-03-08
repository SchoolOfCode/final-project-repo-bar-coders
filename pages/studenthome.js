import Navbar from "../src/studentcomponents/navbar";
import ProgressBar from "../src/studentcomponents/progressbar";
import InfoWindow from "../src/studentcomponents/infowindow";
import Carousel from "../src/studentcomponents/bookcarousel";
import styles from "../styles/studenthome.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { getIDToken } from "../src/lib/firebase/refresh-tokens";

function StudentHome({
  studentName,
  isNewMessage,
  studentDaysRead,
  inProgressBooks,
  currentBook,
  updateCurrentBook,
  minutesRead,
  getStudentData,
  userObject,
}) {
  // const userId = userObject[0].getIDToken.user_id;
  // const fetchToken = userObject[0].getIDToken.id_token;

  useEffect(() => {
    getStudentData();
  }, []);

  console.log("LOOOOOOK", userObject);

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
    const token = await getIDToken(cookie);

    if (!token.getIDToken.user_id) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: {
        userObject: [token],
      },
    };
  } catch (err) {
    console.log("THIS ERR WAS:", err);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default StudentHome;
