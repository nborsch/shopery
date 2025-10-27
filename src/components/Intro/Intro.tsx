import React from "react"
import classes from "./Intro.module.css"
import IntroMenu from "./IntroMenu"
import ProductCard from "../ProductCard/ProductCard"
import type { Product } from "../ProductCard/ProductCard"

export default function Intro() {
  const [on, setOn] = React.useState<string>("all")
  const [products, setProducts] = React.useState<Product[] | null>(null)

  React.useEffect(() => {
    async function getProducts() {
      const response = await fetch("http://localhost:3000/shop")
      if (!response.ok) {
        return new Error("Could not fetch data")
      }
      const data = await response.json()
      setProducts(data)
    }

    getProducts()
  }, [])

  const toggle = (clicked: string) => setOn(clicked)

  function categorizeProducts(category: string) {
    let filterTag: string

    if (!products) {
      return []
    }

    if (category === "all") filterTag = "organic"
    if (category === "vegetables") filterTag = "fresh"
    if (category === "fruits") filterTag = "local"
    if (category === "meatfish") filterTag = "non-gmo"

    const filtered = products.filter((product) => {
      return product.tags.find((tag) => tag === filterTag)
    })

    return filtered
  }

  function displayProducts(filterTag: string) {
    const categorizedProducts: Product[] = categorizeProducts(filterTag)
    const arr = categorizedProducts.slice(0, 8) // number of product to display
    const productsEls = arr.map((element, index) => {
      return (
        <ProductCard
          sz={"lg"}
          product={categorizedProducts[index]}
          key={categorizedProducts[index].id}
        />
      )
    })

    return <div className={classes.products}>{productsEls}</div>
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Introducing Our Products</h2>
      <IntroMenu status={on} toggle={toggle} />
      <div className={classes.productsContainer}>
        {products ? displayProducts(on) : null}
      </div>
    </div>
  )
}
