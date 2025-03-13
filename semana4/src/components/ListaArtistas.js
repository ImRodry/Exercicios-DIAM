import React from "react"
import artistasData from "../data/artistas.json"
import "./Artistas.css"
import Artista from "./Artista"

function ListaArtistas() {
	return (
		<section id="artistas">
			<h2>Artistas do Festival</h2>
			<div className="artistas-container">
				{artistasData.artistas.map((artista, index) => (
					<Artista key={index} {...artista} index={index} />
				))}
			</div>
		</section>
	)
}

export default ListaArtistas
