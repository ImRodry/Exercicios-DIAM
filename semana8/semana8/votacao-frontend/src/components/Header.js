import { Container } from "reactstrap"

function Header() {
	return (
		<>
			<Container className="container">
				<img
					src="/images/iscte.png"
					width="600"
					alt="ISCTE"
					className="img-thumbnail"
				/>
				<h2>Integração de Django com React</h2>
			</Container>
		</>
	)
}

export default Header
