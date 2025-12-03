import React from "react"
import classes from "./ProductDetails.module.css"
import Button from "../../components/Button/Button"
import ProductCard from "../../components/ProductCard/ProductCard"
import type { Product } from "../../components/ProductCard/ProductCard"
import { CartContext } from "../../App"
import type { CartProduct } from "../../App"
import useToggle from "../../hooks/useToggle"
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
  const [qtyCart, setQtyCart] = React.useState<number>(0)
  const params = useParams()
  const [on, toggle] = useToggle()
  const { cart, setCart } = React.useContext(CartContext)

  React.useEffect(() => {
    const randomNumber: number = Math.floor(Math.random() * (56 - 1 + 1)) + 1 // 56 products starting at 1
    const currentProductUrl = `http://localhost:3000/shop?id=${params.id}`
    const relatedProductsUrl = `http://localhost:3000/shop?_start=${randomNumber}&_limit=4`

    async function fetchData(
      url: string,
      setter: React.Dispatch<React.SetStateAction<Product[]>>
    ) {
      const response = await fetch(url)
      const data = await response.json()
      setter(data)
    }

    fetchData(currentProductUrl, setCurrentProduct)
    fetchData(relatedProductsUrl, setRelatedProducts)
    setQtyCart(0)
    window.scrollTo(0, 0)
  }, [params])

  const relatedProductsEls = relatedProducts.map((product) => {
    return (
      <Link to={`/shop/${product.id}`} key={product.id}>
        <ProductCard sz="md" product={product} />
      </Link>
    )
  })

  const calculateFullPrice = (discount: number, price: number) => {
    const decimalDiscount = discount / 10
    const fullPrice = price / (1 - decimalDiscount)
    return Number(fullPrice.toFixed(2))
  }

  const productCartIndex = () => {
    const result = cart.findIndex((product: CartProduct) => {
      return product.id === currentProduct[0].id // find if current product is in cart
    })

    return result
  }

  const minusCart = () => {
    const index = productCartIndex()
    if (index === -1) return // did not find item in cart

    setCart((prevCart: CartProduct[]) => {
      const bufferCart = [...prevCart]
      const prevProduct = bufferCart[index]
      bufferCart.splice(index, 1) // remove product from buffer cart
      if (prevProduct.qty === 1) {
        // if previous qty is 1, return cart without it
        return bufferCart
      } else {
        prevProduct.qty = prevProduct.qty - 1 //change quantity
        return [...bufferCart, prevProduct] //return cart with updated product quantity
      }
    })
  }

  const plusCart = () => {
    const index = productCartIndex()
    // if product isn't in cart
    if (index === -1) {
      // create the new product for cart
      const newProduct = {
        id: currentProduct[0].id,
        qty: 1,
      }
      // add product to cart
      setCart((prevCart: CartProduct[]) => [...prevCart, newProduct])
      return
    }
    // product exists in cart
    setCart((prevCart: CartProduct[]) => {
      const bufferCart = [...prevCart]
      const prevProduct = bufferCart[index]
      bufferCart.splice(index, 1) // remove product from buffer cart
      prevProduct.qty = prevProduct.qty + 1 // change quantity
      return [...bufferCart, prevProduct] //return cart with updated product quantity
    })
  }

  const productQtyCart = () => {
    const index = productCartIndex()
    return index === -1 ? 0 : cart[index].qty
  }

  return (
    <>
      <main className={classes.container}>
        <section className={classes.details}>
          {currentProduct[0] ? (
            <img
              className={classes.detailsPhoto}
              src={`${currentProduct[0].imageUrl}`}
            />
          ) : (
            <>Loading</>
          )}
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
                <button className={classes.qtyMinus} onClick={minusCart}>
                  -
                </button>
                <span>{productQtyCart()}</span>
                <button className={classes.qtyPlus} onClick={plusCart}>
                  +
                </button>
              </div>
              <Button type="submit" className={classes.button}>
                Add to cart
                <FaCartPlus />
              </Button>
              {on ? (
                <FaRegHeart onClick={toggle} />
              ) : (
                <FaHeart onClick={toggle} className={classes.heart} />
              )}
            </div>
            <p className={classes.apart}>
              <span className={classes.bold}>Category:</span>
              <span className={classes.gray}>
                {currentProduct[0] && currentProduct[0].category}
              </span>
            </p>
            <p className={classes.apart}>
              <span className={classes.bold}>Tags:</span>
              <span className={classes.gray}>
                {currentProduct[0] && currentProduct[0].tags.join(", ")}
              </span>
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
