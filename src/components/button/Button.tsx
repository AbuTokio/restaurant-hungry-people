import { useState } from "react"
import { Navigate } from "react-router"
import { useScroll } from "../../contexts/ScrollContext"

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
  const { scrollToMain } = useScroll()

  return (
    <>
      <button
        className={`${className} ${
          filled
            ? "bg-accent active:bg-accent-darker"
            : "bg-transparent border border-[#FFFFFF80] active:bg-[#FFFFFF80]"
        } ${
          icon ? "border-[#FFFFFF33] w-15 h-15 rounded-full" : "rounded-[5px] px-15 py-6 min-w-50"
        } font-opensans font-bold text-xs text-white leading-5 uppercase cursor-pointer overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out`}
        onClick={
          linkTo
            ? () => {
                setClicked(true)
                setTimeout(() => setClicked(false), 100)
                {
                  if (!linkTo.startsWith("http")) scrollToMain()
                  else window.open(linkTo, "_blank")
                }
              }
            : onClick
        }>
        {icon ? icon && <img className={`mx-auto p-${iconPadding.toString()}`} src={icon} alt={label} /> : label}
      </button>
      {linkTo && !linkTo.startsWith("http") && clicked && <Navigate to={linkTo} />}
    </>
  )
}
