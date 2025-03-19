import { memo } from "react"

function Header() {
    return (
        <header className="content" id="cabecalho">
            <div className="header-container">
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
            </div>
        </header>
    )
}

export default memo(Header)
