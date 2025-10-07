import React from "react"
import classes from "./Newsletter.module.css"

export default function Newsletter(){

  return <>
    <form>
      <input className={classes.footerNewsInput} placeholder="Search" />
      <button className={classes.footerNewsButton}>Subscribe</button>
    </form>
  </>
}