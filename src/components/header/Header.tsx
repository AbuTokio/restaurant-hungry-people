import Accent from "../accent/Accent"
import Button from "../button/Button"
import Nav from "../nav/Nav"

interface HeaderProps {
  onScrollToMain: () => void
}

export default function Header({ onScrollToMain }: HeaderProps) {
  return (
    <header className="2xl:px-20 md:px-20 px-8 bg-[url(/img/bg-header.png)] bg-cover">
      <section className="w-full justify-between 2xl:mx-auto pt-[25px] 2xl:px-20 2xl:w-fit flex 2xl:gap-17.5 font-opensans text-white font-bold text-xs leading-4.5 uppercase">
        <Nav elements={[{ name: "Home", path: "/" }, { name: "Team" }]} />
        <img className="w-24 md:w-36 2xl:w-full" src="/img/logo.svg" alt="brand-logo" />
        <Nav elements={[{ name: "Menu" }, { name: "Booking" }]} />
      </section>

      <section className="2xl:mt-37.5 md:mt-25 mt-15 md:mx-auto text-white flex justify-between items-center w-full">
        <div className="flex justify-center items-center w-10 md:w-15">
          <p className="font-opensans font-bold text-[8px] md:text-xs [writing-mode:vertical-rl] rotate-180">
            Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM
          </p>
        </div>
        <div className="font-bold mx-auto w-fit flex flex-col items-center gap-5">
          <span className="font-opensans text-xs leading-3.5 tracking-[0.375em] uppercase">Restaurant</span>
          <h1 className="font-banny md:text-8xl text-4xl uppercase text-center">Hungry People</h1>
          <Accent />
          <div className="mt-2 flex gap-10 flex-col md:flex-row">
            <Button filled label="Book table" linkTo="booking" />
            <Button label="explore" linkTo="menu" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <Button icon="/img/facebook.svg" linkTo="https://www.facebook.com/" />
          <Button iconSize={5} icon="/img/x.svg" linkTo="https://www.x.com/" />
          <Button icon="/img/instagram.svg" linkTo="https://www.instagram.com/" />
        </div>
      </section>
      <section className="flex justify-center items-center py-20">
        <Button icon="/img/arrow-down.svg" onClick={onScrollToMain} />
      </section>
    </header>
  )
}
