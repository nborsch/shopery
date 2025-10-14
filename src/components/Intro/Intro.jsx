import React from "react"
import { Link } from "react-router"
import classes from "./Intro.module.css"
import IntroMenu from "./IntroMenu"
import ProductCard from "../ProductCard/ProductCard"

export default function Intro(){

  const [on, setOn] = React.useState("All")

  const toggle = (clicked) => {
    if (clicked === "All") setOn("All")
    if (clicked === "Vegetables") setOn("Vegetables")
    if (clicked === "Fruits") setOn("Fruits")
    if (clicked === "MeatAndFish") setOn("MeatAndFish")
    console.log(clicked)
  }

    return (
      <div className={classes.container}>
        <h2 className={classes.title}>Introducing Our Products</h2>
        <IntroMenu toggle={toggle}/>
        <div className={classes.productsContainer}>
          {on === "All" ? (
            <div className={classes.productsAll}>
              <Link to="">
                <ProductCard sz={'lg'} />
              </Link>
              <Link to="">
                <ProductCard sz={'lg'} />
              </Link>
              <Link to="">
                <ProductCard sz={'lg'} />
              </Link>
              <Link to="">
                <ProductCard sz={'lg'} />
              </Link>
              <Link to="">
                <ProductCard sz={'lg'} />
              </Link>
              <Link to="">
                <ProductCard sz={'lg'} />
              </Link>
              <Link to="">
                <ProductCard sz={'lg'} />
              </Link>
              <Link to="">
                <ProductCard sz={'lg'} />
              </Link>
            </div>
          ) : null}
          {on === "Vegetables" ? (
            <div className={classes.productsVegetables}>
              <Link to=""><ProductCard sz={'lg'} /></Link>
              <Link to=""><ProductCard sz={'lg'} /></Link>
              <Link to=""><ProductCard sz={'lg'} /></Link>
              <Link to=""><ProductCard sz={'lg'} /></Link>
              <Link to=""><ProductCard sz={'lg'} /></Link>
              <Link to=""><ProductCard sz={'lg'} /></Link>
              <Link to=""><ProductCard sz={'lg'} /></Link>
              <Link to=""><ProductCard sz={'lg'} /></Link>
            </div>
          ) : null}
        </div>
      </div>
    )
}