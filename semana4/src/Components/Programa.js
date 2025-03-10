import React, { useEffect, useState } from "react";

function ProgramaFestival() {
    const [artistas, setArtistas] = useState([]);

    useEffect(() => {
        fetch("/artistas.json")
            .then((response) => response.json())
            .then((data) => setArtistas(data.artistas))
            .catch((error) => console.error("Erro ao carregar os artistas:", error));
    }, []);

    return (
        <section id="programa">
            <h1>Programa do Festival</h1>
            {artistas.map((artista, index) => (
                <div key={index} className="artista">
                    <h2>{artista.nome}</h2>
                    <img src={artista.imagem} alt={artista.nome} />
                    <p><strong>Estilo:</strong> {artista.estilo}</p>
                    <p>{artista.descricao}</p>
                    <p><strong>Atuação:</strong> {artista.datahora}</p>
                </div>
            ))}
        </section>
    );
}

export default ProgramaFestival;
