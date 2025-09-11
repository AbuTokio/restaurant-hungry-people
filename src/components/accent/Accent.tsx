interface AccentProps {
  square?: boolean
  className?: string
}

export default function Accent({ square, className }: AccentProps) {
  return (
    <>
      {square ? (
        <div
          className={`${className} w-[140px] h-[140px] border-13 md:w-[175px] md:h-[175px] md:border-15 2xl:w-[250px] 2xl:h-[250px] 2xl:border-20 border-accent bg-transparent rounded-[5px]`}></div>
      ) : (
        <div className={`${className} w-15 h-[5px] rounded-full bg-accent`}></div>
      )}
    </>
  )
}
