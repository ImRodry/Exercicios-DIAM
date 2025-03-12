import React from "react"
import Header from "./components/Header"
import BarraLateral from "./components/BarraLateral"
import Informacoes from "./components/Informacoes"
import Horarios from "./components/Horarios"
import OutrosFestivais from "./components/OutrosFestivais"
import Footer from "./components/Footer"
import Programa from "./components/Programa"
import "./style.css"

function App() {
	return (
		<div className="app-container">
			<BarraLateral />
			<div className="main-content">
				<Header />
				<main className="conteudo-principal">
					<Informacoes />
					<Programa />
					<Horarios />
					<OutrosFestivais />
				</main>
				<Footer />
			</div>
		</div>
	)
}

export default App
