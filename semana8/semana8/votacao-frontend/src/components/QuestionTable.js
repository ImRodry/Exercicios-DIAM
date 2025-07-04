import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Button, Container, Table } from "reactstrap"
import { API_URL } from "../config"

function QuestionTable() {
	const URL_QUESTIONS = API_URL + "/questions/"
	const [questionList, setQuestionList] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		fetch(URL_QUESTIONS)
			.then(r => r.json())
			.then(data => setQuestionList(data))
	}, [URL_QUESTIONS])
	const centered = { textAlign: "center" }

	const [newQuestionText, setNewQuestionText] = useState("")

	const createNewQuestion = async () => {
		if (!newQuestionText.trim()) {
			alert("Insira o texto da questão.")
			return
		}
		const newQuestion = {
			questao_texto: newQuestionText,
			pub_data: new Date().toISOString(),
		}
		const newQuestionData = await fetch(URL_QUESTIONS, {
			method: "POST",
			body: JSON.stringify(newQuestion),
			headers: { "Content-Type": "application/json" },
		}).then(r => r.json())
		setQuestionList([...questionList, newQuestionData])
		setNewQuestionText("")
	}
	return (
		<Container className="container">
			<b>Criar nova questão</b>
			<input
				type="text"
				value={newQuestionText}
				onChange={e => setNewQuestionText(e.target.value)}
				placeholder="Texto da nova questão"
				className="form-control"
			/>
			<Button onClick={createNewQuestion} color="primary" style={{ marginTop: "5px" }}>
				Criar nova questão
			</Button>

			<Table light="true">
				<thead>
					<tr>
						<th>Texto</th>
						<th style={centered}>Controls</th>
					</tr>
				</thead>
				<tbody>
					{questionList.map(question => (
						<tr key={question.pk}>
							<td>{question.questao_texto}</td>
							<td style={centered}>
								<Button onClick={() => navigate("/detalhes", { state: question })} color="warning">
									Detalhes
								</Button>
								&nbsp;
								<Button onClick={() => navigate("/votacao", { state: question })} color="success">
									Votar
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	)
}

export default QuestionTable
