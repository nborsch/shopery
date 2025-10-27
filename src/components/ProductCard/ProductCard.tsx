import React from "react"
import classes from "./ProductCard.module.css"
import classesMd from "./ProductCardMd.module.css"
import classesLg from "./ProductCardLg.module.css"
import classesSm from "./ProductCardSm.module.css"
import CartBtn from "../CartBtn/CartBtn"
import { FaStar } from "react-icons/fa6"

export type Product = {
  id: number
  name: string
  brand: string
  description: string
  imageUrl: string
  quantity: number
  price: number
  category: string
  tags: string[]
  rating: number
  dateCreated: string
  lastUpdated: string
}

export default function ProductCard({
  sz = "md",
  product,
}: {
  sz: string
  product: Product
}) {
  const sizeClass =
    sz === "lg" ? classesLg : sz === "md" ? classesMd : classesSm

  function convertRating() {
    const ratingArr = Array(5).fill(<></>)
    const starsArr = ratingArr.map((item, index) => {
      if (index < product.rating) {
        return <FaStar className={classes.filled} />
      } else if (index >= product.rating) {
        return <FaStar className={classes.empty} />
      }
    })

    return starsArr
  }

  const starRating = product ? convertRating() : null

  return (
    <div className={`${sizeClass.container} ${classes.container}`}>
      <img
        className={`${sizeClass.img} ${classes.img}`}
        src={product?.imageUrl || ""}
      />
      <div className={classes.text}>
        <div className={classes.info}>
          <span className={`${sizeClass.name} ${classes.name}`}>
            {product?.name || <>Loading</>}
          </span>
          <span className={classes.price}>
            ${product?.price || <>Loading</>}
          </span>
          <div>{starRating || null}</div>
        </div>
        <CartBtn />
      </div>
    </div>
  )
}
