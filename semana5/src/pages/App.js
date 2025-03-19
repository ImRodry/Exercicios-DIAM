import Header from "../components/Header"
import Informacoes from "../components/Informacoes"
import OutrosFestivais from "../components/OutrosFestivais"
import Footer from "../components/Footer"
import ListaArtistas from "../components/ListaArtistas"
import BarraLateral from "../components/BarraLateral"
import "../styles/style.css"

function App() {
	return (
		<div className="main-content">
			<Header />
			<div className="app-container">
				<BarraLateral />
				<main className="conteudo-principal">
					<Informacoes />
					<ListaArtistas />
					<OutrosFestivais />
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default App
