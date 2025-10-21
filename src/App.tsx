import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Layout from './components/Layout'

export default function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
