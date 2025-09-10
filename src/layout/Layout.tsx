import { Outlet } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { useRef } from "react"

export default function Layout() {
  const mainRef = useRef<HTMLElement | null>(null)

  const scrollToMain = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Header onScrollToMain={scrollToMain} />
      <main className="container mx-auto max-w-[1440px]" ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
