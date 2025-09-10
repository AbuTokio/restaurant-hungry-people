import { useEffect } from "react"
import Section from "../../components/section/Section"

export default function Home() {
  useEffect(() => {
    document.title = "Hungry People - Home"
  }, [])

  return (
    <>
      <Section
        title="About us"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna."
        description="Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet."
        imgUrl="/img/about-us.png"
        orientation="left"
      />
    </>
  )
}
