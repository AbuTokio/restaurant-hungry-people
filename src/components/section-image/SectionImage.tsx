import Accent from "../accent/Accent"

interface SectionImageProps {
  src: string
  alt?: string
  orientation: "left" | "right"
}

export default function SectionImage({ src, alt = "image", orientation }: SectionImageProps) {
  return (
    <div className={`w-fit flex justify-center items-center ${orientation === "left" && "2xl:pl-20"}`}>
      <div className="relative">
        <img className="w-[300px] md:w-[350px] 2xl:w-full" src={src} alt={alt} />
        <div
          className={`w-fit rounded-[5px] absolute top-1/2 -translate-y-1/2 ${
            orientation === "left" ? "left-[50px] -translate-x-1/2" : "right-[50px] translate-x-1/2"
          }`}>
          <Accent square />
        </div>
      </div>
    </div>
  )
}
