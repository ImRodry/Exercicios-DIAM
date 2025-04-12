import { Container, Row, Col } from "reactstrap"
import Header from "../Components/Header"
import QuestionTable from "../Components/QuestionTable"

function Home() {
	return (
		<>
			<Header />
			<Content />
		</>
	)
}

function Content() {
	return (
		<Container style={{ marginTop: "20px", maxWidth: "800px" }}>
			<Row>
				<Col>
					<QuestionTable />
				</Col>
			</Row>
		</Container>
	)
}

export default Home
