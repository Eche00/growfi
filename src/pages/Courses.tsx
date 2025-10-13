
import Coursesc from "./coursescomponent/Coursesc"
import Hero from "./coursescomponent/Hero"
import Contact from "./homecomponents/Contact"

function Courses() {
  return (
    <div>
       <Hero/>
        <section className="bg-green-700/10 mt-10" id="courses">
          <Coursesc/>
        </section>

        <section className=" py-5">
        <Contact/>
        </section>

    </div>
  )
}

export default Courses