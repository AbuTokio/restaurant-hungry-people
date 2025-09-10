interface AccentProps {
  square?: boolean
  className?: string
}

export default function Accent({ square, className }: AccentProps) {
  return (
    <>
      {square ? (
        <div className={`${className} w-[250px] h-[250px] border-20 border-accent bg-transparent rounded-[5px]`}></div>
      ) : (
        <div className={`${className} w-15 h-[5px] rounded-full bg-accent`}></div>
      )}
    </>
  )
}
