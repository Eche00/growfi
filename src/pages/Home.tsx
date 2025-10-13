import About from "./homecomponents/About"
import Hero from "./homecomponents/Hero"
import Services from "./homecomponents/Services"
import Reviews from "./homecomponents/Reviews"
import Contact from "./homecomponents/Contact"

function Home() {
  return (
       <div>
        <Hero/>
        <section className="bg-green-700/10 mt-10">
        <About/>
        </section>
        <section className="flex flex-col sm:w-[85%] w-[90%] mx-auto">
        <Services/>
        </section>
        <section className="bg-gray-100 mb-10">
        <Reviews/>
        </section>
        <section className="flex flex-col sm:w-[85%] w-[90%] mx-auto">
        <Contact/>
        </section>

         
       </div>
      
  )
}

export default Home