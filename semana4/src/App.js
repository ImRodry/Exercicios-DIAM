import React from "react"
import Header from "./Components/Header"
import BarraLateral from "./Components/BarraLateral"
import Informacoes from "./Components/Informacoes"
import Horarios from "./Components/Horarios"
import OutrosFestivais from "./Components/OutrosFestivais"
import Footer from "./Components/Footer"
import "./style.css"

function App() {
	return (
		<div className="app-container">
			<BarraLateral />
			<div className="main-content">
				<Header />
				<main className="conteudo-principal">
					<Informacoes />
					<Horarios />
					<OutrosFestivais />
				</main>
				<Footer />
			</div>
		</div>
	)
}

export default App
