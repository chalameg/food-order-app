import React, {useContext} from 'react'
import style from './Header.module.css'
import img from '../../assets/meals.jpg'
import { HeaderCartButton } from './HeaderCartButton'

export const Header = (props) => {

  return (
   <>
    <div className={style.header}>
        <h1 className={style.headerTitle}>Dl-HHDP</h1>
        <HeaderCartButton onClick = {props.onShowCart}/>
    </div>

    <div className={style.mainImage}>
      <img src={img} alt="meals"/>
    </div>
   </>
  )
}
