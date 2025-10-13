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

    let liste = document.getElementById("values")
    let optionMin = document.createElement("option")
    let optionMax = document.createElement("option")
    

    optionMin.value = minRange.min
    optionMin.label = minRange.min

    optionMax.value = minRange.max
    optionMax.label = minRange.max

    liste.append(optionMin,optionMax)
    console.log(liste)
    let value = document.querySelector(".slider-container span")

    minRange.addEventListener("input", (event) => {
        value.textContent = event.target.value;
    });
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
        console.log(starsFront)
        starsFront.style.width = `${(produit.rate / maxStars) * 100}%`;
    });
}

listingProduits(produits)

let categorie = document.getElementById("categorie")

categorie.addEventListener("change", () => {
    if(categorie.value === ""){
        let produits = db.products
        listingProduits(produits)
        range(produits)
    }else{

        let idCategorie = Number(categorie.value)
        let id_produits_Categorie = db.produit_categorie.filter(p => p.id_cat === idCategorie)
        console.log(id_produits_Categorie)
        let i=0
        console.log(typeof db.products[0].id)
        let produits = db.products.filter(p => id_produits_Categorie.some( item => 
            item.id_cat === idCategorie && item.id_prod === p.id 
            
            ))
        console.log(produits)
        listingProduits(produits)
        range(produits)
    }
})



let minRange = document.getElementById("minRange")
let maxRange = document.getElementById("maxRange")

