import React from 'react'
import Navbar from '../src/studentcomponents/navbar'
import Image from 'next/image'
import rocketicon from '../images/rocketicon.png'
import styles from '../styles/newbook.module.css'
import Link from 'next/link'

function Newbook({ isNewMessage }) {
  async function bookSearch() {
    const response = await fetch(
      `https://openlibrary.org/search.json?title=matilda&author=roald%20dahl` //update to reflect search terms
    );
    const data = await response.json();

    console.log(data.docs[0]);
    console.log(data.docs[0].author_name[0]);
    console.log(data.docs[0].title);
    console.log(data.docs[0].number_of_pages_median);
    console.log(data.docs[0].cover_edition_key); //use to fetch cover art
    console.log(data.docs[0].isbn[0]) //book id to be added to database
  }

  return (
    <div>
      <Navbar isNewMessage={isNewMessage} />
      <div className={styles.pageBody}>
        <div className={styles.leftImage}>
          <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        </div>

        <div className={styles.container}>
          <h1>Search for a new book</h1>
          <input type="text" placeholder="Book title"></input>
          <input type="text" placeholder="Author"></input>
          <button onClick={bookSearch}>Search</button>

          <input
            type="text"
            list="valuelist"
            placeholder="Choose your book from this list"
          ></input>
          <datalist id="valuelist">
            <option>Option</option>
            <option>Option</option>
          </datalist>

          <button>This is my book</button>
          <Link href="/cantfindbook" passHref>
            <button>I can&apos;t find it</button>
          </Link>
        </div>
        <div className={styles.rightImage}>
          <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        </div>
      </div>
    </div>
  );
}

export default Newbook