import Accent from "../accent/Accent"
import Button from "../button/Button"
import Nav from "../nav/Nav"

interface HeaderProps {
  onScrollToMain: () => void
}

export default function Header({ onScrollToMain }: HeaderProps) {
  return (
    <header className="px-20 bg-[url(/img/bg-header.png)] bg-cover">
      <section className="mx-auto pt-[25px] px-20 w-fit flex gap-17.5 font-opensans text-white font-bold text-xs leading-4.5 uppercase">
        <Nav elements={[{ name: "Home", path: "/" }, { name: "Team" }]} />
        <img src="/img/logo.svg" alt="brand-logo" />
        <Nav elements={[{ name: "Menu" }, { name: "Booking" }]} />
      </section>

      <section className="mt-37.5 mx-auto text-white flex justify-between items-center w-full">
        <div className="flex justify-center items-center w-15">
          <p className="font-opensans font-bold text-xs [writing-mode:vertical-rl] rotate-180">
            Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM
          </p>
        </div>
        <div className="font-bold mx-auto w-fit flex flex-col items-center gap-5">
          <span className="font-opensans text-xs leading-3.5 tracking-[0.375em] uppercase">Restaurant</span>
          <h1 className="font-banny text-8xl uppercase">Hungry People</h1>
          <Accent />
          <div className="mt-2 flex gap-10">
            <Button filled label="Book table" linkTo="booking" />
            <Button label="explore" linkTo="menu" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <Button icon="/img/facebook.svg" linkTo="https://www.facebook.com/" />
          <Button iconPadding={5} icon="/img/x.svg" linkTo="https://www.x.com/" />
          <Button icon="/img/instagram.svg" linkTo="https://www.instagram.com/" />
        </div>
      </section>
      <section className="flex justify-center items-center py-20">
        <Button icon="/img/arrow-down.svg" onClick={onScrollToMain} />
      </section>
    </header>
  )
}
