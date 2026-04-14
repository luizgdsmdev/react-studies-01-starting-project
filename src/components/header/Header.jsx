import styles from "./Header.module.css";
import { randomNumber } from "../../utils/randomNumber/RandomNumber";
import reactCoreConcepts from "../../assets/react-core-concepts.png";

const subTitleHolder = ["Fundamental", "Core", "Essential"];
// Since the array has 3 elements, the random number will be 0, 1 or 2
const subText = subTitleHolder[randomNumber(2)];

function Header() {
  return (
    <header className={styles.header}>
      <img src={reactCoreConcepts} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {subText} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
}

export default Header;
