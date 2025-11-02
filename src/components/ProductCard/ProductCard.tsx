import React from "react"
import CartBtn from "../CartBtn/CartBtn"
import classes from "./ProductCard.module.css"
import classesMd from "./ProductCardMd.module.css"
import classesLg from "./ProductCardLg.module.css"
import classesSm from "./ProductCardSm.module.css"
import convertRating from "../../helper/convertRating"
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
  sold: number
  featured: boolean
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

  const starRating = product ? convertRating(product.rating) : null

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
