import React from "react"

function Artista({nome, imagem, estilo, descricao,urlvideo,datahora}) {
    return (
        <section id="artista">
            <h1>Artista</h1>
            <p>Nome: {nome}</p>
            <img src={imagem} />
            <p>Estilo Musical: {estilo}</p>
            <p>Descrição: {descricao}</p>
            <p>Atuação: {datahora}</p>
        </section>
    )
}

export default Artista
