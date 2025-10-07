import React from "react"
import classes from "../Header/Header.module.css"
import Sign from "../Sign"
import Address from "../Address"
import Logo from "../Logo"
import Search from "../Search/Search"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import MainNav from "../MainNav/MainNav"
import PhoneNumber from "../PhoneNumber"

export default function Header(){

  return (
    <header>
      <div className={classes.headerTop}>
        <div className={classes.headerTopContainer}>
          <div>
              Store Location: <Address lines={1} />
          </div>
          <Sign />
        </div>
      </div>
      <div className={classes.headerMid}>
        <Logo width={183} />
        <Search />
        <ShoppingCart />
      </div>
      <div className={classes.headerBottom}>
        <nav>
          <MainNav />
        </nav>
        <div className={classes.headerBottomPhone}>
          <PhoneNumber />
        </div>
      </div>
    </header>
  )
}