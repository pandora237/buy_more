


function listeCategoriesFitre(){
    let selectFiltre = document.getElementById("categorie")

    db.categories.forEach(c =>{
        let option = document.createElement("option")
        option.value = c.id
        option.textContent = c.title
        selectFiltre.appendChild(option)
    })
}


function range(produits){
    const produitMin = produits.reduce((min, p) => p.prix < min.prix ? p : min);
    const produitMax = produits.reduce((max, p) => p.prix > max.prix ? p : max);
    let minRange = document.getElementById("minRange")
    minRange.min = produitMin.prix
    minRange.max = produitMax.prix
    minRange.value = produitMax.prix
    let liste = document.getElementById("values")
    

    liste.innerHTML = `
        <option value="${minRange.min}" label="${minRange.min}F"></option>
        <option value="${minRange.max }" label="${minRange.max}F"></option>
    `
    
    let value = document.querySelector(".slider-container span")
    value.innerText = `prix-max : ${minRange.value}F`;
    listingProduits(filterPrice(produits,minRange.value))
    minRange.addEventListener("input", (event) => {
        value.innerText = `prix-max : ${event.target.value}F`;
    });
    minRange.addEventListener("change", () => {
        listingProduits(filterPrice(produits,minRange.value))
    });

    
}
function filterPrice(produits, value){
    return produits.filter(p => p.prix <= value )
}

listeCategoriesFitre()

let produits = db.products

function listingProduits(produits){
    let contentProduct = document.querySelector(".content-product")
    let divProducts = ''
    produits.forEach(produit => {
       
        divProducts +=  `
                <div class="box" id="produit-${produit.id}">
                        
                            <div class="image"><img src="${produit.img}"></div>
                            <div class="content">
                                <div class="description">
                                    <h3><a href="">${produit.nom}</a></h3>
                                    <p >${produit.description}</p>
                                    <div class="rate">
                                        <div class="stars-text">
                                            <div class="stars-back">★★★★★</div>
                                            <div class="stars-front">★★★★★</div>
                                        </div>
                                        <div class="rating"> ${produit.rate}</div>
                                        
                                    </div>

                                    <p class="price">${produit.prix} ${produit.devise}</p>
                                </div>
                                <a href="produit.html?id=${produit.id}" class="btn btn-secondary position-btn">Decouvrir</a>
                            </div>
                        
                    </div>
        `
       
        
        
    }) 

    contentProduct.innerHTML = divProducts

    const maxStars = 5;
    produits.forEach(produit => {
        const starsFront = document.querySelector(`#produit-${produit.id} .stars-front`);
        
        starsFront.style.width = `${(produit.rate / maxStars) * 100}%`;
    });

     
}

listingProduits(produits)
range(produits)

function filtrerProduitsParCategorie() {
    if(categorie.value === ""){
        let produits = db.products;
        listingProduits(produits);
        range(produits);
    } else {
        let idCategorie = Number(categorie.value);
        let id_produits_Categorie = db.produit_categorie.filter(
            p => p.id_cat === idCategorie
        );

        let produits = db.products.filter(p =>
            id_produits_Categorie.some(item =>
                item.id_cat === idCategorie && item.id_prod === p.id
            )
        );

        listingProduits(produits);
        range(produits);
    }
}


let categorie = document.getElementById("categorie")

const params = new URLSearchParams(window.location.search);
const idCat = params.get('id_cat');
categorie.value = idCat ;


categorie.addEventListener("change", filtrerProduitsParCategorie);
filtrerProduitsParCategorie(); 












