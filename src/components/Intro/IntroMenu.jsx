import React from "react"
import { Link } from "react-router"
import classes from "./IntroMenu.module.css"

export default function IntroMenu({toggle}){
  
    return (
      <ul className={classes.list}>
        <li className={classes.link} onClick={() => toggle("All")}>All</li>
        <li className={classes.link} onClick={() => toggle("Vegetables")}>Vegetables</li>
        <li className={classes.link} onClick={() => toggle("Fruits")}>Fruit</li>
        <li className={classes.link} onClick={() => toggle("MeatAndFish")}>Meat & Fish</li>
        <li className={classes.link}><Link to="">View all</Link></li>
      </ul>
    )
}