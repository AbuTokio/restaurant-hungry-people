import type React from "react"
import Button from "../button/Button"
import Input from "../input/Input"
import { useRef, useState, useEffect } from "react"
import { Alert } from "@mui/material"

export default function BookingForm() {
  const ref = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLDivElement>(null),
    people: useRef<HTMLDivElement | null>(null),
    date: useRef<HTMLDivElement | null>(null),
    time: useRef<HTMLDivElement>(null),
    alert: useRef<HTMLDivElement>(null),
  }

  const [allFilled, setAllFilled] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const checkAllFilled = () => {
    const name = ref.name.current?.value?.trim() || ""
    const email = ref.email.current?.value?.trim() || ""
    const phone = ref.phone.current?.querySelector("input")?.value?.trim() || ""
    const people = ref.people.current?.querySelector("input")?.value?.trim() || ""
    const date = ref.date.current?.querySelector("input")?.value?.trim() || ""
    const time = ref.time.current?.querySelector("input")?.value?.trim() || ""

    setAllFilled(!!name && !!email && email.includes("@") && !!phone && !!people && !!date && !!time)
  }

  useEffect(() => {
    const elements = [
      ref.name.current,
      ref.email.current,
      ref.phone.current?.querySelector("input"),
      ref.people.current?.querySelector("input"),
      ref.date.current?.querySelector("input"),
      ref.time.current?.querySelector("input"),
    ].filter(Boolean) as HTMLInputElement[]

    elements.forEach((el) => el.addEventListener("input", checkAllFilled))

    return () => {
      elements.forEach((el) => el.removeEventListener("input", checkAllFilled))
    }
  })

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [showAlert])

  return (
    <form className="grid grid-cols-2 gap-2.5 w-full" onSubmit={(e: React.FormEvent) => e.preventDefault()}>
      <Input ref={ref.name} placeholder="Name" />
      <Input ref={ref.email} type="email" />
      <Input divRef={ref.phone} type="phone" />
      <Input selectPropsRef={ref.people} type="people" />
      <Input selectPropsRef={ref.date} type="date" />
      <Input divRef={ref.time} type="time" />

      {allFilled ? (
        <Button className="col-span-2" filled label="Book now" linkTo="?status=confirmed" />
      ) : (
        <Button
          className="col-span-2"
          filled
          label="Book now"
          onClick={() => {
            setShowAlert(true)
          }}
        />
      )}

      {showAlert && (
        <Alert
          ref={ref.alert}
          className="fixed z-999 bottom-30 left-1/2 -translate-x-1/2 transition-all duration-300 w-[203px] md:w-fit text-center"
          severity="error">
          Please fill in all fields!
        </Alert>
      )}
    </form>
  )
}
