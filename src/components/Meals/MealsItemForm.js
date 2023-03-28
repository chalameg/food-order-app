import React from 'react'
import Button from '../UI/Button/Button'
import { Input } from '../UI/Input/Input'
import classes from './MealsItemForm.module.css'

export const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
        <Input label="Amount" input={{
          id: 'amount_' + props.id,
          type:'number',
          min:'1',
          max:'5',
          step:'1',
          defaultValue:'1'
        }}/> 
        <Button>+Add</Button>
    </form>
  )
}
