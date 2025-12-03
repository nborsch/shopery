import React from "react"
import { Routes, Route } from "react-router"
import "@mantine/core/styles.css"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Shop from "./pages/Shop/Shop"
import Shop2 from "./pages/Shop2/Shop2"
import ProductDetails from "./pages/ProductDetails/ProductDetails"

type Cart = {
  cart: CartProduct[]
  setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>
}

export type CartProduct = {
  id: number
  qty: number
}

export const CartContext = React.createContext<Cart>({} as Cart)

export default function App() {
  const [cart, setCart] = React.useState<CartProduct[]>([])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop2" element={<Shop2 />} />
          <Route path="shop/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </CartContext.Provider>
  )
}
