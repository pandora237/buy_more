import { builderProductsFirst, stopPageLoage } from "./helpers.js";

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query');

if (!query) {
    window.location.href = '/index.html';
}

const produits = db.products.filter(p =>
    p.nom.toLocaleLowerCase().includes(query.toLocaleLowerCase())
) ?? [];

console.log(produits);

const resultsPageHtml = document.querySelector('#results-page');

let _buildItems = '';
produits.forEach(p => {
    _buildItems += builderProductsFirst(p);
});

const noResultsHtml = !produits.length > 0
    ? `<div class="not-result">
            <i class="fa-solid fa-circle-exclamation fa-3x"></i>
            <p>Aucun résultat pour "${query}"</p>
            <a class="btn btn-primary" href="/">Go home</a>
       </div>`
    : '';

resultsPageHtml.innerHTML = `
    <h1 class="title">Résultats de recherche de <span>"${query}"</span></h1>
    <p class="results-count">${produits.length} produit${produits.length > 1 ? 's' : ''} trouvés</p>
    <div class="products-grid">
        ${_buildItems}
    </div>
    ${noResultsHtml}
`;


stopPageLoage()