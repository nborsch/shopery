import React from "react"
import classes from "./Button.module.css"

export default function Button({children}){

    return (
    <button className={classes.button}>
      <span className={classes.align}>
        {children}
      </span>
    </button>
    )
}