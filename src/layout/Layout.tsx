import { Outlet } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

export default function Layout() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-[1440px] px-20 py-25">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
