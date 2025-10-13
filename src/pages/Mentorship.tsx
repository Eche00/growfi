import Contact from "./homecomponents/Contact"
import Hero from "./mentorshipcomponents/Hero"
import Packages from "./mentorshipcomponents/Packages"

function Mentorship() {
  return (
    <div>
       <Hero/>
        <section className="bg-green-700/10 mt-10" id="packages">
          <Packages/>
        </section>

        <section className=" py-5">
        <Contact/>
        </section>

    </div>
  )
}

export default Mentorship