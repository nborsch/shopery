import React from "react"
import classes from "./Shop.module.css"
import Button from "../../components/Button/Button"
import ProductCard from "../../components/ProductCard/ProductCard"
import type { Product } from "../../components/ProductCard/ProductCard"
import useToggle from "../../hooks/useToggle"
import { LuFilter } from "react-icons/lu"
import { FaAngleUp, FaAngleDown, FaStar } from "react-icons/fa6"
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

  const [categories, toggleCategories] = useToggle()
  const [price, togglePrice] = useToggle()
  const [rating, toggleRating] = useToggle()
  const [tags, toggleTags] = useToggle()

  const category = (
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

  return (
    <main className={classes.container}>
      <aside className={classes.sidebar}>
        <Button>
          Filter <LuFilter />
        </Button>
        <div className={classes.filter}>
          <div
            onClick={toggleCategories}
            className={classes.filterTitleContainer}
          >
            <h3 className={classes.filterTitle}>All Categories</h3>
            {categories ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {categories ? (
            <>
              {category("fruits", "Fruits", 30)}
              {category("vegetables", "Vegetables", 40)}
              {category("dairyeggs", "Dairy & Eggs", 20)}
              {category("bakery", "Bakery", 25)}
              {category("pantry", "Pantry", 50)}
              {category("meatandseafood", "Meat & Seafood", 65)}
              {category("beverages", "Beverages", 45)}
            </>
          ) : null}
        </div>
        <div className={classes.filter}>
          <div onClick={togglePrice} className={classes.filterTitleContainer}>
            <h3 className={classes.filterTitle}>Price</h3>
            {price ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {price ? (
            <div>
              <RangeSlider color="#00b207" value={range} onChange={setRange} />
            </div>
          ) : null}
        </div>
        <div className={classes.filter}>
          <div onClick={toggleRating} className={classes.filterTitleContainer}>
            <h3 className={classes.filterTitle}>Rating</h3>
            {rating ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {rating ? (
            <>
              <div className={classes.rating}>
                <input type="checkbox" name="fivestars" />
                <div className={classes.stars}>
                  <FaStar className={classes.filled} />
                  <FaStar className={classes.filled} />
                  <FaStar className={classes.filled} />
                  <FaStar className={classes.filled} />
                  <FaStar className={classes.filled} />
                  <span className={classes.label}>5 stars</span>
                </div>
              </div>
              <div className={classes.rating}>
                <input type="checkbox" name="fourstars" />
                <div className={classes.stars}>
                  <FaStar className={classes.filled} />
                  <FaStar className={classes.filled} />
                  <FaStar className={classes.filled} />
                  <FaStar className={classes.filled} />
                  <FaStar className={classes.empty} />
                  <span className={classes.label}>4 stars & up</span>
                </div>
              </div>
              <div className={classes.rating}>
                <input type="checkbox" name="threestars" />
                <div className={classes.stars}>
                  <FaStar className={classes.filled} />
                  <FaStar className={classes.filled} />
                  <FaStar className={classes.filled} />
                  <FaStar className={classes.empty} />
                  <FaStar className={classes.empty} />
                  <span className={classes.label}>3 stars & up</span>
                </div>
              </div>
              <div className={classes.rating}>
                <input type="checkbox" name="twostars" />
                <div className={classes.stars}>
                  <FaStar className={classes.filled} />
                  <FaStar className={classes.filled} />
                  <FaStar className={classes.empty} />
                  <FaStar className={classes.empty} />
                  <FaStar className={classes.empty} />
                  <span className={classes.label}>2 stars & up</span>
                </div>
              </div>
              <div className={classes.rating}>
                <input type="checkbox" name="onestar" />
                <div className={classes.stars}>
                  <FaStar className={classes.filled} />
                  <FaStar className={classes.empty} />
                  <FaStar className={classes.empty} />
                  <FaStar className={classes.empty} />
                  <FaStar className={classes.empty} />
                  <span className={classes.label}>1 star & up</span>
                </div>
              </div>
            </>
          ) : null}
        </div>
        <div className={classes.filter}>
          <div onClick={toggleTags} className={classes.filterTitleContainer}>
            <h3 className={classes.filterTitle}>Popular Tags</h3>
            {tags ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {tags ? (
            <div className={classes.tags}>
              <span>vegan</span>
              <span>organic</span>
              <span>non-gmo</span>
              <span>gluten-free</span>
              <span>local</span>
              <span>seasonal</span>
              <span>fresh</span>
            </div>
          ) : null}
        </div>
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
