import { createContext, useContext } from "react"

type ScrollContextType = {
  scrollToMain: () => void
}

export const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export const useScroll = () => {
  const ctx = useContext(ScrollContext)
  if (!ctx) throw new Error("useScroll must be used within ScrollProvider")
  return ctx
}
