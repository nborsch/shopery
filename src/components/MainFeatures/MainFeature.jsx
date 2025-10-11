import React from "react"
import classes from "./MainFeature.module.css"
import Button from "../Button/Button"
import { FaArrowRightLong } from "react-icons/fa6"

export default function MainFeature(){

  return (
  <>
    <div className={classes.feature}>
      <img 
        src="/img/home-mainfeat-basket.png" 
        className={classes.basket}
      />
      <div>
        <span className={classes.welcome}>Welcome to Shopery</span>
        <h2 className={classes.title}>Fresh & Healthy Organic Food</h2>
        <p className={classes.freeShipping}>Free shipping on all orders. We deliver, you enjoy.</p>
        <Button>
          Shop now <FaArrowRightLong />
        </Button>
      </div>
    </div>
  </>
  )
}