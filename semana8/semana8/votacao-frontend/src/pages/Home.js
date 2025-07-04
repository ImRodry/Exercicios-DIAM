import { Container, Row, Col } from "reactstrap"
import QuestionTable from "../components/QuestionTable"

function Home() {
	return (
		<>
			<Content />
		</>
	)
}

function Content() {
	return (
		<Container className="container">
			<Row>
				<Col>
					<QuestionTable />
				</Col>
			</Row>
		</Container>
	)
}

export default Home
