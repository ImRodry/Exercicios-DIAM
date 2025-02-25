import React from "react";

function SlideShow() {
    return (
		<section id="slideshow-container">
			<button class="arrow left" id="prev" onclick="changeImage(-1)">&#10094;</button>
			<figure>
				<a href="https://www.festivalvilardemouros.pt/" target="_blank">
					<img src="slideshow/imagem0.jpg" alt="Festival Vilar de Mouros" id="slideshow" /></a>
				<figcaption>Cartaz do Festival Vilar de Mouros</figcaption>
			</figure>
			<button class="arrow right" id="next" onclick="changeImage(1)">&#10095;</button>
		</section>
    )
}

export default SlideShow