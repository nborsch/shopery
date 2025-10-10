import React from "react"
import { FaPhoneVolume } from "react-icons/fa6";
import classes from "../Header/Header.module.css"
import Sign from "../Sign/Sign"
import Address from "../Address"
import Logo from "../Logo"
import Search from "../Search/Search"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import MainNav from "../MainNav/MainNav"
import PhoneNumber from "../PhoneNumber"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"

export default function Header(){

  return (
    <header>
      <div className={classes.top}>
        <div className={classes.topContainer}>
          <div>
              Store Location: <Address lines={1} />
          </div>
          <Sign />
        </div>
      </div>
      <div className={classes.middle}>
        <h1 className={classes.middleLogo}><Logo width={183} /></h1>
        <Search />
        <ShoppingCart />
      </div>
      <div className={classes.bottom}>
        <MainNav />
        <div className={classes.bottomPhone}>
          <FaPhoneVolume /> <PhoneNumber />
        </div>
      </div>
      <Breadcrumbs />
    </header>
  )
}