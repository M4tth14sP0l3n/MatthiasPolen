import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <AboutMe />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Matthias Polen. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
