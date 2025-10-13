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
        <li>
          <Link to={""}>
            <MainNavItem>
              <FaAppleWhole /> Fruits
            </MainNavItem>
          </Link>
        </li>
        <li>
          <Link to={""}>
            <MainNavItem>
              <FaLeaf /> Vegetables
            </MainNavItem>
          </Link>
        </li>
        <li>
          <Link to={""}>
            <MainNavItem>
              <FaFishFins /> Fish
            </MainNavItem>
          </Link>
        </li>
        <li>
          <Link to={""}>
            <MainNavItem>
              <FaKiwiBird /> Poultry
            </MainNavItem>
          </Link>
        </li>
        <li>
          <Link to={""}>
            <MainNavItem>
              <FaPiggyBank /> Meat
            </MainNavItem>
          </Link>
          <li>
        </li>
          <Link to={""}>
            <MainNavItem>
              <FaDroplet /> Dairy
            </MainNavItem>
          </Link>
        </li>
        <li>
          <Link to={""}>
            <MainNavItem>
              <FaBottleDroplet /> Water & Beverages
            </MainNavItem>
          </Link>
        </li>
        <li>
          <Link to={""}>
            <MainNavItem>
              <FaCanadianMapleLeaf /> Bakery
            </MainNavItem>
          </Link>
        </li>
        <li>
          <Link to={""}>
            <MainNavItem>
              <FaPlus /> View all categories
            </MainNavItem>
          </Link>
        </li>
      </ul>
    </nav>
    )
}