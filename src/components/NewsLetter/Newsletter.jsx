import React from "react"
import Logo from "../Logo"
import classes from "./Newsletter.module.css"

export default function Newsletter(){

  return (
    <div className={classes.container}>
      <div className={classes.news}>
        <Logo width={225} />
        <div>
          <p className={classes.para}>Subscribe to our newletter</p>
          <span className={classes.span}>Pellentesque eu nibh eget mauris congue mattis matti.</span>
        </div>
        <div>
          <form>
            <input className={classes.input} placeholder="Search" />
            <button className={classes.button}>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}