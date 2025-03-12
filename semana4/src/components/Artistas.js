import React from "react"
import artistasData from "../data/artistas.json"
import "./Artistas.css"

function Artistas() {
	const toggleVideo = index => {
		const videoElement = document.getElementById(`video-${index}`)
		if (videoElement.style.display === "none" || videoElement.style.display === "") {
			videoElement.style.display = "block"
		} else {
			videoElement.style.display = "none"
		}
	}

	return (
		<section id="artistas">
			<h2>Artistas do Festival</h2>
			<div className="artistas-container">
				{artistasData.artistas.map((artista, index) => (
					<div key={index} className="artista-card">
						<h3>{artista.nome}</h3>
						<img
							src={artista.imagem}
							alt={artista.nome}
							className="artista-imagem"
							onClick={() => toggleVideo(index)}
							style={{ cursor: "pointer" }}
						/>
						<p>
							<strong>Estilo: </strong>
							{artista.estilo}
						</p>
						<p>{artista.descricao}</p>
						<p>
							<strong>Atuação: </strong>
							{artista.datahora}
						</p>

						<iframe
							id={`video-${index}`}
							width="300"
							height="169"
							src={artista.video}
							title={artista.nome}
							allowFullScreen
							style={{ display: "none", border: "none" }}
						></iframe>
					</div>
				))}
			</div>
		</section>
	)
}

export default Artistas
