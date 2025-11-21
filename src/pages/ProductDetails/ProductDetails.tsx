import React from "react"
import classes from "./ProductDetails.module.css"
import Button from "../../components/Button/Button"
import ProductCard from "../../components/ProductCard/ProductCard"
import type { Product } from "../../components/ProductCard/ProductCard"
import convertRating from "../../helper/convertRating"
import { useParams, Link } from "react-router"
import {
  FaRegHeart,
  FaHeart,
  FaStar,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaCartPlus,
} from "react-icons/fa6"

export default function ProductDetails() {
  const [currentProduct, setCurrentProduct] = React.useState<Product[]>([])
  const [relatedProducts, setRelatedProducts] = React.useState<Product[]>([])
  const params = useParams()

  React.useEffect(() => {
    async function fetchCurrentProduct() {
      const response = await fetch(`http://localhost:3000/shop?id=${params.id}`)
      const data = await response.json()
      setCurrentProduct(data)
    }

    const randomNumber: number = Math.floor(Math.random() * (56 - 1 + 1)) + 1

    async function fetchRelatedProducts() {
      const response = await fetch(
        `http://localhost:3000/shop?_start=${randomNumber}&_limit=4`
      )
      const data = await response.json()

      setRelatedProducts(data)
    }

    fetchCurrentProduct()
    fetchRelatedProducts()
  }, [params])

  const relatedProductsEls = relatedProducts ? (
    relatedProducts.map((product) => {
      return (
        <Link to={`/shop/${product.id}`} key={product.id}>
          <ProductCard sz="md" product={product} />
        </Link>
      )
    })
  ) : (
    <>Loading...</>
  )

  const calculateFullPrice = (discount: number, price: number) => {
    const decimalDiscount = discount / 10
    const fullPrice = price / (1 - decimalDiscount)
    return Number(fullPrice.toFixed(2))
  }

  return (
    <>
      <main className={classes.container}>
        <section className={classes.details}>
          <img
            className={classes.detailsPhoto}
            src={
              currentProduct[0] ? `${currentProduct[0].imageUrl}` : undefined
            }
          />
          <div>
            <div className={classes.nameContainer}>
              <p className={classes.name}>
                {currentProduct[0] && `${currentProduct[0].name}`}
              </p>
              <div className={classes.rating}>
                <div>
                  {convertRating(currentProduct[0]?.rating) || <>Loading...</>}
                </div>
                <div>
                  <span className={classes.bold}>SKU</span>:{" "}
                  {currentProduct[0] && currentProduct[0].id}
                </div>
              </div>
              <div className={classes.pricing}>
                <span className={classes.oldPrice}>
                  {currentProduct[0] &&
                    calculateFullPrice(
                      currentProduct[0].discount,
                      currentProduct[0].price
                    )}
                </span>
                <span className={classes.newPrice}>
                  {currentProduct[0] && currentProduct[0].price}
                </span>
                <span className={classes.discount}>
                  {currentProduct[0] && currentProduct[0].discount}0% off
                </span>
              </div>
            </div>
            <div className={classes.shareContainer}>
              <div>
                <span className={classes.brand}>Brand:</span>{" "}
                <span className={classes.gray}>
                  {currentProduct[0] && currentProduct[0].brand}
                </span>
              </div>
              <div className={classes.shareIcons}>
                Share product:
                <FaFacebookF className={classes.shareIcon} />
                <FaTwitter className={classes.shareIcon} />
                <FaPinterestP className={classes.shareIcon} />
                <FaInstagram className={classes.shareIcon} />
              </div>
            </div>
            <p className={classes.description}>
              {currentProduct[0] && currentProduct[0].description}
            </p>
            <div className={classes.cartContainer}>
              <div className={classes.qty}>
                <span className={classes.qtyMinus}>-</span>5
                <span className={classes.qtyPlus}>+</span>
              </div>
              <Button type="submit" className={classes.button}>
                Add to cart
                <FaCartPlus />
              </Button>
              <FaRegHeart />
            </div>
            <p className={classes.apart}>
              <span className={classes.bold}>Category:</span>
              <span className={classes.gray}>Vegetables</span>
            </p>
            <p className={classes.apart}>
              <span className={classes.bold}>Tags:</span>
              <span className={classes.gray}>non-gmo, kosher</span>
            </p>
          </div>
        </section>
        <section className={classes.related}>
          <h2 className={classes.title}>Related Products</h2>
          {relatedProductsEls}
        </section>
      </main>
    </>
  )
}
