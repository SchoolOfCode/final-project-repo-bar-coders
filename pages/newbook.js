import React, { useEffect, useState } from "react";
import Navbar from "../src/studentcomponents/navbar";
import Image from "next/image";
import rocketicon from "../images/rocketicon.png";
import styles from "../styles/newbook.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { getIDToken } from "../src/lib/firebase/refresh-tokens";

function Newbook({ isNewMessage, studentName, getStudentName, userObject }) {
  const router = useRouter();

  const [newApiBook, setNewApiBook] = useState();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const userId = userObject[0].getIDToken.user_id;
  const fetchToken = userObject[0].getIDToken.id_token;

  useEffect(() => {
    bookSearch();
  }, [loading]);

  async function bookSearch() {
    if (title) {
      setErrorMessage("Please wait...");
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?title=${title}&author=${author}`
        );
        const data = await response.json();

        console.log(data.docs[0]);
        console.log(data.docs[0].author_name[0]);
        console.log(data.docs[0].title);
        console.log(data.docs[0].number_of_pages_median);
        console.log(data.docs[0].cover_edition_key); //use to fetch cover art
        console.log(Date.now()); //book id to be added to database

        const cover = data.docs[0].cover_edition_key
          ? `https://covers.openlibrary.org/b/olid/${data.docs[0].cover_edition_key}-L.jpg`
          : "https://www.wallpaperuse.com/wallp/42-425257_m.jpg";

        setNewApiBook({
          id: Date.now(),
          studentId: userId,
          title: data.docs[0].title,
          cover: cover,
          author: data.docs[0].author_name[0],
          totalPages: data.docs[0].number_of_pages_median,
        });
        setErrorMessage("");
      } catch {
        setErrorMessage(
          "No matches found. Try again, or add the details yourself."
        );
      }
    }
  }

  async function addBookToDatabase(fetchToken) {
    try {
      const url = "https://fourweekproject.herokuapp.com/books";
      await fetch(url, {
        method: "POST",
        headers: {
          authorization: `Bearer ${fetchToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newApiBook),
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
          <h1>Search for a new book</h1>
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
          <button
            onClick={() => {
              setLoading(!loading);
            }}
          >
            Search
          </button>

          {errorMessage && <p>{errorMessage}</p>}
          {errorMessage ===
            "No matches found. Try again, or add the details yourself." && (
                          <Link href="/cantfindbook" passHref>
                <button>Let me add the details myself</button>
              </Link>
                     )}
          {newApiBook && (
            <div>
              <p>Is this your book?</p>
              <h3>{newApiBook.title}</h3>
              <p>by {newApiBook.author}</p>
              <div className={styles.buttonDiv}>
                <button
                  onClick={() => {
                    addBookToDatabase(fetchToken);
                  }}
                >
                  Yes, this is my book
                </button>
                <Link href="/cantfindbook" passHref>
                  <button>No, let me add the details myself</button>
                </Link>
              </div>
            </div>
          )}
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

export default Newbook;
