import React from "react";
import Header from "./Components/Header";
import BarraLateral from "./Components/BarraLateral";
import SlideShow from "./Components/SlideShow";
import Informacoes from "./Components/Informacoes";
import Horarios from "./Components/Horarios";
import OutrosFestivais from "./Components/OutrosFestivais";
import Formulario from "./Components/Formulario";
import Footer from "./Components/Footer";
import "./style.css";

function App() {
  return (
    <div class="app-container">
      <BarraLateral />
      <div class="main-content">
        <Header />
        <main class="conteudo-principal">
          <SlideShow />
          <Informacoes />
          <Horarios />
          <OutrosFestivais />
          <Formulario />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
