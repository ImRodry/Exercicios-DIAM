import React from "react";
import Header from "./Components/Header";
import BarraLateral from "./Components/BarraLateral";
import SlideShow from "./Components/SlideShow";
import Informacoes from "./Components/Informacoes";
import Horarios from "./Components/Horarios";
import OutrosFestivais from "./Components/OutrosFestivais";
import Footer from "./Components/Footer";
import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <BarraLateral />
      <SlideShow />
      <Informacoes />
      <Horarios />
      <OutrosFestivais />
      <Footer />
    </div>
  );
}

export default App;
