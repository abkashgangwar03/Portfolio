import React, { useState } from "react";
import WebProjects from "./WebProjects";
import MobileProjects from "./MobileProjects";
import AIMLprojects from "./AIMLprojects";



const Projects = () => {

  const [first, setFirst] = useState(1)


 

  
  

  return (
    <section id="projects" className=" h-full mx-4 md:mx-10 scroll-mt-12 md:scroll-mt-0">
      <h1
        className=" text-start border-b-2 border-neutral-600 text-2xl mt-7 md:mt-0 md:text-4xl font-extrabold
          p-2 bg-gradient-to-r brightness-175 from-neutral-600 to-textcolor to-30% md:to-10% text-transparent bg-clip-text"
      >
        Projects
      </h1>
      <div className="flex flex-col flex-wrap items-center gap-2 mt-4">
      <div className="flex flex-row gap-2">
      <button onClick={()=>setFirst(1)} className="px-2 active:scale-95  font-semibold rounded p-1 w-fit  h-fit bg-textcolor text-neutral-400 ">
        Web Projects
      </button>
      <button onClick={()=>setFirst(2)}  className=" px-2 active:scale-95  font-semibold rounded p-1 w-fit  h-fit bg-textcolor text-neutral-400 ">
        Mobile Projects
      </button>
      </div>
      <button onClick={()=>setFirst(3)}  className=" px-2 active:scale-95  font-semibold rounded p-1 w-fit  h-fit bg-textcolor text-neutral-400 ">
        Data Science and  AI/ML Projects
      </button>
      </div>
    
      <div>
        {first === 1 && <WebProjects />}
        {first === 2 && <MobileProjects />}
        {first === 3 && <AIMLprojects />}
      </div>
      
      
      <h4 className=" text-neutral-400 font-serif text-center mt-6">
        For more projects and details, <br /> Visit my:{" "}
        <a
          href="https://github.com/abkashgangwar03"
          rel="noreffer noopener"
          target="_blank"
          className=" brightness-175 font-serif font-extrabold underline text-textcolor"
        >
          Github
        </a>
      </h4>
      
    </section>
  );
};

export default Projects;
