import React from "react"
import { Link } from "react-router"
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

    return (
    <nav>
      <ul className={classes.nav}>
        <li className={classes.navItem}>
          <Link to={""}>
            Shop <FaAngleDown />
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link to={""}>
            Blog
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link to={""}>
            About Us
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link to={""}>
            Contact Us
          </Link>
        </li>
      </ul>
      <ul className={classes.shop}>
        <Link to={""}>
          <MainNavItem>
            <FaAppleWhole /> Fruits
          </MainNavItem>
        </Link>
        <Link to={""}>
          <MainNavItem>
            <FaLeaf /> Vegetables
          </MainNavItem>
        </Link>
        <Link to={""}>
          <MainNavItem>
            <FaFishFins /> Fish
          </MainNavItem>
        </Link>
        <Link to={""}>
          <MainNavItem>
            <FaKiwiBird /> Poultry
          </MainNavItem>
        </Link>
        <Link to={""}>
          <MainNavItem>
            <FaPiggyBank /> Meat
          </MainNavItem>
        <Link to={""}>
          <MainNavItem>
            <FaDroplet /> Dairy
          </MainNavItem>
        </Link>
        </Link>
        <Link to={""}>
          <MainNavItem>
            <FaBottleDroplet /> Water & Beverages
          </MainNavItem>
        </Link>
        <Link to={""}>
          <MainNavItem>
            <FaCanadianMapleLeaf /> Bakery
          </MainNavItem>
        </Link>
        <Link to={""}>
          <MainNavItem>
            <FaPlus /> View all categories
          </MainNavItem>
        </Link>
      </ul>
    </nav>
    )
}