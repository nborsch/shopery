import React from "react"
import classes from "../App.module.css"


export default function ShoppingCart(){

  return <>
    <div className={classes.headerCart}>
      <div className={classes.headerCartIcon}>
        <img src="/img/icon-cart.png" />
        <div className={classes.headerCartQty}>2</div>
      </div>
      <div>
        Shopping cart:<br />
        <span className={classes.headerCartPrice}>$58,586.00</span>
      </div>
    </div>
  </>
}