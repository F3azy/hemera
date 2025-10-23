import { Navbar } from "./components";
import { About, Contact, Hero, Projects, Team } from "./sections";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <Hero />
        <About />
        <Projects />
        <Team />
        <Contact />
      </div>
    </>
  );
}

export default App;
