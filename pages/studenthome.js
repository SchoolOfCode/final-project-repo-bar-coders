import Navbar from "../src/studentcomponents/navbar"
import ProgressBar from "../src/studentcomponents/progressbar"
import Carousel from "../src/studentcomponents/bookcarousel";


export default function StudentHome({
  isNewMessage,
  studentDaysRead,
  inProgressBooks,
  currentBook,
  updateCurrentBook,
}) {
  return (
    <div>
      <Navbar isNewMessage={isNewMessage} />
      <ProgressBar studentDaysRead={studentDaysRead} />

      <div>
        <Carousel
          inProgressBooks={inProgressBooks}
          currentBook={currentBook}
          updateCurrentBook={updateCurrentBook}
        />
      </div>
    </div>
  );
}