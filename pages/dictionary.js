import Navbar from "../src/studentcomponents/navbar";
import rocketicon from "../images/rocketicon.png";
import Image from "next/image";
import styles from "../styles/dictionary.module.css";


function dictionary({
  isNewMessage,
  words,
  updateWordsList,
  searchWord,
  handleChange,
  meanings,
  updateMeanings,
  resetMeanings,
}) {
  async function getWord(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      const data = await response.json();
      const meanings = data[0].meanings;
      updateMeanings(meanings);
    } catch {
      //   alert("This isn't a word. Check your spelling and try again.");
      console.log("error");
    }

    console.log(meanings);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("handlesubmit");
    if (!words.includes(searchWord)) {
      updateWordsList(searchWord);
    }
    resetMeanings();
  }

  return (
    <div>
      <Navbar isNewMessage={isNewMessage} />
      <div className={styles.pageBody}>
        <div className={styles.leftImage}>
          <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        </div>

        <div className={styles.container}>
          <form>
            <h1>Found a word you don&apos;t know?</h1>

            <input
              type="text"
              list="valuelist"
              value={searchWord}
              placeholder="Type new word or choose from this list"
              onChange={handleChange}
            ></input>
            <datalist className={styles.dropdown} id="valuelist">
              {words.map((word, index) => {
                return <option key={index}>{word}</option>;
              })}
            </datalist>

            <button onClick={getWord}>Look it up</button>
           
                          <div>
                          {meanings &&
                              meanings.map((element, index) => {
                                  return (
                                    <div
                                      className={styles.definitions}
                                      key={index}
                                    >
                                      <h3>
                                        {searchWord} ({element.partOfSpeech})
                                      </h3>
                                      {element.definitions.map(
                                        (entry, index) => {
                                          return (
                                            <p key={index}>
                                              {entry.definition}
                                            </p>
                                          );
                                        }
                                      )}
                                      <button onClick={resetMeanings}>X</button>
                                    </div>
                                  );
                              })
                                  
                          
                              }
                              
              
            </div>
            <button onClick={handleSubmit}>Add this to my list of words</button>
          </form>
        </div>
        <div className={styles.rightImage}>
          <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        </div>
      </div>
    </div>
  );
}

export default dictionary;
