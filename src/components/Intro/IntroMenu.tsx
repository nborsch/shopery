import { NavLink } from "react-router"
import classes from "./IntroMenu.module.css"

type Props = {
  status: string;
  toggle: (clicked: string) => any;
}

export default function IntroMenu({status, toggle}: Props){

  const styling = (menuItem : string) => `${classes.link} ${status === menuItem && classes.selected}`
  
    return (
      <ul className={classes.list}>
        <li 
          className={styling("all")} 
          onClick={() => toggle("all")}
        >
          All
        </li>
        <li 
        className={styling("vegetables")} 
        onClick={() => toggle("vegetables")}
      >
        Vegetables
      </li>
        <li 
        className={styling("fruits")} 
        onClick={() => toggle("fruits")}
      >
        Fruit
      </li>
      <li 
        className={styling("meatandfish")} 
        onClick={() => toggle("meatandfish")}
      >
        Meat & Fish
      </li>
        <li className={classes.link}><NavLink to="">View all</NavLink></li>
      </ul>
    )
}