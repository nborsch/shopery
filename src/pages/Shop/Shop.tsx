import React from "react"
import classes from "./Shop.module.css"
import Button from "../../components/Button/Button"
import ProductCard from "../../components/ProductCard/ProductCard"
import type { Product } from "../../components/ProductCard/ProductCard"
import Filter from "../../components/Filter/Filter"
import convertRating from "../../helper/convertRating"
import { LuFilter } from "react-icons/lu"
import { RangeSlider } from "@mantine/core"

export default function Shop() {
  const [allProducts, setAllProducts] = React.useState<Product[] | null>(null)
  const [range, setRange] = React.useState<[number, number]>([20, 80])

  React.useEffect(() => {
    async function getAllProducts() {
      const response = await fetch("http://localhost:3000/shop")
      if (!response.ok) throw new Error("Server issues")
      const data = await response.json()
      const products = data.slice(0, 15)
      setAllProducts(products)
    }

    getAllProducts()
  }, [])

  function sortHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    const sortingFilter = e.target.value

    setAllProducts((prevAllProducts) => {
      const products = prevAllProducts && [...prevAllProducts]

      if (sortingFilter === "bestsellers") {
        products && products.sort((a, b) => b.sold - a.sold)
        return products
      } else if (sortingFilter === "featured") {
        return products && products.filter((product) => product.featured)
      } else if (sortingFilter === "lowtohigh") {
        products && products.sort((a, b) => a.price - b.price)
        return products
      } else if (sortingFilter === "hightolow") {
        products && products.sort((a, b) => b.price - a.price)
        return products
      } else {
        return prevAllProducts
      }
    })
  }

  const productsEls = allProducts
    ? allProducts.map((product) => (
        <ProductCard sz="lg" product={product} key={product.id} />
      ))
    : null

  const displayCategory = (
    value: string = "",
    label: string = "",
    results: number
  ) => (
    <div className={classes.category}>
      <input type="radio" name="categories" id={value} value={value} />
      <label htmlFor={value}>
        {label} <span className={classes.results}>({results})</span>
      </label>
    </div>
  )

  const displayRating = (name: string, label: string, stars: number) => {
    const starsEls = convertRating(stars)

    return (
      <div className={classes.rating}>
        <input type="checkbox" name={name} />
        <div className={classes.stars}>
          {starsEls}
          <span className={classes.label}>{label}</span>
        </div>
      </div>
    )
  }

  const displayTags = (tagsArr: string[]) => {
    const tagsEls = tagsArr.map((tag) => {
      return <span>{tag}</span>
    })

    return <div className={classes.tags}>{tagsEls}</div>
  }

  return (
    <main className={classes.container}>
      <aside className={classes.sidebar}>
        <form>
          <Button type="submit">
            Filter <LuFilter />
          </Button>
          <Filter label="Categories">
            <>
              {displayCategory("allcategories", "All categories", 230)}
              {displayCategory("fruits", "Fruits", 30)}
              {displayCategory("vegetables", "Vegetables", 40)}
              {displayCategory("dairyeggs", "Dairy & Eggs", 20)}
              {displayCategory("bakery", "Bakery", 25)}
              {displayCategory("pantry", "Pantry", 50)}
              {displayCategory("meatandseafood", "Meat & Seafood", 65)}
              {displayCategory("beverages", "Beverages", 45)}
            </>
          </Filter>
          <Filter label="Price">
            <div>
              <RangeSlider color="#00b207" value={range} onChange={setRange} />
            </div>
          </Filter>
          <Filter label="Rating">
            <>
              {displayRating("fivestars", "5 stars", 5)}
              {displayRating("fourstars", "4 stars & up", 4)}
              {displayRating("threestars", "3 stars & up", 3)}
              {displayRating("twostars", "2 stars & up", 2)}
              {displayRating("onestar", "1 star & up", 1)}
            </>
          </Filter>
          <Filter label="Popular Tags">
            {displayTags([
              "vegan",
              "organic",
              "non-gmo",
              "gluten-free",
              "local",
              "seasonal",
              "fresh",
            ])}
          </Filter>
        </form>
        <img className={classes.sideBanner} src="img/shop-side-banner.png" />
      </aside>
      <section className={classes.shop}>
        <div className={classes.sort}>
          <span>Sort by:</span>
          <select
            name="sortBy"
            onChange={sortHandler}
            className={classes.sortBy}
          >
            <option value="bestsellers">Best-sellers</option>
            <option value="featured">Featured</option>
            <option value="lowtohigh">Price: low to high</option>
            <option value="hightolow">Price: high to low</option>
          </select>
        </div>
        <div className={classes.products}>
          {allProducts ? productsEls : <p>Loading...</p>}
        </div>
        <nav className={classes.pagination}>
          <ul className={classes.list}>
            <li className={classes.listItem}>{"<"}</li>
            <li className={classes.listItem}>1</li>
            <li className={classes.listItem}>2</li>
            <li className={classes.listItem}>3</li>
            <li className={classes.listItem}>4</li>
            <li className={classes.listItem}>5</li>
            <li className={classes.listItem}>...</li>
            <li className={classes.listItem}>21</li>
            <li className={classes.listItem}>{">"}</li>
          </ul>
        </nav>
      </section>
    </main>
  )
}
