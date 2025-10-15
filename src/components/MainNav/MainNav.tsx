import React from "react"
import { Link, NavLink } from "react-router"
import { 
  FaAngleDown, 
  FaAppleWhole, 
  FaLeaf,
  FaFishFins,
  FaKiwiBird,
  FaPiggyBank,
  FaDroplet,
  FaBottleDroplet,
  FaCanadianMapleLeaf,
  FaPlus
} from "react-icons/fa6"
import classes from "./MainNav.module.css"
import MainNavItem from "./MainNavItem"

export default function MainNav(){
  const [on, setOn] = React.useState(false)

  const toggle = () => setOn(prev => !prev)

  const active = ({isActive}) => isActive ? classes.active : ""

    return (
    <nav>
      <ul className={classes.nav}>
        <li 
          className={classes.navItem}
          onClick={toggle}
        >
          <Link to={""}>
            Shop <FaAngleDown />
          </Link>
        </li>
        <li className={classes.navItem}>
          <NavLink 
            to={""} 
            className={active}
          >
            Blog
          </NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink 
            to={""} 
            className={active}
          >
            About Us
          </NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink 
            to={""} 
            className={active}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      { on && (<ul className={classes.shop}>
        <NavLink to={""} >
          <MainNavItem>
            <FaAppleWhole /> Fruits
          </MainNavItem>
        </NavLink>
        <NavLink to={""}>
          <MainNavItem>
            <FaLeaf /> Vegetables
          </MainNavItem>
        </NavLink>
        <NavLink to={""}>
          <MainNavItem>
            <FaFishFins /> Fish
          </MainNavItem>
        </NavLink>
        <NavLink to={""}>
          <MainNavItem>
            <FaKiwiBird /> Poultry
          </MainNavItem>
        </NavLink>
        <NavLink to={""}>
          <MainNavItem>
            <FaPiggyBank /> Meat
          </MainNavItem>
        </NavLink>
        <NavLink to={""}>
          <MainNavItem>
            <FaBottleDroplet /> Dairy
          </MainNavItem>
        </NavLink>
        <NavLink to={""}>
          <MainNavItem>
            <FaDroplet /> Water & Beverages
          </MainNavItem>
        </NavLink>
        <NavLink to={""}>
          <MainNavItem>
            <FaCanadianMapleLeaf /> Bakery
          </MainNavItem>
        </NavLink>
        <NavLink to={""}>
          <MainNavItem>
            <FaPlus /> View all categories
          </MainNavItem>
        </NavLink>
      </ul>)}
    </nav>
    )
}