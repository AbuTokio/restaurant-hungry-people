import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
