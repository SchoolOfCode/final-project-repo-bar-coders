import Navbar from '../src/studentcomponents/navbar'
import rocketicon from '../images/rocketicon.png'
import Image from 'next/image'
import styles from '../styles/dictionary.module.css'
import { useState } from 'react'

function dictionary({ isNewMessage, words, updateWordsList, searchWord, handleChange }) {


  function getWord(e) {
    e.preventDefault()
    console.log("getWord")
  }

  function handleSubmit(e) {
      e.preventDefault()
    console.log("handlesubmit")
   
    updateWordsList(searchWord);
    console.log(words)
  }


  return (
    <div>
      <Navbar isNewMessage={isNewMessage} />
      <div>
        <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        <div>

        <div className={styles.container}>
          <form>
            <h1>Found a word you don&apos;t know?</h1>

            <input type="text" list="valuelist" value={searchWord} onChange={handleChange}></input>
            <datalist id="valuelist">
            {words.map((word, index)=>{return<option key={index}>{word}</option>})}
            </datalist>
      
            <button onClick={getWord}>Look it up</button>

            <p>(Definition appears here)</p>

              <button onClick={handleSubmit}>Add this to my list of words</button>
    
          </form>
          
        </div>
          
        </div>
        <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
      </div>
    </div>
  );
}

export default dictionary