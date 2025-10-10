import React from "react"
import classes from "./MainHighlight.module.css"

export default function MainHighlight(){

    return (
      <div className={classes.container}>
        <div className={classes.iconContainer}>
          <img src="img/icon-delivery.png" />
        </div>
        <h3>Free shipping</h3>
        <p className={classes.p}>On all orders over $50</p>
      </div>
    )
}