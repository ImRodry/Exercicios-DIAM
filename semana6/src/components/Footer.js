import { memo, useState } from "react"

function Footer() {
	const [showAuthors, setShowAuthors] = useState(false)

	return (
		<footer
			className="content"
			id="contactos"
			onClick={() => setShowAuthors(!showAuthors)}
			style={{ cursor: "pointer" }}
		>
			<h2>Contactos</h2>
			<p>Para mais informações, contacte a organização do festival:</p>
			<p>
				Email: <a href="mailto:info@festivalvilardemouros.pt">info@festivalvilardemouros.pt</a>
			</p>
			{showAuthors && (
				<>
					<h3>Desenvolvido por:</h3>
					<p>Eduardo Pio & Gonçalo Ribeiro & Rodrigo Leitão</p>
				</>
			)}
		</footer>
	)
}

export default memo(Footer)
