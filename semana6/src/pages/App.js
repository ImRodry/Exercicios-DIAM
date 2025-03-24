import Header from "../components/Header"
import Informacoes from "../components/Informacoes"
import OutrosFestivais from "../components/OutrosFestivais"
import Footer from "../components/Footer"
import ListaArtistas from "../components/ListaArtistas"
import BarraLateral from "../components/BarraLateral"
import "../styles/style.css"

function App() {
	return (
		<div className="app-container">
			<BarraLateral />
			<main className="conteudo-principal">
				<Header />
				<div className="main-content">
					<Informacoes />
					<ListaArtistas />
					<OutrosFestivais />
				</div>
				<Footer />
			</main>
		</div>
	)
}

export default App
