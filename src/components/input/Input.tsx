import { MuiTelInput } from "mui-tel-input"
import { useEffect, useState, type RefObject } from "react"
import { CountryCodes } from "../../data/CountryCodes"
import { MenuItem, Select } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"
import type { Dayjs } from "dayjs"

interface InputProps {
  type?: "text" | "email" | "phone" | "people" | "date" | "time"
  placeholder?: string
  ref?: RefObject<HTMLInputElement | null>
  divRef?: RefObject<HTMLDivElement | null>
  selectPropsRef?: React.RefObject<HTMLDivElement | null> | null
}

export default function Input({ type = "text", placeholder, ref, divRef, selectPropsRef }: InputProps) {
  const [className, setClassName] = useState("")
  const [phoneValue, setPhoneValue] = useState("")
  const [peopleValue, setPeopleValue] = useState("People")
  const [peopleColor, setPeopleColor] = useState("#33333380")
  const [dateValue, setDateValue] = useState<Dayjs | null>(null)
  const [timeValue, setTimeValue] = useState<Dayjs | null>(null)

  useEffect(() => {
    setClassName(
      "w-full bg-bg-input rounded-[5px] outline-none border-none font-opensans text-sm placeholder:text-[#33333380]"
    )
  }, [])

  switch (type) {
    case "text":
      return <input ref={ref} className={`p-3.5 ${className}`} type="text" placeholder={placeholder} />
    case "email":
      return (
        <input
          ref={ref}
          className={`p-3.5 ${className}`}
          type="email"
          placeholder={placeholder ? placeholder : "Email"}
        />
      )
    case "phone":
      return (
        <MuiTelInput
          ref={divRef}
          className={className}
          onlyCountries={CountryCodes}
          defaultCountry="DE"
          value={phoneValue}
          onChange={(newValue: string) => {
            setPhoneValue(newValue)
          }}
          sx={{
            fontFamily: "OpenSans, sans-serif",
            fontSize: "14px",
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
          }}
        />
      )
    case "people":
      return (
        <>
          <Select
            ref={selectPropsRef}
            className={className}
            value={peopleValue}
            label={peopleValue}
            onChange={(event) => {
              setPeopleValue(event.target.value as string)
              setPeopleColor("#000")
            }}
            sx={{
              fontFamily: "OpenSans, sans-serif",
              fontSize: "14px",
              color: peopleColor,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
            }}>
            <MenuItem value={"People"} disabled sx={{ display: "none" }}>
              People
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </>
      )
    case "date":
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            ref={selectPropsRef}
            className={className}
            value={dateValue}
            onChange={(newValue) => {
              setDateValue(newValue)
            }}
            enableAccessibleFieldDOMStructure={false}
            slotProps={{
              field: {
                clearable: true,
              },
              textField: {
                sx: {
                  fontFamily: "OpenSans, sans-serif",
                  fontSize: "14px",
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
      )
    case "time":
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            ref={divRef}
            className={className}
            value={timeValue}
            onChange={(newValue) => {
              setTimeValue(newValue)
            }}
            enableAccessibleFieldDOMStructure={false}
            slotProps={{
              field: {
                clearable: true,
              },
              textField: {
                sx: {
                  fontFamily: "OpenSans, sans-serif",
                  fontSize: "14px",
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
      )
    default:
      return <></>
  }
}
