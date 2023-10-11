import './App.css';
import AnimatedTextWord from './components/AnimatedTextWord';
import AnimatedTextWord2 from './components/AnimatedTextWord2';
import AnimatedTourIcon from './components/AnimatedTourIcon';


function App() {
  return (
   <div>
     <section className='mr-5 min-h-[100svh] '>
      <div className="container font-inter h-screen flex flex-col font-bold items-end justify-start pt-48 lg:pt-40" >
        <AnimatedTextWord text="HEY👋" delayChildren={1.1} />
        <AnimatedTextWord2 text="I'M  OSHOKE"  />
        <AnimatedTextWord text="THE" delayChildren={3.5} className="text-teal-500"/>
        <AnimatedTextWord text="QUALITY" delayChildren={4} />
        <AnimatedTextWord text="ASSURANCE" delayChildren={4.5}  />
        <AnimatedTextWord text="ENGINEER" delayChildren={5} className="border-b-2 border-teal-500" style={{ paddingBottom: "10px" }} />
        <div className='mt-24 mr-[63%]'>
          <AnimatedTourIcon text="Explore arrowIcon" className="mt-2" />
        </div>

      </div>
     
    </section>

    <section id="section2" className="mt-10 min-h-[100svh] bg-gradient-to-b from-white via-white to-teal-100">
      <div className='flex px-4'>
        <div className=' border-r-2 pr-5 border-teal-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sed sunt voluptas consequatur. Quo modi quaerat velit officiis voluptas dolore, odit fuga. Excepturi accusamus vitae, qui dolorum doloribus minus laborum.

        </div>
        <div className='pl-5'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos, et saepe, quibusdam similique voluptatem velit possimus molestiae commodi ab earum? Obcaecati dolor harum corrupti voluptatem tempore? Deserunt, ea sunt.

        </div>
      </div>
    </section>


   </div>
    

  );
}

export default App;
