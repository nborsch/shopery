import React from "react"
import { Link } from "react-router"
import classes from "./Intro.module.css"
import IntroMenu from "./IntroMenu"
import ProductCard from "../ProductCard/ProductCard"

export default function Intro(){

  const [on, setOn] = React.useState("all")

  const toggle = (clicked : string) => setOn(clicked)

    return (
      <div className={classes.container}>
        <h2 className={classes.title}>Introducing Our Products</h2>
        <IntroMenu status={on} toggle={toggle} />
        <div className={classes.productsContainer}>
          {on === "all" ? (
            <div className={classes.products}>
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
          {on === "vegetables" ? (
            <div className={classes.products}>
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