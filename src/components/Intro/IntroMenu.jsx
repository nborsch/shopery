import React from "react"
import classes from "./IntroMenu.module.css"

export default function IntroMenu(){

    return (
      <ul className={classes.list}>
        <li><a href="" className={classes.link}>All</a> | </li>
        <li><a href="" className={classes.link}>Vegetables</a> | </li>
        <li><a href="" className={classes.link}>Fruit</a> | </li>
        <li><a href="" className={classes.link}>Meat & Fish</a> | </li>
        <li><a href="" className={classes.link}>View all</a></li>
      </ul>
    )
}