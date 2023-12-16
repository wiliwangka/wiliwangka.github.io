// import HeroSection from './components/HeroSection'
// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col bg-[#303030] container mx-auto px-12 py ">
//           <HeroSection/>
//     </main>
//   )
// }
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#7d7d7d]">
     
      <div className="container mt-24 mx-auto px-12 py-4">
       <Navbar />
        <HeroSection />
        
        <AboutSection />
       <ProjectsSection />
     
      
     

      
      </div>
   
    </main>
  );
}