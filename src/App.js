import React ,{useEffect} from 'react'
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Services from "./components/Services";
import Footter from "./components/Footter";
import Recommend from "./components/Recommend";
import Test from './components/Test';
import scrollreveal from "scrollreveal";


export default function App() {
  useEffect (() =>{
    
    const sr = scrollreveal({

      origin:"top",
      distance :"80px",
      duration:"2000",
      reset: true,
    });
    sr.reveal(

     `
     nav,
     #hero,
     #services,
     #recommend,
     #testimonials
     `,
     {
      opacity:0,
      interval:300,
     }

    );

  }, []);


  return (
    <div>
   
   
    <Navbar />
    <Hero />
    <Services/>
    <Recommend/>
    <Test/>
    <Footter/>
   

    
    </div>
  )
}
