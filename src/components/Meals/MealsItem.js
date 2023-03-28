import React from 'react'
import classes from './MealsItem.module.css'
import { MealItemForm } from './MealsItemForm'

export const MealsItem = (props) => {
  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>${props.price.toFixed(2)}</div>
        </div>
        <div>
            <MealItemForm id={props.id}/>
        </div>
    </li>
  )
}
