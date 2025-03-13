import React from "react"

class Artista extends React.Component {
	constructor(props) {
		super(props)
		this.videoRef = React.createRef()
	}

	toggleVideo() {
		const video = this.videoRef.current
		if (video.style.display === "none" || video.style.display === "") {
			video.style.display = "block"
		} else {
			video.style.display = "none"
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
					ref={this.videoRef}
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
