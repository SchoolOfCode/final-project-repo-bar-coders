import React from "react";
import Styles from "../styles/teacherhome.module.css";
import Classlist from "../src/teacherComponents/classlist/classlist";
import Teacherdashboard from "../src/teacherComponents/Teacherdashboard/teacherdashboard";
import Teachernavbar from "../src/teacherComponents/Teachernavbar/teachernavbar";
import { getIDToken } from "../src/lib/firebase/refresh-tokens";
// import { Bar } from "react-chartjs-2";

function Teacherhome({
  lessThanFour,
  moreThanFour,
  changeStudentSelected,
  studentSelected,
}) {
  return (
    <div className={Styles.container}>
      <div className={Styles.leftside}>
        <Classlist
          lessThanFour={lessThanFour}
          moreThanFour={moreThanFour}
          changeStudentSelected={changeStudentSelected}
          studentSelected={studentSelected}
        />
      </div>

      <div className={Styles.rightside}>
        <Teachernavbar></Teachernavbar>
        <Teacherdashboard
          changeStudentSelected={changeStudentSelected}
          studentSelected={studentSelected}
        ></Teacherdashboard>
      </div>
      <div></div>
    </div>
  );
}
export async function getServerSideProps({ req, res }) {
  try {
    // This is the cookie
    const cookie = req.cookies.token;
    // This refreshes the id token
    const token = await getIDToken(cookie);

    if (!token.getIDToken.user_id) {
      return {
        redirect: {
          destination: "/",
        },
      };
    }

    return {
      props: {
        userObject: [token],
      },
    };
  } catch (err) {
    console.log("THIS ERR WAS:", err);
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}

export default Teacherhome;
