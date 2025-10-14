import About from "./homecomponents/About"
import Hero from "./homecomponents/Hero"
import Contact from "./homecomponents/Contact"
import HowWeDo from "./homecomponents/HowWeDo"
import Success from "./homecomponents/Success"

function Home() {
  return (
       <div className="bg-gradient-to-b from-[#7E7ED7] from-90%  to-black ">
        <Hero/>
        <section className="bg-gradient-to-b from-black to-[#7E7ED7]   pt-10">
        <About/>
        </section>
        <section className="flex flex-col  mx-auto bg-black">
        <HowWeDo/>
        </section>
        <section className=" mb-10 bg-gradient-to-b ">
        <Success/>
        </section>
       
        <section className="flex flex-col sm:w-[85%] w-[90%] mx-auto ">
        <Contact/>
        </section>

         
       </div>
      
  )
}

export default Home