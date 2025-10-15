import React from "react"
import { NavLink } from "react-router"
import classes from "./IntroMenu.module.css"

export default function IntroMenu({status}){
  const [on, toggle] = status

    return (
      <ul className={classes.list}>
        <li 
          className={`${classes.link} ${on === "all" && classes.selected}`} 
          onClick={() => toggle("all")}
        >
          All
        </li>
        <li 
        className={`${classes.link} ${on === "vegetables" && classes.selected}`} 
        onClick={() => toggle("vegetables")}
      >
        Vegetables
      </li>
        <li 
        className={`${classes.link} ${on === "fruits" && classes.selected}`} 
        onClick={() => toggle("fruits")}
      >
        Fruit
      </li>
      <li 
        className={`${classes.link} ${on === "meatandfish" && classes.selected}`} 
        onClick={() => toggle("meatandfish")}
      >
        Meat & Fish
      </li>
        <li className={classes.link}><NavLink to="">View all</NavLink></li>
      </ul>
    )
}