import Navbar from "../src/studentcomponents/navbar";
import ProgressBar from "../src/studentcomponents/progressbar";
import InfoWindow from "../src/studentcomponents/infowindow";
 

export default function StudentHome({ isNewMessage, studentDaysRead }) {
  return (
    <div>
      <Navbar isNewMessage={isNewMessage} />
      <ProgressBar studentDaysRead={studentDaysRead} />
      <InfoWindow/>
      
    </div>
  );
}
