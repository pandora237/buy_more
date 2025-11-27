export function builderProductsFirst(product) {
    let rateHtml = ''
    for (let i = 1; i <= 5; i++) {
        rateHtml += `<i class="fa-${i < product.rate ? 'solid' : 'regular'} fa-star"></i>`
    }
    return `
                <article class="product-card">
                    <img src="${product.img}" alt="${product.nom}">
                    <h3>${product.nom}</h3>
                    <p class="descript">${sliceText(product.description, 70)}</p>
                    <div class="rate-content">
                       ${rateHtml}
                    </div>
                    <p class="price">${product.prix}FCFA</p>
                    <a href="/pages/produit.html?id=${product.id}" class="btn btn-secondary">Découvrir</a>
                </article> 
        `
}