import { useState } from "react"
import { Navigate } from "react-router"
import { useScroll } from "../../contexts/ScrollContext"

interface ButtonProps {
  filled?: boolean
  label?: string
  icon?: string
  iconSize?: number
  onClick?: () => void
  linkTo?: string
  className?: string
}

export default function Button({ filled, label, icon, iconSize = 5, onClick, linkTo, className }: ButtonProps) {
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
          icon
            ? "border-[#FFFFFF33] md:w-15 md:h-15 w-10 h-10 rounded-full"
            : "rounded-[5px] md:px-15 px-8 md:py-6 py-4 md:min-w-50"
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
        {icon
          ? icon && (
              <img
                className={`mx-auto w-${iconSize} h-${iconSize} md:w-${iconSize + 5} md:h-${iconSize + 5} md:px-1`}
                src={icon}
                alt={label}
              />
            )
          : label}
      </button>
      {linkTo && !linkTo.startsWith("http") && clicked && <Navigate to={linkTo} />}
    </>
  )
}
