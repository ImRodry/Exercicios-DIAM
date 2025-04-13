import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import { Button, Form, FormGroup, Table, Label, Container } from "reactstrap"
import moment from "moment"
import { API_URL } from "../config"

const URL_OPTIONS = API_URL + "/options/"
const URL_OPTION = API_URL + "/option/"
function VotePage() {
	const { state: question } = useLocation()
	const navigate = useNavigate()
	if (!question) navigate("/")
	const [optionList, setOptionList] = useState([])
	const [selectedOption, setSelectedOption] = useState(null)

	const handleSubmit = event => {
		event.preventDefault()
		if (!selectedOption) {
			alert("Selecione uma opção antes de votar.")
			return
		}
		const option = optionList.find(o => o.pk === selectedOption)
		option.votos++
		fetch(URL_OPTION + selectedOption, {
			method: "PUT",
			body: JSON.stringify(option),
			headers: { "Content-Type": "application/json" },
		})
		alert(`Voto registado para a opção: ${option.opcao_texto}`)
		navigate("/")
	}

	useEffect(() => {
		fetch(URL_OPTIONS + question.pk)
			.then(r => r.json())
			.then(data => {
				setOptionList(data)
			})
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
			<h2>Voto na questão {question.pk}</h2>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<b>Texto:</b>
					<p>{question.questao_texto}</p>
					<b>Data de publicação:</b>
					<p>{moment(question.pub_data).format("DD-MM-YYYY HH:mm")}</p>
				</FormGroup>
				<FormGroup>
					<Table>
						<thead>
							<tr>
								<th align="left">Opção</th>
							</tr>
						</thead>
						<tbody>
							{optionList.map(o => (
								<tr key={o.pk}>
									<td align="left">
										<FormGroup check>
											<Label>
												<input
													type="radio"
													name="react-radio"
													checked={selectedOption === o.pk}
													value={o.pk}
													className="form-check-input"
													onChange={event => setSelectedOption(parseInt(event.target.value))}
												/>
												{o.opcao_texto}
											</Label>
										</FormGroup>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</FormGroup>
				<div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
					<Button onClick={() => navigate("/")}>Voltar</Button>
					<Button type="submit" color="primary">
						Votar
					</Button>
				</div>
			</Form>
		</Container>
	)
}

export default VotePage
