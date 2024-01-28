import "./styles/app.scss";
import Header from "./components/header";
import Hero from "./containers/Hero";
import Projects from "./containers/Projects";
import Technologies from "./containers/Technologies";
import Contact from "./containers/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Technologies />
        <Contact />
      </main>
    </div>
  );
}

export default App;
