import React, { useEffect } from "react";

import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Projects from './pages/Projects'
import Contact from "./pages/Contact";
import Nevigator from "./components/Nevigator";
import Expandachivement from "./pages/Expandachivement";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    // Disable browser's default scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";

    }
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // Scroll to top on mount (ensures top position)
    
  }, []);

  return (
    <div className=" bg-black">
      <Header/>
      <Nevigator/>
      <Hero/>
      <About/>
      <Technologies/>
      <Expandachivement/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
