import React, { useEffect } from "react";
import Styles from "../styles/teacherhome.module.css";
import Classlist from "../src/teacherComponents/classlist/classlist";
import Teachernavbar from "../src/teacherComponents/Teachernavbar/teachernavbar";
import Teacherinfo from "../src/teacherComponents/Teacherinfo/Teacherinfo";

import { getIDToken } from "../src/lib/firebase/refresh-tokens";
import Individualstats from "../src/teacherComponents/Individualstats/individualstats";

function Teacherinfopage({
  lessThanFour,
  moreThanFour,
  changeStudentSelected,
  studentSelected,
  userObject,
  getClassList,
}) {
  const fetchToken = userObject[0].getIDToken.id_token;

  useEffect(() => {
    getClassList(fetchToken);
    console.log("4+:", moreThanFour, "4-:", lessThanFour);
  }, []);
  return (
    <div className={Styles.container}>
      <div className={Styles.leftside}>
        <Classlist
          lessThanFour={lessThanFour}
          moreThanFour={moreThanFour}
          changeStudentSelected={changeStudentSelected}
          studentSelected={studentSelected}
          userObject={userObject}
        ></Classlist>
      </div>

      <div className={Styles.rightside}>
        <Teachernavbar></Teachernavbar>
        <Teacherinfo
          studentSelected={studentSelected}
          userObject={userObject}
          moreThanFour={moreThanFour}
          lessThanFour={lessThanFour}
        ></Teacherinfo>
      </div>
      <div></div>
    </div>
  );
}
// Adding Authentication to this page by checking for valid token
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
          permanent: false,
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
        permanent: false,
      },
    };
  }
}

export default Teacherinfopage;
