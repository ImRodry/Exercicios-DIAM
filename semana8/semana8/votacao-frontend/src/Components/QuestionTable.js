import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Button, Table } from "reactstrap"
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
	return (
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
	)
}

export default QuestionTable
