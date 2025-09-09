interface AccentProps {
  square?: boolean
}

export default function Accent({ square }: AccentProps) {
  return (
    <>
      {square ? (
        <div className="w-[250px] h-[250px] border-20 border-accent bg-transparent rounded-[5px]"></div>
      ) : (
        <div className="w-15 h-[5px] rounded-full bg-accent"></div>
      )}
    </>
  )
}
