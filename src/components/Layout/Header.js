import React, { Fragment } from "react";

import mealsImage from "../../assets/pizzaPic.webp";
import HeaderCartButton from "./HeaderCartButton";

import styles from "../Layout/Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>KEEP CALM & ORDER PIZZA</h1>
        {
          /* <button>Cart</button> */ <HeaderCartButton
            onClicked={props.onShowCart}
          />
        }
      </header>

      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="All the foods on the table" />
      </div>
    </Fragment>
  );
};

export default Header;

// NOTICE React.Fragment : So Fragments allow us to write cleaner code, to end up with less unnecessary HTML elements on the final page
