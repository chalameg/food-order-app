import React from 'react'
import { Modal } from '../UI/Modal/Modal'
import classes from './Cart.module.css'

export const Cart = () => {
    const cartItems = [{id:"we", name:"Sushi", amount:3, price: 24}].map(item => <li>{item.name}</li>)
  return (
    <Modal>
        <ul className={classes['cart-items']}>
        {cartItems}
        </ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.21</span>
        </div>
        <div className={classes.actions}>
             <button className={classes['button--alt']}>Close</button>
             <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}
