import React from "react"
import classes from "./Breadcrumbs.module.css"
import { FaHouse } from "react-icons/fa6"

export default function Breadcrumbs(){

  return <>
    <div className={classes.container}>
      <div className={classes.containerGradient}>
        <nav className={classes.breadcrumbs}>
          <a href="ths" className={classes.link}>
            <FaHouse size="24px"/>
          </a> 
          {'>'} 
          <a href="ths" className={classes.link}>Categories</a> 
          {'>'} 
          <a href="trsh" className={classes.link}>Vegetables</a>
        </nav>
      </div> {/* containerGradient */}
    </div> {/* container */}
  </>
}