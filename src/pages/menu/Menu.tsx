import { useEffect } from "react"
import Section from "../../components/section/Section"

export default function Menu() {
  useEffect(() => {
    document.title = "Hungry People - Menu"
  }, [])

  return (
    <>
      <Section
        title="Delicious menu"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna."
        orientation="menu"
      />
    </>
  )
}
