import { useState } from "react"
import { memo } from "react"

function Header() {
	const [opacity, setOpacity] = useState(1)

	const handleMouseOver = () => setOpacity(0)
	const handleMouseLeave = () => setOpacity(1)

	return (
		<header className="content" id="cabecalho">
			<figure
				id="imagemFestival"
				style={{ opacity }}
				onMouseOver={handleMouseOver}
				onMouseLeave={handleMouseLeave}
			>
				<img src="header.png" alt="Festival Vilar de Mouros" />
			</figure>
			<nav id="menu">
				<ul>
					<li>
						<a href="/">Página principal</a>
					</li>
					<li>
						<a href="/form">Formulário de Inscrição</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default memo(Header)
