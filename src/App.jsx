import DataImage, { listEquipment } from  "./data";
import {listTools, listProyek} from "./data";
import CounterOnScroll from "./CounterOnScroll";
import InfiniteRow from "./components/InfiniteRow";
import Snowfall from "react-snowfall";
function App() {
  return (
    <>
   
   <Snowfall color="#8fb5c2"/>
   <div className="hero items-center pt-25 sm:pt-45" id="Home">
    <div className="animate__animated animate__fadeInUp animate__delay-3s">
      
      <h1 className="text-2xl sm:text-5xl font-bold mb-8 sm:mb-12 text-center">
  Wazzup, I’m Garry
  <span className="ml-1 inline-flex items-center justify-center w-10">
    🍺
  </span>
</h1>
      <div className="w-full sm:w-3/4 lg:w-1/2 xl:w-1/4 mx-auto mb-8 sm:mb-12 px-4 overflow-hidden">
  <div className="group relative flex items-center justify-center  bg-zinc-800 text-white
    p-3 rounded-3xl
    drop-shadow-md
    text-center overflow-hidden
    hover:bg-zinc-700
    transition-all duration-300
    dark:bg-zinc-800 dark:text-white">
    
    {/* Japanese */}
    <q className="transition-all duration-300 group-hover:opacity-0">
      半分デザイナー、半分エンジニア 🤘
    </q>

    {/* English */}
    <q className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
      Half Designer, Half Engineer🤘
    </q>

  </div>
</div>
      </div>
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
      <p className="text-sm sm:text-base/loose mb-8 sm:mb-12 opacity-50 text-center  w-full sm:w-3/4 md:w-3/4 justify-center mx-auto px-4 break-word relative overflow-hidden"> Hi, long time no see! <span className = "underline italic font-bold">Welcome to my universe.</span> I built this space so you can get to know me better, hehe.
      You’ll find my projects, tools, resume, social media, and a bit information about who I am.

      Thanks for taking the time to visit my universe. I guess that’s it enough,<p className = "mt-2 font-bold italic "> Until next time...PIWWW 🚀</p>
        
      </p>
      </div>
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
      <div className="flex items-center sm:gap-6 gap-4 justify-center">
        <a href="https://www.linkedin.com/in/garry-yehosyafat/" className="flex p-5 rounded-full bg-linear-to-br from-blue-500/20 to-blue-700/20
        backdrop-blur-md border border-blue-300/20 hover:from-blue-500/30 hover:to-blue-700/30 transition-all sm:text-base text-sm">My Linkedin 
          <i className="ri-linkedin-box-fill ri-lg p-1 hidden md:block" ></i></a> 
          
        <a href="https://drive.google.com/file/d/1MCbcw0udwfoEBE4ECud2kr4XUDoLVsOh/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex p-5 rounded-full bg-linear-to-br from-red-500/20 to-red-700/20 backdrop-blur-md border border-red-300/20
       hover:from-red-500/30 hover:to-red-700/30 hover:drop-shadow-md transition-all sm:text-base text-sm">Download CV
          <i className="ri-file-download-line ri-lg p-1 hidden md:block"></i></a>
      </div>
      </div>
    
    
   </div>

   {/* section a little more*/}
<section className="experience mt-10 sm:mt-35 py-10 px-4"> 
  <h1 className="text-2xl sm:text-3xl/snug font-black mb-10 text-center drop-shadow-md animate__animated animate__fadeInUp animate__delay-4s">
    A little More 🤘
  </h1>

  <div
    className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-4  items-center "
  >
    {/* KOLOM FOTO (FIXED WIDTH) */}
    <div className="flex justify-center lg:justify-end">
      <div className="p-3 w-56 h-72    rounded-2xl overflow-hidden
    
    backdrop-blur-xl
    transition-all duration-500 ease-in-out 

    /* LIGHT MODE */
    bg-white/60
    border border-black/10
    shadow-[0_8px_30px_rgba(0,0,0,0.08)]

    /* DARK MODE */
    dark:bg-zinc-900/60
    dark:border-white/10
    dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]" data-aos="fade-right" data-aos-duration="1500" >
        <img
          src="/assets/geriii.png" alt="profile" className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:w-48 lg:w-full rounded-2xl object-cover shadow-lg items-center-safe"
        />
      </div>
    </div>

    {/* KOLOM CARD TEKS (PANJANG) */}
    <div
      className="
        p-10 sm:min-h-[280px] backdrop-blur-xl
    transition-all duration-500 ease-in-out rounded-2xl

    /* LIGHT MODE */
    bg-white/60
    border border-black/10
    shadow-[0_8px_30px_rgba(0,0,0,0.08)]

    /* DARK MODE */
    dark:bg-zinc-900/60
    dark:border-white/10
    dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]" data-aos="fade-left" data-aos-duration="1500"
    >
      <p className="text-sm sm:text-based/loose mb-2 text-justify  opacity-80 dark:opacity-60">
       Hi, my name is <span className="underline  font-bold italic">Garry Yehosyafat</span>, but you can call me Garry or Geri. I'm an informatics graduate from Universitas Diponegoro.
       alright now it comes to hobbies, actually I’ve got a bunch of them, but my favorites are videography and photography. 
       That’s why, when it comes to web development, I naturally lean more toward front-end stuff.
      </p>
      <p className="text-sm sm:text-based/loose mb-5 text-justify  opacity-80 dark:opacity-60">
       I guess that’s enough for my introduction, and if you want to get to know me better, feel free to check out my social media links below.
      </p>

      <div className="flex items-center justify-between">
       
        <div className="logo">
  {/* LOGO HITAM (LIGHT MODE) */}
  <img
    src="/assets/logozinc2.png"
    className="w-15 sm:w-20 h-auto block dark:hidden sm:block"
    alt="Logo"
  />

  {/* LOGO PUTIH (DARK MODE) */}
  <img
    src="/assets/logo1.png"
    className="w-15 sm:w-20 h-auto hidden dark:block sm:blok"
    alt="Logo"
  />
</div>

        <div className="flex items-center sm:gap-8 gap-4">
          <div>
            <h1 className="text-sm sm:text-4xl font-semibold mb-1">
              <CounterOnScroll target={30} duration={4000} />
            </h1>
            <p className="font-bold text-based sm:text-xl">PROJECT</p>
          </div>

          <div>
            <h1 className="text-sm sm:text-4xl font-semibold mb-1">
              <CounterOnScroll target={4} duration={2000} />
            </h1>
            <p className="font-bold text-based sm:text-xl">YOE</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    {/* section tools*/}
    <div className="tools mt-10 sm:mt-20" id="Tools">
      <h1 className="text-2xl sm:text-3xl/snug font-black mb-2 text-center" >TOOLS</h1>
      <p className= "text-sm sm:text-base text-center font-semibold opacity-70"> These are my daily work weapons (software)</p>
      
      <section className="space-y-6 py-10 ">
      <InfiniteRow direction="left" listTools={listTools.slice(0, 6)} />
      <InfiniteRow direction="right" listTools={listTools.slice(3, 9)} />
      <InfiniteRow direction="left" listTools={listTools.slice(6, 13)} />
    </section>
    
       
      </div>

    
    {/* end of section tools*/}
    {/* section Project*/}
    <div className="project mt-10 sm:mt-20 py-10" id="Project">
      <h1 className="text-2xl sm:text-3xl text-center font-bold mb-2">PROJECT</h1>
      <p className="text-sm sm:text-base text-center font-semibold opacity-70">Some of the projects that I have done</p>
      <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"data-aos="fade-up"data-aos-duration="1000">
          {listProyek.map((project) => (
            <div
                key={project.id }  
                className="p-4  backdrop-blur-xl 
    transition-all duration-500 ease-in-out rounded-2xl

    /* LIGHT MODE */
    bg-white/60
    border border-black/10
    shadow-[0_8px_30px_rgba(0,0,0,0.08)]

    /* DARK MODE */
    dark:bg-zinc-900/60
    dark:border-white/10
    dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay={project.dad}
              >
                <img src={project.gambar} alt="project image" loading="lazy" className="rounded-xl"/>

      <div>
        <h1 className="text-xl sm:text-2xl font-bold my-4"> {project.nama} </h1>
        <p className="text-sm sm:text-base/loose mb-4">{project.desk}</p>

        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, index) => (
            <p key={index}className="text-sm sm:text-base py-1 px-3 border border-zinc-500 bg-zinc-100 dark:bg-zinc-700 rounded-xl font-semibold">
              {tool}
            </p>
          ))}
        </div>

        {/* ✅ BUTTON */}
        <div className="mt-6 text-center font-semibold">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="p-2 sm:p-4 block rounded-full bg-linear-to-br from-blue-500/20 to-blue-700/20
         border border-blue-300/50 hover:from-blue-500/30 hover:to-blue-700/30
  dark:violet-950 dark:to-slate-700
  backdrop-blur-md
   dark:border-zinc-700/60
 
  dark:hover:from-slate-800 dark:hover:to-blue-950 transition-all hover:font-bold text-center ">
                 See Project </a> )}
        </div>
      </div>
    </div>
  ))}

      </div>
    </div>
{/* End of section */}
{/* section Equipments*/}
        <div className="equipment mt-10 sm:mt-20 py-10" id="Equipment">
          <h1 className="text-2xl sm:text-3xl text-center font-bold mb-2">EQUIPMENT</h1>
          <p className="text-sm sm:text-base text-center font-semibold opacity-70">These are the tools I use to create something magical</p>
          <div className="equipment-box mt-14 grid lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-1 gap-4
          " data-aos="fade-up" data-aos-duration="1500">

          {listEquipment.map((equipment)=>(
          <div key={listEquipment.id} className="p-4  backdrop-blur-xl
    transition-all duration-500 ease-in-out rounded-xl

    /* LIGHT MODE */
    bg-white/60
    border border-black/10
    shadow-md hover:shadow-lg

    /* DARK MODE */
    dark:bg-zinc-900/60
    dark:hover-bg-zing-800/40
    dark:border-white/10
    dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay={equipment.dad}>
            <img src={equipment.gambar} alt="equipment image" loading="lazy" className="rounded-2xl mx-auto w-auto h-50 p-2 object-contain" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold my-4"> {equipment.nama}</h1>
              <p className="text-sm sm:text-base/loose mb-4">{equipment.desk}</p>
              <div className="flex flex-wrap gap-2">
                {equipment.tools.map((tool, index) => (
                  <p className="text-sm sm:text-base py-1 px-3 border border-zinc-500 bg-zinc-100 dark:bg-zinc-700 rounded-2xl font-semibold" key={tool}>{tool}</p>
                ))}
          
              </div>
              
              </div>
            </div>
          
            ))}
            </div>
          </div>
        

        <div className="experience mt-10 sm:mt-20 py-10" id="Experience">
          <h1 className="text-xl sm:text-3xl text-center font-bold mb-2">EXPERIENCE</h1>
          <p className="text-sm sm:text-base text-center font-semibold opacity-70">My journey as an adult human </p>
            <div className="max-w-5xl mx-auto px-6">
                  
            {/* Experience Item */}
              <div className="bg-linear-to-br from-white/30 to-white/20 dark:from-white/10 dark:to-white/5 backdrop-blur-md border border-white/20 
               hover:from-white/20 hover:to-white/10 transition rounded-2xl p-6 shadow-md hover:shadow-lg mt-14" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-12 flex items-center justify-center overflow-hidden">
                         <img src="/assets/LogoMunik.png" alt="PT Sarimunik Mandiri" className="w-full h-full object-contain"/>
                          </div>

                          <div className="flex-1">
                            <h4 className="text-base sm:text-xl font-semibold text-zinc-800 dark:text-white/80">
                              PT. Sarimunik Mandiri</h4>
                            <p className="text-xs sm:text-sm text-zinc-800 dark:text-white/70">
                              Full-time · 1 yr 5 mos </p>
                            <p className="text-xs sm:text-sm text-zinc-800 dark:text-white/60">
                              Jakarta, Indonesia · On-site </p>
                          </div>
                        </div>
             {/* title 1 */}
             
            <div className="my-4  border-t border-zinc-300 dark:border-white/10"></div>
            <div className="relative pl-12 border-l border-zinc-400/50 dark:border-white/20 space-y-10"> 
             <div className="relative">
              
             <span className="absolute -left-[54px] top-2 w-3 h-3 rounded-full bg-zinc-400 dark:bg-white"></span>
              <h3 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-white/80">Social Media Creative Head Coordinator</h3>
              <ul className="mt-3 space-y-2text-zinc-800 dark:text-white/60 text-xs sm:text-sm list-disc pl-5 text-justify">
                <li>Leading a team for digital promotions</li>
                <li>Handling company events and external collaborations</li>
                <li>Planning and executing digital campaigns</li>
              </ul>
              </div>
              
              {/* title 2 */}

             <div className="relative">
             <span className="absolute -left-[54px] top-2 w-3 h-3 rounded-full bg-zinc-400 dark:bg-white"></span>
              <h3 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-white/80 mt-5">Social Media Content Creator</h3> 
              <ul className="mt-3 space-y-2 text-zinc-800 dark:text-white/60 text-xs sm:text-sm list-disc pl-5 text-justify">
                <li>Designing digital promotional materials for the company, such as creating content for social media uploads (videos and graphic designs) and managing
                  collaborations with external parties.</li>
              </ul>
            </div>
          </div>
      </div>
      {/* Freelance*/}
      <div className="bg-linear-to-br from-white/30 to-white/20 dark:from-white/10 dark:to-white/5 backdrop-blur-md border border-white/20 
               hover:from-white/20 hover:to-white/10 transition rounded-2xl p-6 shadow-md hover:shadow-lg mt-5" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                  <div className="flex items-start gap-4">
                    <div className="w-15 h-12  flex items-center justify-center overflow-hidden">
                      <div className="logo">
                         <img src="/assets/logozinc2.png" alt="ger" className="w-full h-full object-contain block dark:hidden"/>
                         <img src="/assets/logo1.png" alt="ger2" className="w-full h-full object-contain hidden dark:block" />
                          </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-base sm:text-xl font-semibold text-zinc-800 dark:text-white/80">
                              GER. Project</h4>
                            <p className="text-xs sm:text-sm text-zinc-800 dark:text-white/70">
                              Freelance · 5 yrs </p>
                            <p className="text-xs sm:text-sm text-zinc-800 dark:text-white/50">
                              Jakarta, Indonesia · Hybrid </p>
                          </div>    
                        </div>

                        <div className="relative">
                           <div className="my-4  border-t border-zinc-300 dark:border-white/10"></div>
                        <h3 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-white/80 mt-5">Freelance Creative and Web Dev</h3> 
                          <ul className="mt-3 space-y-2 text-zinc-800 dark:text-white/60 text-xs sm:text-sm list-disc pl-5 text-justify">
                            <li>Working on offered projects such as video editing, videography, graphic design, and web development (UI/UX and front-end).</li>
                             </ul>
                            </div>
                        </div>
        {/* Diskominfo */}
        <div className="bg-linear-to-br from-white/30 to-white/20 dark:from-white/10 dark:to-white/5  backdrop-blur-md border border-white/20 
               hover:from-white/20 hover:to-white/10 transition rounded-2xl p-6 shadow-md hover:shadow-lg mt-5" data-aos="fade-up" data-aos-duration="1500"data-aos-delay="400">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12  flex items-center justify-center overflow-hidden">
                         <img src="/assets/LogoSemarang.png" alt="PT Sarimunik Mandiri" className="w-full h-full object-contain"/>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-base sm:text-xl font-semibold text-zinc-800 dark:text-white/80">
                              Diskominfo Kota Semarang</h4>
                            <p className="text-xs sm:text-sm text-zinc-800 dark:text-white/70">
                              Internship · 4 mos </p>
                            <p className="text-xs sm:text-sm text-zinc-800 dark:text-white/50">
                              Semarang, Indonesia · Hybrid </p>
                          </div>
                        </div>
                        <div className="relative">
                           <div className="my-4  border-t border-zinc-300 dark:border-white/10"></div>
                        <h3 className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-white/80 mt-5">Web Developer</h3> 
                          <ul className="mt-3 space-y-2 text-zinc-800 dark:text-white/60 text-xs sm:text-sm list-disc pl-5 text-justify">
                            <li> Creating a website with a cultural and tourism theme to facilitate tourists in obtaining information about the destinations in the city of Semarang.
                            This project using Tailwind, Javascript, and Laravell.</li>
                            
                             </ul>
                            </div>
                        </div>
                        
            
      
        </div>
      </div>
      
    </>
  )

}


export default App
