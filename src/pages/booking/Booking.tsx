import { Navigate, useSearchParams } from "react-router"
import Section from "../../components/section/Section"
import { useEffect, useState } from "react"

export default function Booking() {
  const [forward, setForward] = useState(false)
  const [searchParams] = useSearchParams()
  const status = searchParams.get("status")

  const handleForward = () => {
    setTimeout(() => {
      setForward(true)
    }, 5000)
  }

  useEffect(() => {
    if (status === "confirmed") {
      handleForward()
    }
  }, [status])

  return (
    <>
      <Section
        title="Book a table"
        imgUrl="/img/booking.png"
        orientation={status === "confirmed" ? "booking-confirmation" : "booking"}
        subtitle={status === "confirmed" ? "Thanks for dining with us." : ""}
      />

      {forward && <Navigate to="/" />}
    </>
  )
}
