import React from "react"
import classes from "./MainNavItem.module.css"

export default function MainNavItem({children}:{children: React.ReactNode}){

    return (
      <li className={classes.item}>{children}</li>
    )
}