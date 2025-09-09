import { NavLink } from "react-router"

interface Element {
  name: string
  path?: string
}

interface NavProps {
  elements: Element[]
}

export default function Nav({ elements }: NavProps) {
  return (
    <nav className="pt-[15px] flex gap-35">
      {elements.map(({ name, path }) => (
        <NavLink to={path ? path : name.toLowerCase()} key={name}>
          {name}
        </NavLink>
      ))}
    </nav>
  )
}
