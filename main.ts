import { data } from './data.js';

const table:HTMLTableElement = document.getElementById('rows') as HTMLTableElement;

let average = (data.reduce((acc, serie) => acc + serie.seasons, 0) / data.length);

const cardMovie:HTMLElement = document.getElementById('cardMovie') as HTMLElement;
const MovieImage:HTMLImageElement = document.getElementById('MovieImage') as any;
const MovieTitle:HTMLElement = document.getElementById('MovieTitle') as HTMLElement;
const MovieDescription:HTMLElement = document.getElementById('MovieDescription') as HTMLElement;
const MovieLink:HTMLAnchorElement = document.getElementById('MovieLink') as HTMLAnchorElement;

data.forEach(serie => {
    const row:HTMLTableRowElement = table.insertRow();
    row.innerHTML = `<th  scope="row">${serie.id}</th>
                     <td><a href="${serie.website}" class="text-decoration-none">${serie.title}</a></td>
                     <td>${serie.network}</td>
                     <td>${serie.seasons}</td>`;
    row.addEventListener('click', () => {
        MovieImage.src = serie.image;
        MovieImage.alt = `Image of ${serie.title}`
        MovieTitle.textContent = serie.title;
        MovieDescription.textContent = serie.description;
        MovieLink.href = serie.website;
    });
});

const row:HTMLTableRowElement = table.insertRow();
row.innerHTML = `<td class="table-active" colspan="4">Seasons Average: ${average}</td>`;    