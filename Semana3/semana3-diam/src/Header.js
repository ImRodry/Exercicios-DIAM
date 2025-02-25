import React from "react";

function Header() {
  return (
    <header class="content">
		<figure id="imagemFestival">
			<img src="header.png" />
		</figure>
		<nav id="menu">
			<ul>
				<li><a href="festival.html">Página principal</a></li>
				<li><a href="formulario.html">Formulário de Inscrição</a></li>
			</ul>
		</nav>
	</header>
  );
}

export default Header;
