import React, {useContext, useEffect, useState} from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

export const HeaderCartButton = (props) => {
  const {items} = useContext(CartContext);
  const [isBtnHightlighted, setIsBtnHighlighted] = useState(false)

  console.log("items" ,items)

  const numberOfCartItems = items.reduce((cartNumber, item) => {
    return cartNumber + item.totalAmount
  }, 0);

  console.log(isBtnHightlighted)
  const btnClasses = `${classes.button} ${isBtnHightlighted ? classes.bump : ''}`

  useEffect(()=>{ 
    if(items.length===0){
      return;
    }
    setIsBtnHighlighted(true)

    const timer = setTimeout(() => {
      setIsBtnHighlighted(false)
    }, 300);
    
    return () =>{
      clearTimeout(timer)
    }
  },[items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span >
            Your Cart
        </span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
  )
}
