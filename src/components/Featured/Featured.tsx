import React from "react"
import classes from "./Featured.module.css"
import ProductCard from "../ProductCard/ProductCard"
import type { Product } from "../ProductCard/ProductCard"

export default function Featured() {
  const [featured, setFeatured] = React.useState<Product[] | null>(null)

  React.useEffect(() => {
    async function getProducts() {
      const response = await fetch("http://localhost:3000/shop")
      if (!response.ok) {
        return new Error("Could not fetch data")
      }
      const data = await response.json()
      const filtered = filterProducts(data)
      setFeatured(filtered)
    }

    getProducts()
  }, [])

  function filterProducts(data: Product[]) {
    return data.filter((item, index) => {
      return index < 5 ? true : false
    })
  }

  const featuredEls = featured
    ? featured.map((product) => {
        return <ProductCard sz="sm" product={product} key={product.id} />
      })
    : null

  return (
    <div className={classes.bg}>
      <div className={classes.container}>
        <h2 className={classes.title}>Featured Products</h2>
        <div className={classes.productsContainer}>
          {featuredEls || <p>Loading...</p>}
        </div>
      </div>
    </div>
  )
}
