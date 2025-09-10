import { Outlet } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { useRef } from "react"
import { ScrollContext } from "../contexts/ScrollContext"

export default function Layout() {
  const mainRef = useRef<HTMLElement | null>(null)

  const scrollToMain = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <ScrollContext.Provider value={{ scrollToMain }}>
      <Header onScrollToMain={scrollToMain} />
      <main ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
    </ScrollContext.Provider>
  )
}
