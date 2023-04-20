import React, {useRef, useState} from 'react'
import Button from '../UI/Button/Button'
import { Input } from '../UI/Input/Input'
import classes from './MealsItemForm.module.css'

export const MealItemForm = (props) => {

  const [isAmountValid, setIsAmountValid] = useState(true)

  const submitHandler = (event) => {
    
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;

    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length ===0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setIsAmountValid(false)
      return;
    }

    props.onAddToCart(enteredAmountNumber)

  }
  
  const amountInputRef = useRef();

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Amount" ref={amountInputRef} input={{
          id: 'amount_' + props.id,
          type:'number',
          min:'1',
          max:'5',
          step:'1',
          defaultValue:'1',
        }}/> 
        <Button type='submit'>+Add</Button>
        {!isAmountValid && <p>Please enter a valid number (1-5);</p>}
    </form>
  )
}
