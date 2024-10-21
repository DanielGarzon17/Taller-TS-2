import { data } from './data.js';
var table = document.getElementById('rows');
var average = (data.reduce(function (acc, serie) { return acc + serie.seasons; }, 0) / data.length);
var cardMovie = document.getElementById('cardMovie');
var MovieImage = document.getElementById('MovieImage');
var MovieTitle = document.getElementById('MovieTitle');
var MovieDescription = document.getElementById('MovieDescription');
var MovieLink = document.getElementById('MovieLink');
data.forEach(function (series) {
    var row = table.insertRow();
    row.innerHTML = "<th  scope=\"row\">".concat(series.id, "</th>\n                     <td><a href=\"").concat(series.website, "\" class=\"text-decoration-none\">").concat(series.title, "</a></td>\n                     <td>").concat(series.network, "</td>\n                     <td>").concat(series.seasons, "</td>");
    row.addEventListener('click', function () {
        MovieImage.src = series.image;
        MovieImage.alt = "Image of ".concat(series.title);
        MovieTitle.textContent = series.title;
        MovieDescription.textContent = series.description;
        MovieLink.href = series.website;
    });
});
var row = table.insertRow();
row.innerHTML = "<td class=\"table-active\" colspan=\"4\">Seasons Average: ".concat(average, "</td>");
