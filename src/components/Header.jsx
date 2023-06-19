import "./Header.css";
import Button from "../components/Button.jsx";
import { GiFruitBowl, GiStarSwirl } from "react-icons/gi";
import { BiUser } from "react-icons/bi";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <GiStarSwirl size={30} />
        <h1>SuperNova</h1>
      </div>
      <Button>
        <BiUser size={15} />
        Login
      </Button>
    </header>
  );
}
