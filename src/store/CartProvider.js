import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if(action.type==="ADD"){
    let updatedItems;

    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

    const existingCartItem = state.items[existingCartItemIndex];

    if(existingCartItem){
      let updatedItem = {
        ...existingCartItem,
        totalAmount:  existingCartItem.totalAmount + action.item.totalAmount
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem

    }else{
      updatedItems = state.items.concat(action.item)
    }

    const updatedTotalAmount = state.totalAmount + action.item.price*action.item.totalAmount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  
  if(action.type==="REMOVE"){
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);

    const existingCartItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedCartItems;
    if(existingCartItem.totalAmount ===1){
      //remove item
      updatedCartItems = state.items.filter((item) => item.id !== action.id)
    }else{
      let updatedItem = {
        ...existingCartItem,
        totalAmount:  existingCartItem.totalAmount - 1
      }
      updatedCartItems = [...state.items]
      updatedCartItems[existingCartItemIndex] = updatedItem
    }
    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount
    }
  }

  return defaultCartState;
}

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  console.log("items: ", cartState)

    const addItemToCardHandler = (item) =>{
      dispatchCartAction({type: "ADD", item: item})
    };

    const removeItemFromCardHandler = (id) =>{
      dispatchCartAction({type: "REMOVE", id: id})
    };


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCardHandler,
        removeItem: removeItemFromCardHandler,
    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}
