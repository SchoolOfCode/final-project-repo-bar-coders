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
      title: "Example Title",
      currentPage: 1,
      bookCover:
        "https://images-na.ssl-images-amazon.com/images/I/51RTdGBiL6L._SX331_BO1,204,203,200_.jpg",
    },
    {
      book_id: 2,
      title: "Harry Potter and the Philosopher's Stone",
      currentPage: 145,
      bookCover: "https://pictures.abebooks.com/isbn/9780747549550-uk.jpg",
    },
    {
      book_id: 3,
      title: "Artemis Fowl",
      currentPage: 98,
      bookCover:
        "https://www.artemis-fowl.com/wp-content/uploads/2019/03/2019-artemis-fowl-cover-book-one.jpg",
    },
  ]);

  //Current book that is being updated in the reading log:
  const [currentBook, setCurrentBook] = useState({
    book_id: 2,
    title: "Harry Potter and the Philosopher's Stone",
    currentPage: 145,
    bookCover: "https://pictures.abebooks.com/isbn/9780747549550-uk.jpg",
  });

  //function to update current book depending on what is clicked in the book carousel:
  function updateCurrentBook(bookId) {
    let selectedBook = inProgressBooks.find((book)=>{return book.book_id == bookId})
    setCurrentBook(selectedBook)
  }

  return (
    <Component {...pageProps} isNewMessage={isNewMessage} studentDaysRead={studentDaysRead} inProgressBooks={inProgressBooks} currentBook={currentBook} updateCurrentBook={updateCurrentBook}/>
  );

}

export default MyApp