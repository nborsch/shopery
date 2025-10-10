import React from "react"
import classes from "./MainNav.module.css"

export default function MainNav(){

    return (
    <nav>
      <ul className={classes.nav}>
        <li className={classes.navItem}>Home <img src="/img/icon-down.png" /></li>
        <li className={classes.navItem}>Shop <img src="/img/icon-down.png" /></li>
        <li className={classes.navItem}>Blog <img src="/img/icon-down.png" /></li>
        <li className={classes.navItem}>About Us</li>
        <li className={classes.navItem}>Contact Us</li>
      </ul>
    </nav>
    )
}