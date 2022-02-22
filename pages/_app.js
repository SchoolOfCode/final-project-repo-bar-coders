import '../styles/globals.css'
import { useState } from "react"

function MyApp({ Component, pageProps }) {

  //Added in case we use it as a stretch goal - notification if a "new" message is received
  const [isNewMessage, setIsNewMessage] = useState(true);

  // Used in the progress bar - need to work out how many days the student has read this week. Function to fetch data from database and calculate this needs to be written still
  const [studentDaysRead, setStudentDaysRead] = useState(5)

  //Used in the book carousel (& other places?) Need to write fetch request to get data from database. Initial state is just an example to check code works
  const [inProgressBooks, setInProgressBooks] = useState([
    {
      book_id: 1,
      title: "Winnie the Pooh",
      current_page: 1,
      total_pages: 150,
      cover: "http://www.buildingalibrary.com/wp-content/uploads/2011/10/Pooh_Personalize.jpg",
    },
    {
      book_id: 2,
      title: "Harry Potter and the Philosopher's Stone",
      current_page: 145,
      total_pages: 223,
      cover: "https://pictures.abebooks.com/isbn/9780747549550-uk.jpg",
    },
    {
      book_id: 3,
      title: "Artemis Fowl",
      current_page: 98,
      total_pages: 280,
      cover:
        "https://www.artemis-fowl.com/wp-content/uploads/2019/03/2019-artemis-fowl-cover-book-one.jpg",
    },
    {
      book_id: 4,
      title: "Unknown Book",
      current_page: 1,
      total_pages: 150,
      cover: "https://www.wallpaperuse.com/wallp/42-425257_m.jpg",
    },
  ]);

  //Current book that is being updated in the reading log:
  const [currentBook, setCurrentBook] = useState({
    book_id: 2,
    title: "Harry Potter and the Philosopher's Stone",
    current_page: 145,
    total_pages: 223,
    cover: "https://pictures.abebooks.com/isbn/9780747549550-uk.jpg",
  });

  //function to update current book depending on what is clicked in the book carousel:
  function updateCurrentBook(bookId) {
    let selectedBook = inProgressBooks.find((book)=>{return book.book_id == bookId})
    setCurrentBook(selectedBook)
  }

  //Used in dictionary - new word list
  const [words, setWords] = useState(["facilitate", "diminish", "gravitate"])

  //adds new words to dictionary word list
  function updateWordsList(newWord) {
    setWords([...words, newWord])
    // need to send new word to the database
  }

//used in studenthome to match coins earned
  const [minutesRead, setMinutesRead] = useState(45)

  return (
    <Component {...pageProps} isNewMessage={isNewMessage} studentDaysRead={studentDaysRead} inProgressBooks={inProgressBooks} currentBook={currentBook} updateCurrentBook={updateCurrentBook} words={words} updateWordsList={updateWordsList} minutesRead={minutesRead}/>
  );

}

export default MyApp