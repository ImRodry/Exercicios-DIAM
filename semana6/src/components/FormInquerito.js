import { useState } from "react"
import { useNavigate } from "react-router"
import artistasData from "../data/artistas.json"

function FormInquerito() {
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		artistas: [],
		dataHora: "",
		criticas: "",
	})

	const getAllSubmissions = () => {
		const storedSubmissions = sessionStorage.getItem("submissions")
		return storedSubmissions ? JSON.parse(storedSubmissions) : []
	}

	const handleCheckboxChange = e => {
		const { value, checked } = e.target
		setFormData(prevState => {
			if (checked) {
				return {
					...prevState,
					artistas: [...prevState.artistas, value],
				}
			} else {
				return {
					...prevState,
					artistas: prevState.artistas.filter(artista => artista !== value),
				}
			}
		})
	}

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (!formData.artistas.length) {
			alert("Por favor, selecione pelo menos um artista.")
			return
		}

		const currentSubmissions = getAllSubmissions()
		const updatedSubmissions = [...currentSubmissions, formData]

		sessionStorage.setItem("submissions", JSON.stringify(updatedSubmissions))

		navigate("/resposta", { state: formData })
	}

	const showStatistics = () => {
		const currentSubmissions = getAllSubmissions()
		navigate("/estatisticas", { state: currentSubmissions })
	}

	return (
		<>
			<h2>Inquérito sobre o Festival</h2>
			<form onSubmit={handleSubmit}>
				<label>Artistas preferidos:</label>
				<br />
				{artistasData.artistas.map(artista => (
					<div key={artista.nome}>
						<input
							type="checkbox"
							id={artista.nome}
							name="artistas"
							value={artista.nome}
							checked={formData.artistas.includes(artista.nome)}
							onChange={handleCheckboxChange}
						/>
						<label htmlFor={artista.nome}>{artista.nome}</label>
						<br />
					</div>
				))}
				<br />
				<label htmlFor="dataHora">Dia e horário preferidos:</label>
				<br />
				{artistasData.artistas.map(artista => (
					<div key={artista.dataHora}>
						<input
							type="radio"
							id={artista.dataHora}
							name="dataHora"
							value={artista.dataHora}
							checked={formData.dataHora === artista.dataHora}
							onChange={handleChange}
							required
						/>
						<label htmlFor={artista.dataHora}>{artista.dataHora}</label>
						<br />
					</div>
				))}
				<br />
				<label htmlFor="criticas">Críticas ou sugestões:</label>
				<br />
				<textarea
					type="text"
					id="criticas"
					name="criticas"
					rows="4"
					cols="25"
					value={formData.criticas}
					onChange={handleChange}
				/>
				<br />
				<br />

				<button type="submit">Submeter</button>

				<button type="button" onClick={showStatistics}>
					Ver Estatísticas
				</button>
			</form>
		</>
	)
}

export default FormInquerito
