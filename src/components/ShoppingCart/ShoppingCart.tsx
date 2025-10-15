import React from "react"
import classes from "./ShoppingCart.module.css"

export default function ShoppingCart(){

  return <>
    <div className={classes.cart}>
      <div className={classes.cartIcon}>
        <img src="/img/icon-cart.png" />
        <div className={classes.cartQty}>2</div>
      </div>
      <div>
        Shopping cart:<br />
        <span className={classes.cartPrice}>$58,586.00</span>
      </div>
    </div>
  </>
}