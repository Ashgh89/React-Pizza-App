import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";

//NOTICE: By using useContext here, the HeaderCartButton component will be re-evaluated by React whenever the Context changes.
// And it changes when we do update it the CartProvider Component, so now we established this connection.

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    // amount, which stores the number of items per item type
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClicked}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Pizza Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

// NOTICE You can SVG codes in your JSX as well.
