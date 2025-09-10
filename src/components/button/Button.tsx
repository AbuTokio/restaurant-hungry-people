import { useState } from "react"
import { Navigate } from "react-router"

interface ButtonProps {
  filled?: boolean
  label?: string
  icon?: string
  iconPadding?: number
  onClick?: () => void
  linkTo?: string
  className?: string
}

export default function Button({ filled, label, icon, iconPadding = 4, onClick, linkTo, className }: ButtonProps) {
  const [clicked, setClicked] = useState(false)

  return (
    <>
      <button
        className={`${className} ${filled ? "bg-accent" : "bg-transparent border border-[#FFFFFF80]"} ${
          icon ? "border-[#FFFFFF33] w-15 h-15 rounded-full" : "rounded-[5px] px-15 py-6 min-w-50"
        } font-opensans font-bold text-xs text-white leading-5 uppercase cursor-pointer overflow-hidden`}
        onClick={
          linkTo
            ? () => {
                setClicked(true)
                setTimeout(() => setClicked(false), 100)
              }
            : onClick
        }>
        {icon ? icon && <img className={`mx-auto p-${iconPadding.toString()}`} src={icon} alt={label} /> : label}
      </button>
      {linkTo && clicked && <Navigate to={linkTo} />}
    </>
  )
}
