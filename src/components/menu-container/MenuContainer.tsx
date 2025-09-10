import { useEffect, useState } from "react"
import { hungryData } from "../../data/HungryData"
import MenuRow from "../menu-row/MenuRow"
import type MenuItem from "../../data/HungryData"

export default function MenuContainer() {
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    setCategories(Array.from(new Set(hungryData.map((item) => item.category))))
  }, [])

  return (
    <div className="flex w-full justify-between">
      {categories.map((category, index) => (
        <MenuRow key={index} data={hungryData.filter((item: MenuItem) => item.category === category)} />
      ))}
    </div>
  )
}
