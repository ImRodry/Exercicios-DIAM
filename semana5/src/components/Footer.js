import { memo } from "react"

function Footer() {
	return (
		<footer className="content" id="contactos">
			<h2>Contactos</h2>
			<p>Para mais informações, contacte a organização do festival:</p>
			<p>
				Email: <a href="mailto:info@festivalvilardemouros.pt">info@festivalvilardemouros.pt</a>
			</p>
		</footer>
	)
}

export default memo(Footer)
