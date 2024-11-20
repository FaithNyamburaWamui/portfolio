// src/app/page.tsx
import { Jost } from 'next/font/google';
import Homepage from "./components/Homepage/page";
import Navbar from "./components/Navbar/page";
import Projects from "./components/Project/page";
import Services from "./components/Services/page";
import Stacks from "./components/Stacks/page";
import Contact from "./components/Contact/page";

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '700'], // the weights you're using
  display: 'swap',
});

export default function Home() {
  return (
    <main className={jost.className}>
      <Navbar/>
      <Homepage/>
      <Services/>
      <Stacks/>
      <Projects/>
      <Contact/>
    </main>
  );
}