import { Routes, Route } from "react-router"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Shop from "./pages/Shop/Shop"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}
