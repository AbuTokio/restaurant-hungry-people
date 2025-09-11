import BookingForm from "../booking-form/BookingForm"
import H2 from "../h2/H2"
import MenuContainer from "../menu-container/MenuContainer"
import MenuTitle from "../menu-title/MenuTitle"
import SectionImage from "../section-image/SectionImage"

interface SectionProps {
  title: string
  subtitle?: string
  description?: string
  imgUrl?: string
  orientation: "left" | "right" | "menu" | "booking" | "booking-confirmation"
  className?: string
}

export default function Section({ title, subtitle, description, imgUrl, orientation, className }: SectionProps) {
  const textArticle = (
    <article
      className={`flex flex-col justify-center items-center gap-2 ${
        (orientation === "left" || orientation === "right") && "md:w-6/13 w-3/4"
      } ${orientation === "menu" && "2xl:w-7/16 md:w-2/3 w-3/4"} ${
        orientation === "booking-confirmation" && "flex-1"
      }`}>
      <H2 label={title} />
      {subtitle && <p className="font-opensans font-bold text-lg leading-7 text-center">{subtitle}</p>}
      {description && <p className="font-opensans text-sm leading-6 text-center">{description}</p>}
    </article>
  )

  const imageArticle = imgUrl && (
    <article className="flex-1">
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

  const bookingArticle = (
    <article className={`flex flex-col justify-center items-center gap-5 flex-1`}>
      <H2 label={title} />
      {subtitle && <p className="font-opensans font-bold text-lg leading-7 text-center">{subtitle}</p>}
      {description && <p className="font-opensans text-sm leading-6 text-center">{description}</p>}
      <BookingForm />
    </article>
  )

  switch (orientation) {
    case "left":
      return (
        <section
          className={`${className} mx-auto 2xl:px-20 2xl:pl-40 md:pl-15 py-25 md:px-5 flex flex-col md:flex-row justify-between items-center`}>
          {textArticle}
          {imageArticle}
        </section>
      )
    case "right":
      return (
        <section
          className={`${className} mx-auto 2xl:px-20 md:px-20 py-25 flex flex-col md:flex-row justify-between items-center`}>
          {imageArticle}
          {textArticle}
        </section>
      )
    case "menu":
      return (
        <section className={`${className} 2xl:px-20 py-25 flex flex-col justify-center items-center gap-12.5`}>
          {textArticle}
          {menuArticle}
        </section>
      )
    case "booking":
      return (
        <section
          className={`${className} px-8 2xl:px-20 2xl:pl-45 py-25 flex flex-col 2xl:flex-row justify-between gap-10 2xl:gap-0 items-center`}>
          {bookingArticle}
          {imageArticle}
        </section>
      )
    case "booking-confirmation":
      return (
        <section
          className={`${className} px-10 2xl:px-20 py-25 flex flex-col 2xl:flex-row gap-10 2xl:gap-0 justify-between items-center`}>
          {textArticle}
          {imageArticle}
        </section>
      )
  }
}
