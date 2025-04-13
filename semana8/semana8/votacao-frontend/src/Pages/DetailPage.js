import moment from "moment"
import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router"
import { Button, Container, Form, FormGroup, Table } from "reactstrap"
import { API_URL } from "../config"

const URL_OPTIONS = API_URL + "/options/"
function DetailPage() {
	const [optionList, setOptionList] = useState([])
	const [newOptionText, setNewOptionText] = useState("")
	const navigate = useNavigate()
	const { state: question } = useLocation()
	if (!question) navigate("/")

	const createNewOption = () => {
		if (!newOptionText.trim()) {
			alert("Texto da opção não pode estar vazio.")
			return
		}
		const newOption = {
			questao: question.pk,
			opcao_texto: newOptionText,
			votos: 0,
		}
		fetch(URL_OPTIONS + question.pk, {
			method: "POST",
			body: JSON.stringify(newOption),
			headers: { "Content-Type": "application/json" },
		})
			.then(() => fetch(URL_OPTIONS + question.pk))
			.then(r => r.json())
			.then(data => {
				setOptionList(data)
				setNewOptionText("")
			})
	}

	useEffect(() => {
		fetch(URL_OPTIONS + question.pk)
			.then(r => r.json())
			.then(data => setOptionList(data))
	}, [question])

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
			<Form style={{ width: "50%" }}>
				<FormGroup>
					<b>Texto:</b>
					<p>{question.questao_texto} </p>
					<b>Data de publicação:</b>
					<p>{moment(question.pub_data).format("DD-MM-YYYY HH:mm")}</p>
				</FormGroup>
				<FormGroup>
					<b>Adicionar nova opção:</b>
					<input
						type="text"
						value={newOptionText}
						onChange={e => setNewOptionText(e.target.value)}
						placeholder="Texto da nova opção"
						className="form-control"
					/>
					<Button onClick={createNewOption} color="success" style={{ marginTop: "5px" }}>
						Adicionar opção
					</Button>
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
