import React from "react"

function Header() {
	return (
		<header className="content" id="cabecalho">
			<figure id="imagemFestival">
				<img src="header.png" alt="Festival Vilar de Mouros" />
			</figure>
			<nav id="menu">
				<ul>
					<li>
						<a href="#cabecalho">Página principal</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
