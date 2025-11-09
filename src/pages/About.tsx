import Contact from "./homecomponents/Contact"
import Hero from "./aboutcomponents/Hero"
import Packages from "./aboutcomponents/Packages"
import Categories from "./aboutcomponents/Categories"

function About() {
  return (
    <div className="bg-gradient-to-b from-[#7E7ED7] from-90%  to-black ">
       <Hero/>
        <section className="bg-gradient-to-b from-black to-[#7E7ED7]   pt-10">
        <Categories/>
        </section>
        <section className="flex flex-col  mx-auto bg-black" >
          <Packages/>
        </section>

        <section className="flex flex-col sm:w-[85%] w-[90%] mx-auto ">
        <Contact/>
        </section>

    </div>
  )
}

export default About