import React from "react";
import Navbar from "../src/studentcomponents/navbar";
import Image from "next/image";
import rocketicon from "../images/rocketicon.png";
import styles from "../styles/messages.module.css";
import { useEffect, useState } from "react";
import { getIDToken } from "../src/lib/firebase/refresh-tokens";

function Messages({
  isNewMessage,
  studentName,
  studentId,
  userObject,
  getStudentName,
}) {
  const userId = userObject[0].getIDToken.user_id;
  const fetchToken = userObject[0].getIDToken.id_token;
  //https://fourweekproject.herokuapp.com/feedback/s01

  const [studentMessages, setStudentMessages] = useState([
    //   { date: "2022-02-23T00:00:00.000Z", feedback_text: "Well done Alice!" },
    //   { date: "2022-02-21T00:00:00.000Z", feedback_text: "Well done Alice!" },
    //   {
    //     date: "2022-02-24T00:00:00.000Z",
    //     feedback_text: "Well done Alice! Well done Alice! Well done Alice!",
    //   },
    //   { date: "2022-02-19T00:00:00.000Z", feedback_text: "Well done Alice!" },
  ]);
  const [classMessages, setClassMessages] = useState([
    //   {
    //     date: "2022-02-20T00:00:00.000Z",
    //     feedback_text:
    //       "Well done class, you've all been reading! Well done class, you've all been reading! Well done class, you've all been reading!",
    //   },
    //   {
    //     date: "2022-02-12T00:00:00.000Z",
    //     feedback_text: "Well done class, you've all been reading!",
    //   },
    //   {
    //     date: "2022-02-16T00:00:00.000Z",
    //     feedback_text: "Well done class, you've all been reading!",
    //   },
    //   {
    //     date: "2022-02-28T00:00:00.000Z",
    //     feedback_text: "Well done class, you've all been reading!",
    //   },
  ]);

  const [allMessages, setAllMessages] = useState();

  function getDateAsNumber(string) {
    let date = new Date(string);
    return date.valueOf();
  }

  const [teacherName, setTeacherName] = useState("Mrs Freeman");

  async function getMessages(userId, fetchToken) {
    try {
      const response = await fetch(
        `https://fourweekproject.herokuapp.com/feedback/${userId}`,
        {
          headers: {
            authorization: `Bearer ${fetchToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setStudentMessages(data.studentFeedBack);
      setClassMessages(data.classFeedback);
      setTeacherName(data.studentFeedBack[0].teacher);
    } catch {
      alert("Server is down, try again later");
    }
  }

  useEffect(() => {
    getMessages(userId, fetchToken);
  }, []);

  useEffect(() => {
    setAllMessages(
      [...studentMessages, ...classMessages].sort(
        (a, b) => getDateAsNumber(b.date) - getDateAsNumber(a.date)
      )
    );
  }, [studentMessages, classMessages]);

  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }

  return (
    <div>
      <Navbar
        isNewMessage={isNewMessage}
        studentName={studentName}
        getStudentName={getStudentName}
        userObject={userObject}
      />
      <div className={styles.pageBody}>
        <div className={styles.leftImage}>
          <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        </div>

        <div className={styles.container}>
          <h1>
            {studentName}, see the messages from {teacherName}{" "}
          </h1>

          {allMessages &&
            allMessages.map((message, index) => {
              return (
                <div key={index}>
                  <h5>{formatDate(message.date)}</h5>
                  <p>{message.feedback_text}</p>
                </div>
              );
            })}
        </div>
        <div className={styles.rightImage}>
          <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
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

export default Messages;
