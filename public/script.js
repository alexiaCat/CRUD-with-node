const animeGenres = ['Shounen', 'Shojo', 'Seinen', 'Josei', 'Mecha'];
const fechaActual = new Date().getFullYear();
const anioMin = 1917;


let selectGen = document.getElementById("genero");

animeGenres.forEach(function (genero) {
    let option = document.createElement("option");
    option.value = genero;
    option.text = genero;
    selectGen.appendChild(option);
});

let inputAnio = document.getElementById("año");
inputAnio.max = fechaActual;
inputAnio.min = anioMin;


