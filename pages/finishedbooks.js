import React, { useState } from "react";
import { useEffect } from "react";

import Navbar from "../src/studentcomponents/navbar";
import Styles from "../styles/finishedbooks.module.css";

import { getIDToken } from "../src/lib/firebase/refresh-tokens";

function Finishedbooks({
  isNewMessage,
  studentName,
  userObject,
  getStudentName,
}) {
  const [completedBooks, setCompletedBooks] = useState([]);

  const userId = userObject[0].getIDToken.user_id;
  const fetchToken = userObject[0].getIDToken.id_token;

  async function getCompletedBooks(userId, fetchToken) {
    try {
      const response = await fetch(
        `https://fourweekproject.herokuapp.com/completedbooks/${userId}`,
        {
          headers: {
            authorization: `Bearer ${fetchToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setCompletedBooks(data.payload);
    } catch {
      alert("Server unavailable");
    }
  }

  useEffect(() => {
    getCompletedBooks(userId, fetchToken);
  }, []);

  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }

  return (
    <div>
      {
        <Navbar
          isNewMessage={isNewMessage}
          studentName={studentName}
          getStudentName={getStudentName}
          userObject={userObject}
        />
      }
      <div className={Styles.container}>
        {completedBooks &&
          completedBooks.map((book, index) => {
            return (
              <div key={index} className={Styles.bookDiv}>
                <h4> {book.title} </h4>
                <div className={Styles.box}>
                  <img
                    src={book.cover}
                    alt=""
                    // width="350rem" height="350rem"
                  />

                  <p>Completed: {formatDate(book.date_completed)} </p>
                </div>
              </div>
            );
          })}

        {/* <div className={Styles.box}>
        <img src="BB.JPG" alt="" width="350rem" height="350rem" />
        Completed: 02-02-2022
      </div>
      <div className={Styles.box}>
        <img src="CA.JPG" alt="" width="350rem" height="350rem" />
        Completed: 15-12-2021
      </div>
      <div className={Styles.box}>
        <img src="CW.JPG" alt="" width="350rem" height="350rem" />
        Completed: 10-12-2021
      </div>
      <div className={Styles.box}>
        <img src="GB.JPG" alt="" width="350rem" height="350rem" />
        Completed: 01-01-2022
      </div>
    </div>
    <div className={Styles.container}>
      <div className={Styles.box}>
        <img src="GE.JPG" alt="" width="350rem" height="350rem" />
        Completed: 26-05-2021
      </div>
      <div className={Styles.box}>
        <img src="HP.JPG" alt="" width="350rem" height="350rem" />
        Completed: 13-08-2020
      </div>
      <div className={Styles.box}>
        <img src="NA.JPG" alt="" width="350rem" height="350rem" />
        Completed: 12-06-2021
      </div>
      <div className={Styles.box}>
        <img src="SS.JPG" alt="" width="350rem" height="350rem" />
        Completed: 17-07-2021
      </div>*/}
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
    const isStudent = true;

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
export default Finishedbooks;
