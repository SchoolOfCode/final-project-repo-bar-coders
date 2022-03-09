import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import image from "../images/projeto-o-fn--TuQvBZ0-unsplash.jpg";
import { getIDToken } from "../src/lib/firebase/refresh-tokens";
import { auth } from "../src/lib/firebase/firebase-init";
import { post } from "../src/lib/HTTP_Functions/POST";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

function Home({ teacherId }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Auth checking credentials
  async function signIn() {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const refreshToken = res.user.refreshToken;
      await post("/api/auth", { refreshToken });
      if (res.user.uid === teacherId) {
        window.location.href = "/teacherhome";
      } else {
        window.location.href = "/studenthome";
      }
    } catch (error) {}
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.image}>
        <Image
          src="https://images.unsplash.com/photo-1635648116223-bce260c0dc1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          //src={image.src}
          alt="space"
          width={600}
          height={750}
        />
      </div>
      <div className={styles.rightSide}>
        <h1>Book Worms</h1>
        <h2>Login</h2>
        <input
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
          placeholder="username"
        />
        <input
          onChange={(evt) => {
            setPassword(evt.target.value);
          }}
          type="password"
          placeholder="password"
        />
        <div className={styles.Buttons}>
          <Link href="/studenthome" passHref>
            <button onClick={signIn}>Go!</button>
          </Link>
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
    // const testToken = await auth.currentUser.getIdToken(true);
    // console.log(testToken);

    if (!token.getIDToken.user_id) {
      return {
        props: {
          userObject: [],
        },
      };
    }

    return {
      props: {
        userObject: [token],
      },
      redirect: {
        destination: "/studenthome",
        permanent: false,
      },
    };
  } catch (err) {
    console.log("THIS ERR WAS:", err);
    return {
      props: {
        userObject: [],
      },
    };
  }
}
export default Home;
