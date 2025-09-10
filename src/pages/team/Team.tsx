import Section from "../../components/section/Section"

export default function Team() {
  return (
    <>
      <Section
        className="bg-[url(/img/bg-team.png)] bg-cover text-white [&>article>p:nth-child(3)]:text-[#FFFFFFE5]"
        title="Master Chef"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna."
        description="Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet."
        imgUrl="/img/team.png"
        orientation="right"
      />
    </>
  )
}
