import Navbar from "../src/studentcomponents/navbar"


export default function StudentHome({isNewMessage}) {
    return (
        <Navbar isNewMessage={isNewMessage}></Navbar>
    )
}