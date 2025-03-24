import { memo } from "react"
import { useNavigate } from "react-router"

function Header() {
	const navigate = useNavigate()

	return (
		<header className="content" id="cabecalho">
			<div className="header-container">
				<nav id="menu">
					<ul>
						<li>
							<button onClick={() => navigate("/")}>Página principal</button>
						</li>
						<li>
							<button onClick={() => navigate("/form")}>Formulário de Inscrição</button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default memo(Header)
