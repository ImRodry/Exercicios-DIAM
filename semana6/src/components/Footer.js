import { memo, useState } from "react"

function Footer() {
	const [showAuthors, setShowAuthors] = useState(false)

	const handleClick = () => {
		setShowAuthors(!showAuthors)
	}

	return (
		<footer
			className="content"
			id="contactos"
			onClick={handleClick}
			style={{ cursor: 'pointer' }}
		>
			<h2>Contactos</h2>
			<p>Para mais informações, contacte a organização do festival:</p>
			<p>
				Email: <a href="mailto:info@festivalvilardemouros.pt">info@festivalvilardemouros.pt</a>
			</p>
			{showAuthors && (
				<><h3>Desenvolvido por:</h3><p>Eduardo Pio & Gonçalo Ribeiro & Rodrigo Leitão</p></>
			)}
		</footer>
	)
}

export default memo(Footer)
