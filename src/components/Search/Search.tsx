import React from "react"
import classes from "./Search.module.css"

export default function Search(){

  return <>
    <form className={classes.form}>
      <input className={classes.input} placeholder="Search" />
      <button className={classes.button}>Search</button>
    </form>
  </>
}