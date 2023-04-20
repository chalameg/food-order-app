import React, { useContext } from 'react'
import classes from './MealsItem.module.css'
import { MealItemForm } from './MealsItemForm'
import CartContext from '../../store/cart-context'


export const MealsItem = (props) => {
  const cartctx = useContext(CartContext)

  const onAddToCartHandler = amount => {
    cartctx.addItem({
      id: props.id,
      name: props.name,
      totalAmount: amount,
      price: props.price
    })
  }

  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>${props.price.toFixed(2)}</div>
        </div>
        <div>
            <MealItemForm id={props.id} onAddToCart={onAddToCartHandler}/>
        </div>
    </li>
  )
}
