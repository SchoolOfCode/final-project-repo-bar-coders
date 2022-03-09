import { Link, useState } from "react";
import styles from "../../../styles/readinglog.module.css";
import { useRouter } from "next/router";

function Readinglog({ currentBook, userObject }) {
  const router = useRouter();

  const [startPage, setStartPage] = useState();
  const [endPage, setEndPage] = useState();
  const [minutes, setMinutes] = useState();
  const [summary, setSummary] = useState();
  const [isComplete, setIsComplete] = useState(false);

  const userId = userObject[0].getIDToken.user_id;
  const fetchToken = userObject[0].getIDToken.id_token;

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const url = "https://fourweekproject.herokuapp.com/summaries";

      await fetch(url, {
        method: "POST",
        headers: {
          authorization: `Bearer ${fetchToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookId: currentBook.id,
          studentId: userId,
          currentPage: endPage,
          summary: summary,
          isComplete: isComplete,
          minutesRead: minutes,
          pagesRead: endPage - startPage,
        }),
      });
      console.log({
        bookId: currentBook.id,
        studentId: userId,
        currentPage: endPage,
        summary: summary,
        iscomplete: isComplete,
        minutesRead: minutes,
        pagesRead: endPage - startPage,
        url,
      });
      router.push("/studenthome");
    } catch(err) {
      console.log("error in handleSubmit", err);
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>{currentBook.title}</h1>
        <div className={styles.pageDiv}>
          <input
            type="text"
            value={startPage}
            onChange={(e) => setStartPage(e.target.value)}
            placeholder="What page did you start on?"
            required
          ></input>

          <input
            type="text"
            value={endPage}
            onChange={(e) => setEndPage(e.target.value)}
            placeholder="What page did you finish on?"
            required
          ></input>
        </div>

        <input
          type="text"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          placeholder="How many minutes did you read for?"
          required
        ></input>

        <textarea
          rows="4"
          cols="50"
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Summarise today's reading in one or two sentences"
          className={styles.summary}
          required
        ></textarea>

        <div className={styles.buttons}>
          {/* <Link href="studenthome" passHref> */}
          <button type="submit">Submit</button>
          {/* </Link> */}
          <label>
            Finished the book?
            <input
              value={isComplete}
              onClick={() => {
                setIsComplete(!isComplete);
              }}
              type="checkbox"
            ></input>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Readinglog;
