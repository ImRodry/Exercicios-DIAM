import { useState } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"

function Formulario() {
    const [formData, setFormData] = useState({
        nome: '',
        contacto: '',
        comentario: '',
        days: Array(8).fill(false) // Simplified array initialization
    })
    
    const insultos = [
        "abécula", "abentesma", "achavascado", "alimária", "andrajoso",
        "barregã", "biltre", "cacóstomo", "cuarra", "estólido",
        "estroso", "estultilóquio", "nefelibata", "néscio", "pechenga",
        "sevandija", "somítico", "tatibitate", "xexé", "cheché", "xexelento"
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleCheckboxChange = (index) => {
        setFormData(prev => {
            const newDays = [...prev.days]
            newDays[index] = !newDays[index]
            return {
                ...prev,
                days: newDays
            }
        })
    }

    const hasInsults = () => {
        const commentWords = formData.comentario.toLowerCase()
        return insultos.some(insulto => commentWords.includes(insulto))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        alert(`Obrigado ${formData.nome} pela sua inscrição, em breve será contactado pela organização do festival`)
        setFormData({
            nome: '',
            contacto: '',
            comentario: '',
            days: Array(8).fill(false)
        })
    }

    return (
        <div className="main-content">
            <Header />
            <main className="conteudo-principal">
                <h2>Formulário de Inscrição</h2>
                <form onSubmit={handleSubmit} autoComplete="on">
                    <label htmlFor="nome">Nome:</label><br />
                    <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        value={formData.nome}
                        onChange={handleInputChange}
                        required 
                    /><br /><br />
                    
                    <label htmlFor="contacto">Contacto:</label><br />
                    <input
                        type="tel"
                        id="contacto"
                        name="contacto"
                        pattern="(\+[0-9]{0,3}\s?)?([0-9]\s?){9}"
                        value={formData.contacto}
                        onChange={handleInputChange}
                        required
                    /><br /><br />
                    
                    <label>Dias disponível:</label><br />
                    {[
                        "21 de agosto de manhã",
                        "21 de agosto de tarde",
                        "22 de agosto de manhã",
                        "22 de agosto de tarde",
                        "23 de agosto de manhã",
                        "23 de agosto de tarde",
                        "24 de agosto de manhã",
                        "24 de agosto de tarde"
                    ].map((label, index) => (
                        <div key={`dia${index}`}>
                            <input 
                                type="checkbox" 
                                id={`dia${index}`} 
                                name={`dia${index}`}
                                checked={formData.days[index]}
                                onChange={() => handleCheckboxChange(index)}
                            />
                            <label htmlFor={`dia${index}`}>{label}</label><br />
                        </div>
                    ))}<br />
                    
                    <label htmlFor="comentario">Comentário:</label><br />
                    <input 
                        type="text" 
                        id="comentario" 
                        name="comentario"
                        value={formData.comentario}
                        onChange={handleInputChange}
                    /><br /><br />

                    <input 
                        type="submit" 
                        value="Submeter" 
                        disabled={hasInsults()}
                    />
                </form>
            </main>
            <Footer />
        </div>
    )
}

export default Formulario
