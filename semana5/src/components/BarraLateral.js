import { memo } from "react"

function BarraLateral() {
	return (
		<aside id="barraLateral">
			<ul>
				<li>
					<a href="#cabecalho">Festival</a>
				</li>
				<li>
					<a href="#informacoes">Informações</a>
				</li>
				<li>
					<a href="#artistas">Artistas</a>
				</li>
				<li>
					<a href="#outros">Outros festivais</a>
				</li>
				<li>
					<a href="#contactos">Contactos</a>
				</li>
			</ul>
		</aside>
	)
}

export default memo(BarraLateral)
