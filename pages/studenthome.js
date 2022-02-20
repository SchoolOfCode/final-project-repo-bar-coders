import Navbar from "../src/studentcomponents/navbar"
import ProgressBar from "../src/studentcomponents/progressbar"


export default function StudentHome({ isNewMessage, studentDaysRead }) {
  return (
    <div>
      <Navbar isNewMessage={isNewMessage}/>
      <ProgressBar studentDaysRead={studentDaysRead} />
    </div>
  );
}