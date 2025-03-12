import React, { Component } from "react";
import "./Programa.css";

const artistasData = require("../data/artistas.json"); // Importa o JSON

class ListaArtistas extends Component {
    toggleVideo = (index) => {
        const videoElement = document.getElementById(`video-${index}`);
        // Alterna a visibilidade do vídeo
        if (videoElement.style.display === "none" || videoElement.style.display === "") {
            videoElement.style.display = "block";
        } else {
            videoElement.style.display = "none";
        }
    };

    render() {
        return (
            <section className="lista-artistas">
                <h2>Artistas do Festival</h2>
                <div className="artistas-container">
                    {artistasData.artistas.map((artista, index) => (
                        <div key={index} className="artista-card">
                            <h3>{artista.nome}</h3>
                            <img
                                src={artista.imagem}
                                alt={artista.nome}
                                className="artista-imagem"
                                onClick={() => this.toggleVideo(index)} // Chama a função ao clicar
                                style={{ cursor: "pointer" }}
                            />
                            <p><strong>Estilo: </strong>{artista.estilo}</p>
                            <p>{artista.descricao}</p>
                            <p><strong>Atuação: </strong>{artista.datahora}</p>

                            <iframe
                                id={`video-${index}`} // ID único para cada vídeo
                                width="300"
                                height="169"
                                src={artista.video}
                                title={artista.nome}
                                frameBorder="0"
                                allowFullScreen
                                style={{ display: "none" }} // Inicialmente escondido
                            ></iframe>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default ListaArtistas;
