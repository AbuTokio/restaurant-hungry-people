import type MenuItem from "../../data/HungryData"

interface MenuRowItemProps {
  item: MenuItem
}

export default function MenuRowItem({ item }: MenuRowItemProps) {
  return (
    <div className="min-h-9">
      <div className="flex justify-between font-banny font-bold text-sm text-secondary uppercase">
        <p>{item.name}</p>
        <div className="flex-1 border-b-2 border-dotted border-black mx-2 -translate-y-1.5"></div>
        <p>{item.price}</p>
      </div>
      {item.description && <p className="font-opensans text-xs text-[#33333380]">{item.description}</p>}
    </div>
  )
}
