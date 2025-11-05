import React from "react"
import classes from "./Shop.module.css"
import Button from "../../components/Button/Button"
import ProductCard from "../../components/ProductCard/ProductCard"
import type { Product } from "../../components/ProductCard/ProductCard"
import Filter from "../../components/Filter/Filter"
import useToggle from "../../hooks/useToggle"
import convertRating from "../../helper/convertRating"
import { LuFilter } from "react-icons/lu"
import { RangeSlider } from "@mantine/core"

type FetchedData = {
  items: number
  pages: number
  current: number
  previous: number
  next: number
}

export default function Shop() {
  const [page, setPage] = React.useState<number>(1)
  const [pageData, setPageData] = React.useState<FetchedData | null>(null)
  const [allProducts, setAllProducts] = React.useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([])
  const [range, setRange] = React.useState<[number, number]>([0, 100])
  const [tags, setTags] = React.useState<string[]>([])

  const handlePageData = (
    dataItems: number,
    dataPages: number,
    dataPrevious: number | null,
    dataNext: number | null
  ) => {
    let previous: number
    let next: number
    dataPrevious === null ? (previous = 0) : (previous = dataPrevious)
    dataNext === null ? (next = 0) : (next = dataNext)
    const current = next === 0 ? dataPages : next - 1
    console.log(current)
    setPageData({
      items: dataItems,
      pages: dataPages,
      current,
      previous,
      next,
    })
  }

  React.useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await fetch(
          `http://localhost:3000/shop?_page=${page}&_per_page=12`
        )
        if (!response.ok) throw new Error("Server issues")
        const data = await response.json()
        const products = data.data
        handlePageData(data.items, data.last, data.prev, data.next)
        setAllProducts(products)
        setFilteredProducts(products)
      } catch (err) {
        console.log(err)
      }
    }

    getAllProducts()
  }, [page])

  function sortHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    const sortingFilter = e.target.value

    setFilteredProducts((prevAllProducts) => {
      const products = prevAllProducts && [...prevAllProducts]

      if (sortingFilter === "bestsellers") {
        products.sort((a, b) => b.sold - a.sold)
        return products
      } else if (sortingFilter === "featured") {
        return products.filter((product) => product.featured)
      } else if (sortingFilter === "lowtohigh") {
        products.sort((a, b) => a.price - b.price)
        return products
      } else if (sortingFilter === "hightolow") {
        products.sort((a, b) => b.price - a.price)
        return products
      } else {
        return prevAllProducts
      }
    })
  }

  const applyFilters = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    if (!allProducts) return

    const category = formData.get("categories") as string
    const [priceMin, priceMax] = range
    const rating = formData.getAll("rating")

    const categoryFilter = allProducts.filter((product) => {
      if (category === "All categories") return true
      if (!category) return true
      return product.category === category
    })

    const priceFilter = categoryFilter.filter((product) => {
      return priceMin < product.price && product.price < priceMax
    })

    if (priceFilter.length === 0) priceFilter === categoryFilter

    let ratingFilter = priceFilter.filter((product) => {
      if (rating.length === 0) return true
      return rating.includes(`${product.rating}`)
    })

    if (!tags) {
      setFilteredProducts(ratingFilter)
      return
    }

    tags.forEach((selectedTag) => {
      ratingFilter = ratingFilter.filter((product) =>
        product.tags.find((prodTag) => prodTag === selectedTag)
      )
    })

    setFilteredProducts(ratingFilter)
  }

  const productsEls = filteredProducts ? (
    filteredProducts.map((product) => (
      <ProductCard sz="lg" product={product} key={product.id} />
    ))
  ) : (
    <p>Loading...</p>
  )

  const displayCategory = (
    value: string = "",
    label: string = "",
    results: number
  ) => (
    <div className={classes.category}>
      <input type="radio" name="categories" id={value} value={label} />
      <label htmlFor={value}>
        {label} <span className={classes.results}>({results})</span>
      </label>
    </div>
  )

  const displayRating = (label: string, stars: number) => {
    const starsEls = convertRating(stars)

    return (
      <div className={classes.rating}>
        <input type="checkbox" name="rating" value={stars} />
        <div className={classes.stars}>
          {starsEls}
          <span className={classes.label}>{label}</span>
        </div>
      </div>
    )
  }

  const selectTag = (tag: string) => {
    setTags((prevTags) => {
      const previousTags = [...prevTags]
      const found = previousTags.find((prevTag) => prevTag === tag)

      if (found) {
        const index = previousTags.indexOf(tag)
        previousTags.splice(index, 1)
      } else if (!found) {
        previousTags.push(tag)
      }

      return previousTags
    })
  }

  const tagsHandler = (selectedTag: string, toggle: () => void) => {
    toggle()
    selectTag(selectedTag)
  }

  const displayTags = (tagsArr: string[]) => {
    const tagsEls = tagsArr.map((tag, index) => {
      const [selected, toggle] = useToggle()

      return (
        <span
          onClick={() => tagsHandler(tag, toggle)}
          key={index}
          className={selected ? classes.tag : classes.selectedTag}
        >
          {tag}
        </span>
      )
    })

    return <div className={classes.tags}>{tagsEls}</div>
  }

  const displayPagination = () => {
    if (!pageData) return <p>Loading...</p>
    const numberOfPages = pageData.pages
    const pageEls: React.JSX.Element[] = []

    // for each link to page
    for (let i = 1; i <= numberOfPages; i++) {
      // if we are on the first link
      if (i === 1) {
        // if we are on the first link && it's page 1
        if (page === 1) {
          pageEls.push(<li className={classes.listItem}>{"<"}</li>)
          pageEls.push(<li className={classes.listItem}>1</li>)

          // if we are on the first link && it's NOT page 1
        } else {
          pageEls.push(
            <li
              onClick={() => setPage(pageData.previous)}
              className={classes.listItem}
            >
              {"<"}
            </li>
          )
          pageEls.push(
            <li onClick={() => setPage(1)} className={classes.listItem}>
              1
            </li>
          )
        }
        // if we're on the last link
      } else if (i === numberOfPages) {
        // if we are on the last link && it's the last page
        if (pageData.current === numberOfPages) {
          pageEls.push(<li className={classes.listItem}>{numberOfPages}</li>)
          pageEls.push(<li className={classes.listItem}>{">"}</li>)

          // if we are on the last link && it's NOT the last page
        } else {
          pageEls.push(
            <li
              onClick={() => setPage(numberOfPages)}
              className={classes.listItem}
            >
              {numberOfPages}
            </li>
          )
          pageEls.push(
            <li
              onClick={() => setPage(pageData.next)}
              className={classes.listItem}
            >
              {">"}
            </li>
          )
        }
        // if we are on any other link
      } else if (i != 1 && i != numberOfPages) {
        // if the current link is the current page
        if (i === page) {
          pageEls.push(<li className={classes.listItem}>{i}</li>)
          // if the current link is not the current page
        } else {
          pageEls.push(
            <li onClick={() => setPage(i)} className={classes.listItem}>
              {i}
            </li>
          )
        }
      }
    }

    return pageEls
  }

  return (
    <main className={classes.container}>
      <aside className={classes.sidebar}>
        <form onSubmit={applyFilters}>
          <Button type="submit">
            Filter <LuFilter />
          </Button>
          <Filter label="Categories">
            {displayCategory("allcategories", "All categories", 230)}
            {displayCategory("fruits", "Fruits", 30)}
            {displayCategory("vegetables", "Vegetables", 40)}
            {displayCategory("dairyeggs", "Dairy & Eggs", 20)}
            {displayCategory("bakery", "Bakery", 25)}
            {displayCategory("pantry", "Pantry", 50)}
            {displayCategory("meatandseafood", "Meat & Seafood", 65)}
            {displayCategory("beverages", "Beverages", 45)}
          </Filter>
          <Filter label="Price">
            <RangeSlider color="#00b207" value={range} onChange={setRange} />
          </Filter>
          <Filter label="Rating">
            {displayRating("5 stars", 5)}
            {displayRating("4 stars", 4)}
            {displayRating("3 stars", 3)}
            {displayRating("2 stars", 2)}
            {displayRating("1 star", 1)}
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
          {filteredProducts ? productsEls : <p>Loading...</p>}
        </div>
        <nav className={classes.pagination}>
          <ul className={classes.list}>
            {displayPagination()}
          </ul>
        </nav>
      </section>
    </main>
  )
}
