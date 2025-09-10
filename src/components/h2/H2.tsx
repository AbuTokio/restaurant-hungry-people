import Accent from "../accent/Accent"

interface H2Props {
  label: string
}

export default function H2({ label }: H2Props) {
  return (
    <h2 className="font-banny text-4xl font-bold text-center leading-12 uppercase flex flex-col justify-center items-center gap-2">
      {label}
      <Accent />
    </h2>
  )
}
