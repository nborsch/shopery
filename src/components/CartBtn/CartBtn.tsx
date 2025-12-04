import React from "react"
import classes from "./CartBtn.module.css"
import { CartContext } from "../../App"

export default function CartBtn({ prodId }: { prodId: number }) {
  const { cart, setCart } = React.useContext(CartContext)

  const addToCart = () => {
    const tempCart = [...cart]
    const index = tempCart.findIndex((product) => product.id === prodId)
    const cartProduct = {
      id: prodId,
      qty: 1,
    }
    if (index === -1) {
      setCart([...tempCart, cartProduct])
    } else {
      tempCart[index].qty++
    }
  }

  return <div className={classes.bag} onClick={addToCart}></div>
}
