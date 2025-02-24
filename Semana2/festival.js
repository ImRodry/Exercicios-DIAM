const imagem = document.getElementById("imagemFestival")
imagem.addEventListener("mouseover", () => {
	imagem.style.opacity = "0"
})
imagem.addEventListener("mouseleave", () => {
	imagem.style.opacity = "1"
})

let currentImgIndex = 0
const totalImages = 5
const slideshowImage = document.getElementById("slideshow")

function changeImage(step) {
	currentImgIndex = (currentImgIndex + step + totalImages) % totalImages
	slideshowImage.src = `slideshow/imagem${currentImgIndex}.jpg`
}
