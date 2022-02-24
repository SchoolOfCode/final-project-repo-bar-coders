import React, {useState, useEffect} from 'react'
import Navbar from '../src/studentcomponents/navbar'
import Styles from '../styles/finishedbooks.module.css'




function Finishedbooks({ isNewMessage, studentId, studentName, completedBooks }) {

    // const [completedBooks, setCompletedBooks] = useState([])

    // async function getCompletedBooks() {
    //     try {
    //         const response = await fetch(
    //             `https://fourweekproject.herokuapp.com/completedbooks/${studentId}`
    //         );
    //         const data = await response.json();
    //         console.log(data)
    //         setCompletedBooks(data.payload);
    //     }
    //     catch { alert("Server unavailable")}
    // }

    // useEffect(() => {
    //    getCompletedBooks(); 
    // }, [])
    
     function formatDate(string) {
       var options = { year: "numeric", month: "long", day: "numeric" };
       return new Date(string).toLocaleDateString([], options);
     }
    

    

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

           
    </div>
  </div> 
);
}



export async function getStaticProps() {
  
    const response = await fetch(
      `https://fourweekproject.herokuapp.com/completedbooks/s01` //need to work out how to get studentId here?
    );
    const data = await response.json();

    const completedBooks = data.payload;
    console.log(completedBooks)
       
    return {
         props: {
           completedBooks,
         },
       };

 
}

export default Finishedbooks




