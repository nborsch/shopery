import React from "react"
import classes from "./Shop.module.css"
import Button from "../../components/Button/Button"
import ProductCard from "../../components/ProductCard/ProductCard"
import type { Product } from "../../components/ProductCard/ProductCard"
import { LuFilter } from "react-icons/lu"

export default function Shop() {
  const [allProducts, setAllProducts] = React.useState<Product[] | null>(null)

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

  const productsEls = allProducts
    ? allProducts.map((product) => <ProductCard sz="lg" product={product} />)
    : null

  return (
    <main className={classes.container}>
      <aside className={classes.sidebar}>
        <Button>
          Filter <LuFilter />
        </Button>
        <div className={classes.categories}>
          <h3>All Categories</h3>
          <div className={classes.category}>
            <input type="radio" name="categories" id="fruits" value="fruits" />
            <label htmlFor="fruits">Fruits</label>
          </div>
          <div className={classes.category}>
            <input
              type="radio"
              name="categories"
              id="vegetables"
              value="vegetables"
            />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div className={classes.category}>
            <input
              type="radio"
              name="categories"
              id="dairyeggs"
              value="dairyeggs"
            />
          </div>
          <label htmlFor="dairyeggs">Dairy & Eggs</label>
          <div className={classes.category}>
            <input type="radio" name="categories" id="bakery" value="bakery" />
            <label htmlFor="bakery">Bakery</label>
          </div>
          <div className={classes.category}>
            <input type="radio" name="categories" id="pantry" value="pantry" />
            <label htmlFor="pantry">Pantry</label>
          </div>
          <div className={classes.category}>
            <input type="radio" name="categories" id="meat" value="meat" />
            <label htmlFor="meat">Meat & Seafood</label>
          </div>
          <div className={classes.category}>
            <input
              type="radio"
              name="categories"
              id="beverages"
              value="beverages"
            />
            <label htmlFor="beverages">Beverages</label>
          </div>
        </div>
      </aside>
      <section className={classes.shop}>
        <div className={classes.sort}>
          <span>Sort by:</span>
          <form>
            <select className={classes.sortBy}>
              <option>Best-sellers</option>
              <option>Featured</option>
              <option>Price: low to high</option>
              <option>Price: high to low</option>
            </select>
          </form>
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
