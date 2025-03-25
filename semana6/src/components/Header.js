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
							<button onClick={() => navigate("/")}>Página Principal</button>
						</li>
						<li>
							<button onClick={() => navigate("/formulario")}>Formulário de Inscrição</button>
						</li>
						<li>
							<button onClick={() => navigate('/inquerito')}>Inquérito</button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default memo(Header)
