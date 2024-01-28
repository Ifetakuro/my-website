import "./styles/app.scss";
import Header from "./components/Header";
import Hero from "./containers/Hero";
import Projects from "./containers/Projects";
import Technologies from "./containers/Technologies";
import Contact from "./containers/Contact";
import { animateScroll as scroll } from "react-scroll";
import { RiArrowUpLine } from "react-icons/ri";
import { useEffect, useState } from "react";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    setShowScrollButton(window.scrollY > 100);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      {showScrollButton && (
        <span className="scroll-to-top">
          <RiArrowUpLine onClick={scrollToTop} />
        </span>
      )}
    </div>
  );
}

export default App;
