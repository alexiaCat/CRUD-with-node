const animeGenres = ['Shounen', 'Shojo', 'Seinen', 'Josei', 'Mecha'];
const fechaActual = new Date().getFullYear();
const anioMin = 1917;

let inputAnio = document.getElementById("año");
inputAnio.max = fechaActual;
inputAnio.min = anioMin;

