import React from "react"
import classes from "../App.module.css"
import Sign from "./Sign"
import Address from "./Address"
import Logo from "./Logo"
import Search from "./Search"
import ShoppingCart from "./ShoppingCart"
import MainNav from "./MainNav/MainNav"
import PhoneNumber from "./PhoneNumber"

export default function Header(){

  return (
    <>
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
      <div>
        <MainNav />
      </div>
      <div className={classes.headerBottomPhone}>
        <PhoneNumber />
      </div>
    </div>
    </>
  )
}