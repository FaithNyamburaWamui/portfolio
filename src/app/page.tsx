import Homepage from "./components/Homepage/page";
import Navbar from "./components/Navbar/page";
import Projects from "./components/Project/page";
import Services from "./components/Services/page";
import Stacks from "./components/Stacks/page";
import Contact from "./components/Contact/page";

export default function Home() {
  return (
    <main>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
          rel="stylesheet"
        />
    
     <Navbar/>
     <Homepage/>
     <Services/>
     <Stacks/>
     <Projects/>
     <Contact/>
    </main>
  );
}
