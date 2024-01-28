import "./styles/app.scss";
import Header from "./components/Header";
import Hero from "./containers/Hero";
import Projects from "./containers/Projects";
import Technologies from "./containers/Technologies";
import Contact from "./containers/Contact";
import { animateScroll as scroll } from "react-scroll";
import { RiArrowUpLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>Oluwafisayo Takuro's Portfolio</title>
          <link href="https://ifetakuro.github.io/my-website/" />
          <meta
            name="Oluwafisayo Takuro's Portfolio"
            content="Oluwafisayo knows numbers and code! She uses her accounting smarts and React skills to build apps that make finance easier"
          />
          <meta property="og:title" content="Oluwafisayo Takuro's Portfolio" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Oluwafisayo knows numbers and code! She uses her accounting smarts and React skills to build apps that makes finance easier"
          />
        </Helmet>
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
      </HelmetProvider>
    </div>
  );
}

export default App;
