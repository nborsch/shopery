import React from "react"
import classes from "./Highlights.module.css"

export default function Highlights(){

    return (
      <div className={classes.bg}>
        <div className={classes.container}>
          <a href=""><img src="img/home-highlights-milk.png" /></a>
          <a href=""><img src="img/home-highlights-drink.png" /></a>
          <a href=""><img src="img/home-highlights-breakfast.png" /></a>
        </div>
      </div>
    )
}