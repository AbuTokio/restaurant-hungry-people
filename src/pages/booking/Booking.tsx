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

  useEffect(() => {
    if (!status) document.title = "Hungry People - Booking"
    else document.title = `Hungry People - Booking ${status.charAt(0).toUpperCase() + status.slice(1)}`
  })

  return (
    <>
      <Section
        title="Book a table"
        imgUrl="/img/booking.png"
        orientation={status === "confirmed" ? "booking-confirmation" : "booking"}
        subtitle={status === "confirmed" ? "Thanks for dining with us." : ""}
      />
      <p className="text-center mb-30 font-opensans text-xs text-[#33333380]">
        Mon - Fri: <span className="font-bold">8PM - 10PM</span>, Sat - Sun:{" "}
        <span className="font-bold">8PM - 3AM</span>, Phone:{" "}
        <span className="font-bold">+40 729 131 637/+40 726 458 782</span>
      </p>

      {forward && <Navigate to="/" />}
    </>
  )
}
