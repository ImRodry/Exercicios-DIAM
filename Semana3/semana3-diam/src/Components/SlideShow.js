import React, { useState } from 'react';

function SlideShow() {
	const [currentImgIndex, setCurrentImgIndex] = useState(0);
	const totalImages = 5;

	const changeImage = (step) => {
		setCurrentImgIndex((prevIndex) => (prevIndex + step + totalImages) % totalImages);
	};

	return (
		<section id="slideshow-container">
			<button class="arrow left" onClick={() => changeImage(-1)}>❮</button>
			<figure>
				<a href="https://www.festivalvilardemouros.pt/" target="_blank" rel="noopener noreferrer">
					<img
						src={`slideshow/imagem${currentImgIndex}.jpg`}
						alt="Festival Vilar de Mouros"
						id="slideshow"
					/>
				</a>
			</figure>
			<button class="arrow right" onClick={() => changeImage(1)}>❯</button>
		</section>
	);
}

export default SlideShow