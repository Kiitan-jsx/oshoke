import './App.css';
import AnimatedTextWord from './components/AnimatedTextWord';
import AnimatedTextWord2 from './components/AnimatedTextWord2';
import AnimatedTourIcon from './components/AnimatedTourIcon';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import hero from './assets/hero.jpeg'




function App() {
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: .7, // Adjust the duration as needed
      },
    },
  };

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  const variants2 = {
    hidden: { opacity: 0, x: 100 }, // Start from the right
    visible: {
      opacity: 1,
      x: 0, // Move to its original position
      transition: {
        duration: 0.7, // Adjust the duration as needed
      },
    },
  };

  return (
   <div>
     <section className='mr-5 min-h-[100svh] '>
      <div className="container font-inter h-screen flex flex-col font-bold items-end justify-start pt-48 lg:pt-40" >
        <AnimatedTextWord text="HEY👋" delayChildren={1.1} />
        <AnimatedTextWord2 text="I'M  OSHOKE"  />
        <AnimatedTextWord text="THE" delayChildren={3.5} className="text-teal-600"/>
        <AnimatedTextWord text="QUALITY" delayChildren={4} />
        <AnimatedTextWord text="ASSURANCE" delayChildren={4.5}  />
        <AnimatedTextWord text="ENGINEER" delayChildren={5} className="border-b-2 border-teal-600" style={{ paddingBottom: "10px" }} />
        <div className='mt-24 mr-[63%]'>
          <AnimatedTourIcon text="Explore arrowIcon" className="mt-2" />
        </div>

      </div>
     
    </section>

    <section id="section2" className=" min-h-[100svh] bg-gradient-to-b from-white via-white to-teal-100 border-2 contt">
      <div className=''>
        <div className='flex px-4 sec2'>
          <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          >
             <div className="border-r-2 pr-5 border-teal-600 leftdiv">
                <div className=' h-full w-40 items-center justify-center ' > 
                  <div className='p-5'>
                  <img src={hero} alt="memoji" className='rounded-full border border-teal-600 h-32 w-32' /> 
                  </div>
                </div>
             </div>
          </motion.div>

          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={variants2}
          >
            <div className='pl-5 rightdiv'>
              <div className=' text-lg font-medium text-center'>About Me</div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos, et saepe, quibusdam similique voluptatem velit possimus molestiae commodi ab earum? Obcaecati dolor harum corrupti voluptatem tempore? Deserunt, ea sunt.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos, et saepe, quibusdam similique voluptatem velit possimus molestiae commodi ab earum? Obcaecati dolor harum corrupti voluptatem tempore? Deserunt, ea sunt.
            </div>
          </motion.div>
        </div>
      </div>
    </section>


   </div>
    

  );
}

export default App;
