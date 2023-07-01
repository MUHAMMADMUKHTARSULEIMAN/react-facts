import ReactLogo from "../images/logo.svg";
export default function Navbar() {
  return(
    <div className="navbar">
      <img src={ReactLogo} alt="React Logo" width="100"/>
      <h3>React Facts</h3>
      <h4>React Course - Project 1</h4>
    </div>
  )
}