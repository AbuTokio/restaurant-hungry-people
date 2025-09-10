import H2 from "../h2/H2"
import MenuContainer from "../menu-container/MenuContainer"
import MenuTitle from "../menu-title/MenuTitle"
import SectionImage from "../section-image/SectionImage"

interface SectionProps {
  title: string
  subtitle: string
  description?: string
  imgUrl?: string
  orientation: "left" | "right" | "menu" | "booking" | "booking-confirmation"
  className?: string
}

export default function Section({ title, subtitle, description, imgUrl, orientation, className }: SectionProps) {
  const textArticle = (
    <article
      className={`flex flex-col justify-center items-center gap-2 ${
        (orientation === "left" || orientation === "right") && "w-6/13"
      } ${orientation === "menu" && "w-7/16"}`}>
      <H2 label={title} />
      <p className="font-opensans font-bold text-lg leading-7 text-center">{subtitle}</p>
      {description && <p className="font-opensans text-sm leading-6 text-center">{description}</p>}
    </article>
  )

  const imageArticle = imgUrl && (
    <article className="w-1/2">
      <SectionImage
        src={imgUrl}
        orientation={orientation === "left" || orientation.includes("booking") ? "right" : "left"}
      />
    </article>
  )

  const menuArticle = (
    <article className="w-full flex flex-col justify-center items-center gap-12.5">
      <MenuTitle />
      <MenuContainer />
    </article>
  )

  const bookingArticle = <article></article>

  switch (orientation) {
    case "left":
      return (
        <section className={`${className} px-20 py-25 flex justify-between items-center`}>
          {textArticle}
          {imageArticle}
        </section>
      )
    case "right":
      return (
        <section className={`${className} px-20 py-25 flex`}>
          {imageArticle}
          {textArticle}
        </section>
      )
    case "menu":
      return (
        <section className={`${className} px-20 py-25 flex flex-col justify-center items-center gap-12.5`}>
          {textArticle}
          {menuArticle}
        </section>
      )
    case "booking":
      return (
        <section className={`${className} px-20 py-25 flex`}>
          {bookingArticle}
          {imageArticle}
        </section>
      )
    case "booking-confirmation":
      return (
        <section className={`${className} px-20 py-25 flex`}>
          {textArticle}
          {imageArticle}
        </section>
      )
  }
}
