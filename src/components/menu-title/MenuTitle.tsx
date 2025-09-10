import { useEffect, useState } from "react"
import { hungryData } from "../../data/HungryData"

export default function MenuTitle() {
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    setCategories(Array.from(new Set(hungryData.map((item) => item.category))))
  }, [])

  return (
    <div className="flex">
      {categories.map((category, index) => (
        <p
          className={`font-opensans font-bold text-xs text-secondary leading-4.5 text-center content-center uppercase w-30 h-12.5 ${
            index < categories.length - 1 && "border-r border-[#33333333]"
          }`}
          key={index}>
          {category}
        </p>
      ))}
    </div>
  )
}
