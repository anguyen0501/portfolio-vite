import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import "./App.css";
import "./index.css";
function App() {
  const [isLoader, setIsLoader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoader && <LoadingScreen onComplete={() => setIsLoader(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoader ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
