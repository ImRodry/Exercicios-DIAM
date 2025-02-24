const insultos = [
	"abécula",
	"abentesma",
	"achavascado",
	"alimária",
	"andrajoso",
	"barregã",
	"biltre",
	"cacóstomo",
	"cuarra",
	"estólido",
	"estroso",
	"estultilóquio",
	"nefelibata",
	"néscio",
	"pechenga",
	"sevandija",
	"somítico",
	"tatibitate",
	"xexé",
	"cheché",
	"xexelento",
]

const comentario = document.getElementById("comentario")

function checkComment() {
	if (insultos.some(i => comentario.value.toLowerCase().includes(i))) {
		alert("O comentário não deve incluir insultos")
		comentario.value = ""
		return false
	}
	return true
}
