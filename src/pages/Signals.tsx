import Contact from "./homecomponents/Contact"
import Hero from "./signalcomponents/Hero"
import Signalsc from "./signalcomponents/Signalsc"

function Signals() {
  return (
    <div>
       <Hero/>
        <section className="bg-green-700/10 mt-10">
          <Signalsc/>
        </section>

        <section className=" py-5">
        <Contact/>
        </section>

    </div>
  )
}

export default Signals