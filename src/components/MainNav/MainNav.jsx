import React from "react"
import classes from "./MainNav.module.css"

export default function MainNav(){

    return <>
        <ul className={classes.headerBottomNav}>
            <li>Home <img src="/img/icon-down.png" /></li>
            <li>Shop <img src="/img/icon-down.png" /></li>
            <li>Blog <img src="/img/icon-down.png" /></li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
    </>
}