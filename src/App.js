import "./styles/app.scss";
import Header from "./components/header";
import Hero from "./containers/Hero";
import Projects from "./containers/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
}

export default App;
