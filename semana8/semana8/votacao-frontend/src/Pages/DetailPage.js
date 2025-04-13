import moment from "moment"
import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router"
import { Button, Container, Form, FormGroup, Table } from "reactstrap"
import { API_URL } from "../index"

const URL_OPTIONS = API_URL + "/options/"
function DetailPage() {
	const [optionList, setOptionList] = useState([])
	const navigate = useNavigate()
	const { state: question } = useLocation()
	if (!question) navigate("/")

	useEffect(() => {
		fetch(URL_OPTIONS + question.pk)
			.then(r => r.json())
			.then(data => setOptionList(data))
	}, [question])

	if (!question) return <p>Nenhuma questão selecionada.</p>

	return (
		<Container
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "50vh",
			}}
		>
			<h2>Detalhes da questão {question.pk}</h2>
			<Form>
				<FormGroup>
					<b>Texto:</b>
					<p>{question.questao_texto} </p>
					<b>Data de publicação:</b>
					<p>{moment(question.pub_data).format("DD-MM-YYYY HH:mm")}</p>
				</FormGroup>
				<FormGroup>
					<Table>
						<thead>
							<tr>
								<th style={{ textAlign: "left" }}>Opção</th>
								<th style={{ textAlign: "right" }}>Votos</th>
							</tr>
						</thead>
						<tbody>
							{optionList.map(o => (
								<tr>
									<td style={{ textAlign: "left" }}>{o.opcao_texto}</td>
									<td style={{ textAlign: "right" }}>{o.votos}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</FormGroup>
			</Form>
			<Button onClick={() => navigate("/")}>Voltar à página inicial</Button>
		</Container>
	)
}

export default DetailPage
