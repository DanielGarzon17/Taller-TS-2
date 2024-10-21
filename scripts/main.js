import { data } from './data.js';
var table = document.getElementById('rows');
var average = (data.reduce(function (acc, serie) { return acc + serie.seasons; }, 0) / data.length);
var cardMovie = document.getElementById('cardMovie');
var MovieImage = document.getElementById('MovieImage');
var MovieTitle = document.getElementById('MovieTitle');
var MovieDescription = document.getElementById('MovieDescription');
var MovieLink = document.getElementById('MovieLink');
data.forEach(function (serie) {
    var row = table.insertRow();
    row.innerHTML = "<th  scope=\"row\">".concat(serie.id, "</th>\n                     <td><a href=\"").concat(serie.website, "\" class=\"text-decoration-none\">").concat(serie.title, "</a></td>\n                     <td>").concat(serie.network, "</td>\n                     <td>").concat(serie.seasons, "</td>");
    row.addEventListener('click', function () {
        MovieImage.src = serie.image;
        MovieImage.alt = "Image of ".concat(serie.title);
        MovieTitle.textContent = serie.title;
        MovieDescription.textContent = serie.description;
        MovieLink.href = serie.website;
    });
});
var row = table.insertRow();
row.innerHTML = "<td class=\"table-active\" colspan=\"4\">Seasons Average: ".concat(average, "</td>");
