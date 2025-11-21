import { Routes, Route } from "react-router"
import "@mantine/core/styles.css"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Shop from "./pages/Shop/Shop"
import Shop2 from "./pages/Shop2/Shop2"
import ProductDetails from "./pages/ProductDetails/ProductDetails"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop2" element={<Shop2 />} />
        <Route path="shop/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  )
}
