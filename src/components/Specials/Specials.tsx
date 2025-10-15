import React from "react"
import classes from "./Specials.module.css"
import Button from "../Button/Button"
import { FaArrowRightLong } from "react-icons/fa6"

export default function Specials(){

    return (
      <div className={classes.container}>
        <div className={classes.text}>
          <span className={classes.subtitle}>Best deals</span>
          <h2 className={classes.title}>Our Specials of the Month</h2>
          <div className={classes.countdown}>
            <div className={classes.numbers}>00</div>
            <div className={classes.dividers}>:</div>
            <div className={classes.numbers}>02</div>
            <div className={classes.dividers}>:</div>
            <div className={classes.numbers}>18</div>
            <div className={classes.dividers}>:</div>
            <div className={classes.numbers}>46</div>
            <div className={classes.time}>Days</div>
            <div className={classes.time}>Hours</div>
            <div className={classes.time}>Mins</div>
            <div className={classes.time}>Secs</div>
          </div>
          <Button>Shop now <FaArrowRightLong /></Button>
        </div>
        <img className={classes.img} src="/img/home-specials.png" />
      </div>
    )
}