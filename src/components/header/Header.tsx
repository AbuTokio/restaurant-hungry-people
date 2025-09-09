import Nav from "../nav/Nav"

export default function Header() {
  return (
    <header className="bg-[url(/img/bg-header.jpg)] bg-cover">
      <div className="mx-auto pt-[25px] px-20 w-fit flex items-start gap-17.5 font-opensans text-white font-bold text-xs leading-4.5 uppercase">
        <Nav elements={[{ name: "Home", path: "/" }, { name: "Team" }]} />
        <img src="/img/logo.svg" alt="brand-logo" />
        <Nav elements={[{ name: "Menu" }, { name: "Booking" }]} />
      </div>
    </header>
  )
}
