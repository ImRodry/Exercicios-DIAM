import React, { Component } from "react";
import "./Programa.css"; // Importa o CSS aqui
const artistasData = require("../data/artistas.json"); // Importação com require

class ListaArtistas extends Component {
    render() {
        return (
            <section className="lista-artistas">
                <h2>Artistas do Festival</h2>
                <div className="artistas-container">
                    {artistasData.artistas.map((artista, index) => (
                        <div key={index} className="artista-card">
                            <h3>{artista.nome}</h3>
                            <img src={artista.imagem} alt={artista.nome} className="artista-imagem" />
                            <p><strong>Estilo: </strong>{artista.estilo}</p>
                            <p>{artista.descricao}</p>
                            <p><strong>Atuação: </strong>{artista.datahora}</p>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default ListaArtistas;
