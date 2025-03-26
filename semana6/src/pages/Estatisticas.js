import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLocation } from 'react-router'

function Estatisticas() {
    const location = useLocation()
    const allSubmissions = location.state || []
    
    const getArtistStats = () => {
        const artistCount = {}
        allSubmissions.forEach(submission => {
            submission.artistas.forEach(artista => {
                artistCount[artista] = (artistCount[artista] || 0) + 1
            })
        })
        return artistCount
    }

    const getScheduleStats = () => {
        const scheduleCount = {}
        allSubmissions.forEach(submission => {
            scheduleCount[submission.dataHora] = (scheduleCount[submission.dataHora] || 0) + 1
        })
        return scheduleCount
    }

    return (
        <div className="conteudo-principal">
            <Header />
            <main className="main-content">
                <h2>Estatísticas dos Inquéritos</h2>

                {allSubmissions.length === 0 ? (
                    <p>Ainda não há submissões para exibir estatísticas.</p>
                ) : (
                    <>
                        <h3>Artistas preferidos:</h3>
                        <ul>
                            {Object.keys(getArtistStats()).map(artista => (
                                <li key={artista}>{artista}: {getArtistStats()[artista]} vez(es)</li>
                            ))}
                        </ul>

                        <h3>Horários preferidos:</h3>
                        <ul>
                            {Object.keys(getScheduleStats()).map(horario => (
                                <li key={horario}>{horario}: {getScheduleStats()[horario]} vez(es)</li>
                            ))}
                        </ul>

                        <h3>Críticas submetidas:</h3>
                        <ul>
                            {allSubmissions.map((submission, index) => (
                                <li key={index}>
                                    {submission.criticas || 'Sem crítica'}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </main>
            <Footer />
        </div>
    )
}

export default Estatisticas
