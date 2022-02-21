// import {SplitButton} from 'react'
import Navbar from '../src/studentcomponents/navbar'
import rocketicon from '../images/rocketicon.png'
import Image from 'next/image'

function dictionary({ isNewMessage, words, updateWordsList }) {
  return (
    <div>
      <Navbar isNewMessage={isNewMessage} />
      <div>
        <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
        <div>
          <form>
            <h1>Search for a new book</h1>

            <input type="text" placeholder="Book title"></input>

            <input type="text" placeholder="Author"></input>
              
            <button type="submit">Submit</button>

            <div>
            {/* <SplitButton type="text" placeholder="Choose your book from the list"></SplitButton> */}

            </div>
           
            <div>
              <button>This is my book</button>
              <button>I can&apos;t find it</button>
            </div>

          </form>
        </div>
        <Image src={rocketicon.src} alt="rocket" width="100" height="100" />
      </div>
    </div>
  );
}

export default dictionary