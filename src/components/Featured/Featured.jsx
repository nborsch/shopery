import React from "react"
import classes from "./Featured.module.css"
import ProductCard from "../ProductCard/ProductCard"

export default function Featured(){

    return (
      <div className={classes.bg}>
        <div className={classes.container}>
          <h2 className={classes.title}>Featured Products</h2>
          <div className={classes.productsContainer}>
            <a href=""><ProductCard sz='sm' /></a>
            <a href=""><ProductCard sz='sm' /></a>
            <a href=""><ProductCard sz='sm' /></a>
            <a href=""><ProductCard sz='sm' /></a>
            <a href=""><ProductCard sz='sm' /></a>
          </div>
        </div>
      </div>
    )
}