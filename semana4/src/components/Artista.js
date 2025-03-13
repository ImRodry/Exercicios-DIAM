import React from "react"

class Artista extends React.Component {
	toggleVideo() {
		const videoElement = document.getElementById(`video-${this.props.index}`)
		if (videoElement.style.display === "none" || videoElement.style.display === "") {
			videoElement.style.display = "block"
		} else {
			videoElement.style.display = "none"
		}
	}

	render() {
		return (
			<div className="artista-card">
				<h3>{this.props.nome}</h3>
				<img
					src={this.props.imagem}
					alt={this.props.nome}
					className="artista-imagem"
					onClick={() => this.toggleVideo()}
					style={{ cursor: "pointer" }}
				/>
				<p>
					<strong>Estilo: </strong>
					{this.props.estilo}
				</p>
				<p>{this.props.descricao}</p>
				<p>
					<strong>Atuação: </strong>
					{this.props.dataHora}
				</p>

				<iframe
					id={`video-${this.props.index}`}
					width="300"
					height="169"
					src={this.props.video}
					title={this.props.nome}
					allowFullScreen
					style={{ display: "none", border: "none" }}
				></iframe>
			</div>
		)
	}
}

export default Artista
