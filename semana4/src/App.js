import React from "react"
import Header from "./Components/Header"
import BarraLateral from "./Components/BarraLateral"
import Informacoes from "./Components/Informacoes"
import Horarios from "./Components/Horarios"
import OutrosFestivais from "./Components/OutrosFestivais"
import Footer from "./Components/Footer"
import Artista from "./Components/Artista"
import Programa from "./Components/Programa"
import "./style.css"

function App() {
	return (
		<div className="app-container">
			<BarraLateral />
			<div className="main-content">
				<Header />
				<main className="conteudo-principal">
					<Informacoes />
					{/* <Artista
						nome="GNR"
						imagem="GNR.jpg"
						estilo="Rock"
						descricao="GNR (sigla de Grupo Novo Rock) é uma banda portuguesa de pop rock, 
						formada no Porto, em setembro de 1980, por Alexandre Soares (vocal e guitarra), 
						Vitor Rua (guitarra) e Tóli César Machado (bateria). O grupo surgiu no período denominado 
						boom do rock português, mas os elementos da banda consideram que estiveram à margem do 
						fenómeno, pois quebraram barreiras e criaram uma nova sonoridade em Portugal. 
						Atualmente a banda é constituída por Tóli César Machado (guitarra, teclas e acordeão),
						Jorge Romão (baixo) e Rui Reininho (vocal)."
						datahora="21 de agosto às 21h45"
					/> */}
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
