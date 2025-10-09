import React from "react"
import classes from "./Breadcrumbs.module.css"
import { FaHouse } from "react-icons/fa6"

export default function Breadcrumbs(){

  return <>
    <div className={classes.breadcrumbsContainer}>
      <div className={classes.breadcrumbsContainerGradient}>
        <nav className={classes.breadcrumbs}>
          <a href="ths" className={classes.breadcrumbsLink}>
            <FaHouse size="24px"/>
          </a> 
          {'>'} 
          <a href="ths" className={classes.breadcrumbsLink}>Categories</a> 
          {'>'} 
          <a href="trsh" className={classes.breadcrumbsLink}>Vegetables</a>
        </nav>
      </div> {/* breadcrumbsContainerGradient */}
    </div> {/* breadcrumbsContainer */}
  </>
}