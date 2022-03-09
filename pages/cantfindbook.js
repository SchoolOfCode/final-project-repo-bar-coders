import React, { useState } from "react";
import Navbar from "../src/studentcomponents/navbar";
import Image from "next/image";
import rocketicon from "../images/rocketicon.png";
import styles from "../styles/cantfindbook.module.css";
import { useRouter } from "next/router";
import { getIDToken } from "../src/lib/firebase/refresh-tokens";

function Cantfindbook({
  isNewMessage,
  studentName,
  studentId,
  getStudentName,
  userObject,
}) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState();

  const userId = userObject[0].getIDToken.user_id;
  const fetchToken = userObject[0].getIDToken.id_token;

  async function addBookToDatabase(userId, fetchToken) {
    try {
      const url = "https://fourweekproject.herokuapp.com/books";
      await fetch(url, {
        method: "POST",
        headers: {
          authorization: `Bearer ${fetchToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Date.now(),
          studentId: userId,
          title: title,
          cover: "https://www.wallpaperuse.com/wallp/42-425257_m.jpg",
          author: author,
          totalPages: pages,
        }),
      });
      router.push("/studenthome");
    } catch(err) {
      console.log("error in addBookToDatabase", err);
    }
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
          <h1>Couldn&apos;t find your book in the list? Enter it below!</h1>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Book title"
          ></input>
          <input
            type="text"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            placeholder="Author"
          ></input>
          <input
            type="text"
            value={pages}
            onChange={(e) => {
              setPages(e.target.value);
            }}
            placeholder="Number of pages"
          ></input>
          <button
            onClick={() => {
              addBookToDatabase(userId, fetchToken);
            }}
          >
            Add book
          </button>
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

export default Cantfindbook;
