import React from "react"
import classes from "./ProductCard.module.css"
import classesMd from "./ProductCardMd.module.css"
import classesLg from "./ProductCardLg.module.css"
import classesSm from "./ProductCardSm.module.css"
import CartBtn from "../CartBtn/CartBtn"
import { FaStar } from "react-icons/fa6"

export default function ProductCard({sz = 'md'}){

  const sizeClass = sz === 'lg' ?
    classesLg :
    sz === 'md' ?
      classesMd :
      classesSm

  return (
    <div className={sizeClass.container}>
      <img className={sizeClass.img} src="/img/temp-mango.png" />
      <div className={classes.text}>
        <div className={classes.info}>
          <span className={sizeClass.name}>Surjapur Mango</span>
          <span className={classes.price}>$14.99</span>
          <div>
            <FaStar className={sizeClass.filled} />
            <FaStar className={sizeClass.filled} /> 
            <FaStar className={sizeClass.filled} /> 
            <FaStar className={sizeClass.filled} /> 
            <FaStar className={sizeClass.empty} /> 
          </div>
        </div>
        <CartBtn />
      </div>
    </div>
  )
}