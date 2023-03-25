import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>FlashFoods</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="mealsImg" />
      </div>
    </>
  );
};

export default Header;
