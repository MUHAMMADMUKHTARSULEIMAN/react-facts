import ReactLogo2 from "../images/Group.svg";
export default function Main() {
  return(
    <div className="main">
      <h1>Fun facts about React</h1>
      <ul>
        <li>It was created by Jordan Walke in 2013</li>
        <li>It uses JSX which is compiled into JavaScript by Babel</li>
        <li>It uses state to change the UI after listening for a certain event</li>
        <li>It is maintained by Meta</li>
      </ul>
      <img src={ReactLogo2} alt="React logo"/>
    </div>
  )
}