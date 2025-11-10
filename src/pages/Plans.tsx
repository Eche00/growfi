import Contact from "./homecomponents/Contact"
import Hero from "./planscomponents/Hero"
import Plan from "./planscomponents/Plan"

function Plans() {
  return (
    <div className="bg-gradient-to-b from-[#7E7ED7] from-90%  to-black ">
       <Hero/>
        <section className="bg-gradient-to-b from-black to-[#7E7ED7]   ">
          <Plan/>
        </section>

                <section className="flex flex-col sm:w-[85%] w-[90%] mx-auto ">
        <Contact/>
        </section>

    </div>
  )
}

export default Plans