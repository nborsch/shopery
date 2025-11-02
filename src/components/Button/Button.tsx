import React from "react"
import classes from "./Button.module.css"

export default function Button({children, type}:{
  children: React.ReactNode
  type: "button" | "submit" | "reset" | undefined
}){

    return (
    <button type={type} className={classes.button}>
      <span className={classes.align}>
        {children}
      </span>
    </button>
    )
}