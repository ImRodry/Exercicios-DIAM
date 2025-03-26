import { useState } from 'react'
import { useNavigate } from 'react-router'
import artistasData from '../data/artistas.json'
import { useSubmissions } from '../pages/Context'

function FormInquerito() {
    const navigate = useNavigate()
    const { allSubmissions, setAllSubmissions } = useSubmissions()
    const [formData, setFormData] = useState({
        artistas: [],
        dataHora: '',
        criticas: ''
    })

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target
        setFormData((prevState) => {
            if (checked) {
                return {
                    ...prevState,
                    artistas: [...prevState.artistas, value]
                }
            } else {
                return {
                    ...prevState,
                    artistas: prevState.artistas.filter((artista) => artista !== value)
                }
            }
        })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.artistas.length === 0) {
            alert('Por favor, selecione pelo menos um artista.')
            return
        }
        setAllSubmissions(prev => [...prev, formData])
        navigate('/resposta', { state: formData })
    }

    const showStatistics = () => {
        navigate('/estatisticas', { state: { submissions: allSubmissions } })
    }

    return (
        <>
            <h2>Inquérito sobre o Festival</h2>
            <form onSubmit={handleSubmit}>
                <label>Artistas preferidos:</label><br />
                {artistasData.artistas.map((artista) => (
                    <div key={artista.nome}>
                        <input
                            type="checkbox"
                            id={artista.nome}
                            name="artistas"
                            value={artista.nome}
                            checked={formData.artistas.includes(artista.nome)}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor={artista.nome}>{artista.nome}</label><br />
                    </div>
                ))}
                <br />
                <label htmlFor="dataHora">Dia e horário preferidos:</label><br />
                {artistasData.artistas.map((artista) => (
                    <div key={artista.dataHora}>
                        <input
                            type="radio"
                            name="dataHora"
                            value={artista.dataHora}
                            checked={formData.dataHora === artista.dataHora}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor={artista.dataHora}>{artista.dataHora}</label><br />
                    </div>
                ))}
                <br />
                <label htmlFor="criticas">Críticas ou sugestões:</label><br />
                <input
                    type="text"
                    id="criticas"
                    name="criticas"
                    value={formData.criticas}
                    onChange={handleChange}
                    size="50"
                    placeholder="Escreva as suas críticas ou sugestões"
                /><br /><br />

                <input
                    type="submit"
                    value="Submeter"
                />
                <button
                    type="button"
                    onClick={showStatistics}
                >
                    Ver Estatísticas
                </button>
            </form>
        </>
    )
}

export default FormInquerito
