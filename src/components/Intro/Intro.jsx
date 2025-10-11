import React from "react"
import classes from "./Intro.module.css"
import IntroMenu from "./IntroMenu"
import ProductCard from "../ProductCard/ProductCard"

export default function Intro(){

    return (
      <div className={classes.container}>
        <h2 className={classes.title}>Introducing Our Products</h2>
        <IntroMenu />
        <div className={classes.productsContainer}>
          <div className={classes.productsAll}>
            <ProductCard
              borderThickness={1}
              borderRadius={0} 
            />
            <ProductCard
              borderThickness={1}
              borderRadius={0} 
            />
            <ProductCard
              borderThickness={1}
              borderRadius={0} 
            />
            <ProductCard
              borderThickness={1}
              borderRadius={0} 
            />
            <ProductCard
              borderThickness={1}
              borderRadius={0} 
            />
            <ProductCard
              borderThickness={1}
              borderRadius={0} 
            />
            <ProductCard
              borderThickness={1}
              borderRadius={0} 
            />
            <ProductCard
              borderThickness={1}
              borderRadius={0} 
            />
          </div>
        </div>
      </div>
    )
}