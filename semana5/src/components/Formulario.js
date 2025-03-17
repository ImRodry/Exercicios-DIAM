import { useState } from "react"

const insultos = [
	"abécula",
	"abentesma",
	"achavascado",
	"alimária",
	"andrajoso",
	"barregã",
	"biltre",
	"cacóstomo",
	"cuarra",
	"estólido",
	"estroso",
	"estultilóquio",
	"nefelibata",
	"néscio",
	"pechenga",
	"sevandija",
	"somítico",
	"tatibitate",
	"xexé",
	"cheché",
	"xexelento",
]

function Formulario() {
	const [comentario, setComentario] = useState("")
	const [isFormVisible, setIsFormVisible] = useState(false)

	const checkComment = e => {
		e.preventDefault()
		if (insultos.some(i => comentario.toLowerCase().includes(i))) {
			alert("O comentário não deve incluir insultos")
			setComentario("")
			return false
		}
		alert("Formulário submetido com sucesso!")
		e.target.reset()
		setComentario("")
		setIsFormVisible(false)
		return true
	}

	const toggleFormVisibility = () => {
		setIsFormVisible(!isFormVisible)
	}

	return (
		<div>
			<h2 id="formulario">Formulário de Inscrição</h2>
			<button id="button" onClick={toggleFormVisibility}>
				{isFormVisible ? "Ocultar Formulário" : "Mostrar Formulário"}
			</button>
			<br />
			<br />
			{isFormVisible && (
				<form onSubmit={checkComment} autoComplete="on">
					<label htmlFor="nome">Nome:</label>
					<br />
					<input type="text" id="nome" name="nome" required />
					<br />
					<br />
					<label htmlFor="contacto">Contacto:</label>
					<br />
					<input type="tel" id="contacto" name="contacto" pattern="(\+[0-9]{0,3}\s?)?([0-9]\s?)+" required />
					<br />
					<br />
					<label>Dias disponível:</label>
					<br />
					<input type="checkbox" id="dia1" name="dia1" />
					<label htmlFor="dia1">21 de agosto de manhã</label>
					<br />
					<input type="checkbox" id="dia2" name="dia2" />
					<label htmlFor="dia2">21 de agosto de tarde</label>
					<br />
					<input type="checkbox" id="dia3" name="dia3" />
					<label htmlFor="dia3">22 de agosto de manhã</label>
					<br />
					<input type="checkbox" id="dia4" name="dia4" />
					<label htmlFor="dia4">22 de agosto de tarde</label>
					<br />
					<input type="checkbox" id="dia5" name="dia5" />
					<label htmlFor="dia5">23 de agosto de manhã</label>
					<br />
					<input type="checkbox" id="dia6" name="dia6" />
					<label htmlFor="dia6">23 de agosto de tarde</label>
					<br />
					<input type="checkbox" id="dia7" name="dia7" />
					<label htmlFor="dia7">24 de agosto de manhã</label>
					<br />
					<input type="checkbox" id="dia8" name="dia8" />
					<label htmlFor="dia8">24 de agosto de tarde</label>
					<br />
					<br />
					<label htmlFor="comentario">Comentário:</label>
					<br />
					<input
						type="text"
						id="comentario"
						name="comentario"
						value={comentario}
						onChange={e => setComentario(e.target.value)}
					/>
					<br />
					<br />
					<input type="submit" value="Submeter" id="button" />
				</form>
			)}
		</div>
	)
}

export default Formulario
