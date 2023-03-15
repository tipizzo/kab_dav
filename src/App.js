import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer"
import myBrandImage from "./images/profile.jpg"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header 
        img={myBrandImage}
        alt="Kabanga David"
      />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
