import H2 from "../h2/H2"
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
    <article className="w-6/13 flex flex-col justify-center items-center gap-2">
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

  const menuArticle = <article></article>

  const bookingArticle = <article></article>

  switch (orientation) {
    case "left":
      return (
        <section className={`${className} flex justify-between items-center`}>
          {textArticle}
          {imageArticle}
        </section>
      )
    case "right":
      return (
        <section className={`${className} flex`}>
          {imageArticle}
          {textArticle}
        </section>
      )
    case "menu":
      return (
        <section className={`${className} flex flex-col`}>
          {textArticle} {menuArticle}
        </section>
      )
    case "booking":
      return (
        <section className={`${className} flex`}>
          {bookingArticle}
          {imageArticle}
        </section>
      )
    case "booking-confirmation":
      return (
        <section className={`${className} flex`}>
          {textArticle}
          {imageArticle}
        </section>
      )
  }
}
