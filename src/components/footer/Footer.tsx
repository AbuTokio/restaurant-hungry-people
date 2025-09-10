export default function Footer() {
  return (
    <footer className="h-25 bg-[#000000E5] flex justify-center items-center">
      <p className="font-opensans text-xs text-[#FFFFFF80]">
        &copy; Copyright <span className="font-bold">AbuTokio</span> {new Date().getFullYear()}
      </p>
    </footer>
  )
}
