import type MenuItem from "../../data/HungryData"
import MenuRowItem from "../menu-item/MenuRowItem"

interface MenuRowProps {
  data: MenuItem[]
}

export default function MenuRow({ data }: MenuRowProps) {
  return (
    <div className="flex flex-col gap-6 grow max-w-[310px]">
      {data.map((item, index) => (
        <MenuRowItem key={index} item={item} />
      ))}
    </div>
  )
}
