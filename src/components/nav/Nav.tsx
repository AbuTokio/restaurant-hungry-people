import { NavLink } from "react-router"
import { useScroll } from "../../contexts/ScrollContext"

interface Element {
  name: string
  path?: string
}

interface NavProps {
  elements: Element[]
}

export default function Nav({ elements }: NavProps) {
  const { scrollToMain } = useScroll()

  return (
    <nav className="2xl:pt-[15px] md:pt-[15px] flex gap-4 2xl:gap-35 md:gap-27">
      {elements.map(({ name, path }) => (
        <NavLink
          className={({ isActive }) => `${isActive && "border-b"} h-fit`}
          to={path ? path : name.toLowerCase()}
          key={name}
          onClick={scrollToMain}>
          {name}
        </NavLink>
      ))}
    </nav>
  )
}
