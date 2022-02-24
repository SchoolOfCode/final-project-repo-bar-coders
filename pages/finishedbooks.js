import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.development';
import BookProgressBar from '../src/studentcomponents/bookprogressbar';
import Navbar from '../src/studentcomponents/navbar'
import Styles from '../styles/finishedbooks.module.css'



function Finishedbooks({ isNewMessage, studentId, studentName }) {

    const [completedBooks, setCompletedBooks] = useState([])

    async function getCompletedBooks() {
        try {
            const response = await fetch(
                `https://fourweekproject.herokuapp.com/completedbooks/${studentId}`
            );
            const data = await response.json();
            console.log(data)
            setCompletedBooks(data.payload);
        }
        catch { alert("Server unavailable")}
    }

    useEffect(() => {
       getCompletedBooks(); 
    }, [])
    
     function formatDate(string) {
       var options = { year: "numeric", month: "long", day: "numeric" };
       return new Date(string).toLocaleDateString([], options);
     }
    

//     "payload": [
// {"book_id": 20,
// "student_id": "s01",
// "date_completed": "2022-02-22T00:00:00.000Z",
    // "cover": "https://covers.openlibrary.org/b/isbn/9781405204057.jpg",
    //"title": "The Mystery of the Missing Man",
// "author": "Enid Blyton",
// "total_pages": 240,
// "iscomplete": true},
    

return (
  <div>
    {<Navbar isNewMessage={isNewMessage} studentName={studentName} />}
    <div className={Styles.container}>
            {completedBooks.map((book, index) => {
                return (
                  <div key={index} className={Styles.box}>
                    <img src={book.cover} alt="" width="350rem" height="350rem" />
                        Completed: {formatDate(book.date_completed)}
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
export default Finishedbooks




