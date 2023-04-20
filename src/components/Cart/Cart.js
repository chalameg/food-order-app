import React, { useContext } from "react";
import { Modal } from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

export const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const itemAddHandler = (item) => {
    cartCtx.addItem({...item, totalAmount: 1})
  };

  const itemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.totalAmount}
      onAdd={itemAddHandler.bind(null, item)}
      onRemove={itemRemoveHandler.bind(null, item.id)}
    />
  ));
  return (
    <Modal onClick={props.onHideCart}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {cartCtx.items.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};
