import React from "react"
import classes from "./ProductCard.module.css"
import classesMd from "./ProductCardMd.module.css"
import classesLg from "./ProductCardLg.module.css"
import classesSm from "./ProductCardSm.module.css"
import CartBtn from "../CartBtn/CartBtn"
import { FaStar } from "react-icons/fa6"

export default function ProductCard({sz = 'md'}){

  return (
    <div className={classes.container}>
      <img className={classes.img} src="/img/temp-mango.png" />
      <div className={classes.text}>
        <div className={classes.info}>
          <span className={classes.name}>Surjapur Mango</span>
          <span className={classes.price}>$14.99</span>
          <div>
            <FaStar className={classes.filled} />
            <FaStar className={classes.filled} /> 
            <FaStar className={classes.filled} /> 
            <FaStar className={classes.filled} /> 
            <FaStar className={classes.empty} /> 
          </div>
        </div>
        <CartBtn />
      </div>
    </div>
  )
}