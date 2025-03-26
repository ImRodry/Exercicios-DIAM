import { useLocation } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Resposta() {
    const location = useLocation()
    const formData = location.state || {}

    return (
        <div className="page-wrapper">
            <Header />
            <main className="main-content">
                <h2>Resposta Submetida</h2>
                <p>Artistas Preferidos: {formData.artistas.join(', ')}</p>
                <p>Horário Preferido: {formData.dataHora}</p>
                <p>Críticas/Sugestões: {formData.criticas || 'Sem críticas ou sugestões'}</p>
            </main>
            <Footer />
        </div>
    )
}

export default Resposta
