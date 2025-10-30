import React from "react"
import classes from "./Shop.module.css"
import Button from "../../components/Button/Button"
import ProductCard from "../../components/ProductCard/ProductCard"
import type { Product } from "../../components/ProductCard/ProductCard"
import { LuFilter } from "react-icons/lu"
import { FaAngleUp, FaStar } from "react-icons/fa6"

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
        <div className={classes.filter}>
          <div className={classes.filterTitleContainer}>
            <h3 className={classes.filterTitle}>All Categories</h3>
            <FaAngleUp />
          </div>
          <div className={classes.category}>
            <input type="radio" name="categories" id="fruits" value="fruits" />
            <label htmlFor="fruits">
              Fruits <span className={classes.qty}>(30)</span>
            </label>
          </div>
          <div className={classes.category}>
            <input
              type="radio"
              name="categories"
              id="vegetables"
              value="vegetables"
            />
            <label htmlFor="vegetables">
              Vegetables <span className={classes.qty}>(30)</span>
            </label>
          </div>
          <div className={classes.category}>
            <input
              type="radio"
              name="categories"
              id="dairyeggs"
              value="dairyeggs"
            />
            <label htmlFor="dairyeggs">
              Dairy & Eggs <span className={classes.qty}>(30)</span>
            </label>
          </div>
          <div className={classes.category}>
            <input type="radio" name="categories" id="bakery" value="bakery" />
            <label htmlFor="bakery">
              Bakery <span className={classes.qty}>(30)</span>
            </label>
          </div>
          <div className={classes.category}>
            <input type="radio" name="categories" id="pantry" value="pantry" />
            <label htmlFor="pantry">
              Pantry <span className={classes.qty}>(30)</span>
            </label>
          </div>
          <div className={classes.category}>
            <input type="radio" name="categories" id="meat" value="meat" />
            <label htmlFor="meat">
              Meat & Seafood <span className={classes.qty}>(30)</span>
            </label>
          </div>
          <div className={classes.category}>
            <input
              type="radio"
              name="categories"
              id="beverages"
              value="beverages"
            />
            <label htmlFor="beverages">
              Beverages <span className={classes.qty}>(30)</span>
            </label>
          </div>
        </div>
        <div className={classes.filter}>
          <div className={classes.filterTitleContainer}>
            <h3 className={classes.filterTitle}>Price</h3>
            <FaAngleUp />
          </div>
          <div></div>
        </div>
        <div className={classes.filter}>
          <div className={classes.filterTitleContainer}>
            <h3 className={classes.filterTitle}>Rating</h3>
            <FaAngleUp />
          </div>
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
        </div>
        <div className={classes.filter}>
          <div className={classes.filterTitleContainer}>
            <h3 className={classes.filterTitle}>Popular Tags</h3>
            <FaAngleUp />
          </div>
          <div className={classes.tags}>
            <span>vegan</span>
            <span>organic</span>
            <span>non-gmo</span>
            <span>gluten-free</span>
            <span>local</span>
            <span>seasonal</span>
            <span>fresh</span>
          </div>
        </div>
        <img className={classes.sideBanner} src="img/shop-side-banner.png" />
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
