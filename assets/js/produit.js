import { stopPageLoage } from "./helpers.js";

const urlParams = new URLSearchParams(window.location.search);
const id_product = urlParams.get('id');
const produit = db.products.find(p => p.id == id_product)

if (!produit) {
    console.log('pas de produit')
    window.location.href = '/index.html'
}

const ContainerProduct = document.querySelector('#product-detail')
const containerDescript = document.querySelector('#description')
const popupOverlay = document.querySelector('#popup-overlay')

function addToCart(qty) {
    const state = {
        "id_prod": produit.id,
        "nom": produit.nom,
        "prix": produit.prix,
        "qty": qty,
        "devise": "XAF"
    }

    let cart = getCartUser()
    const products = cart.produits
    let isCart = false
    products.forEach(p => {
        if (p.id_prod == produit.id) {
            p.qty = parseInt(p.qty) + parseInt(qty)
            isCart = true
        }
    })

    if (!isCart) {
        products.push(state)
    }

    cart.products = products
    saveCartUser(cart)
    updateCountCartUser()
    popupAdd()
}

function popupAdd() {
    const html = ` 
       <div class="popup-content">
            <span>
                <svg width="60" height="60" viewBox="0 0 52 52">
                    <circle cx="26" cy="26" r="25" fill="none" stroke="#4BB543" stroke-width="2"/>
                    <path fill="none" stroke="#4BB543" stroke-width="4" d="M14 27l7 7 16-16">
                        <animate attributeName="stroke-dasharray" from="0,50" to="50,0" dur="0.5s" fill="freeze" />
                    </path>
                </svg>
            </span>
            <h1>Produit ajouté au panier avec succès !</h1>
            <div class="popup-btn">
                <a href="/pages/listeProduits.html">Continuer les achats</a>
                <a href="/pages/panier.html" class="btn btn-primary">Commander</a>
            </div>
        </div> 
    `
    popupOverlay.innerHTML = html
    popupOverlay.classList.remove('hidden')
}

function initProduct() {
    ContainerProduct.innerHTML = ''

    let _html = ''
    const imgs = [produit.img, ...produit?.img_collection ?? []]
    imgs.forEach((img, i) => {
        _html += `<img class="thumbnail ${i == 0 ? 'active' : ''}" src="${img}" alt="Thumbnail ${img}"  onclick="changeImage(this)" >`
    });
    const content = `
        <div class="product-gallery">
            <div class="main-image">
                <img id="mainImage" src="${produit.img}" alt="${produit.nom}">
            </div>
            <div class="thumbnail-container">
               ${_html}
            </div>
        </div>

        <div class="product-info">
            <h1>${produit.nom}</h1>
            <p class="brand">Marque: <strong>Apple</strong></p>
            <div class="rating">
                <span class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </span>
                <span class="reviews">(128 avis)</span>
            </div>
            <p class="price">${produit.prix}FCFA</p>
            <p class="availability">Disponible en stock</p>

            <div class="product-options"> 

                <label for="quantity">Quantité:</label>
                <input type="number" id="quantity" name="quantity" value="1" min="1" max="${produit.qty}">
            </div>

            <div class="action-buttons">
                <button type="submit" class="btn-add-to-cart"><i class="fas fa-shopping-cart"></i> Ajouter au panier</button>
                <a href="https://wa.me/23781050506" class="btn btn-buy-now">
                            <i class="fab fa-whatsapp"></i>
                            Chat sur WhatsApp
                        </a>
                <button class="btn-wishlist"><i class="far fa-heart"></i> Ajouter aux favoris</button>
            </div>
        </div>
    `
    ContainerProduct.innerHTML = content

    if (containerDescript) {
        containerDescript.innerHTML = `
        <h2>Description du produit</h2>
        <p>${produit?.description || ''}</p>
    `;
    }

    const form = document.querySelector('#product-detail')
    form?.addEventListener('submit', (e) => {
        e.preventDefault()
        const user = getUser()
        if (!user) {
            window.location.href = `/pages/connexion.html?redirect=${window.location.href}`
        }
        const formData = new FormData(e.target)
        const quantity = formData.get('quantity')
        addToCart(quantity)
    })


    popupOverlay.addEventListener('click', (e) => {
        const target = e.target
        if (target.id === 'popup-overlay') {
            popupOverlay.classList.add('hidden')
        }
    })

}

initProduct()




// Fonction pour changer d'onglet 
const tabButtons = document.querySelectorAll('.tab-button');

tabButtons.forEach(tab => {
    tab.addEventListener('click', e => {
        openTab(e);
    });
});

function openTab(e) {
    const targetId = e.currentTarget.dataset.id;

    tabButtons.forEach(btn => btn.classList.remove('active'));
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    e.currentTarget.classList.add('active');

    const targetContent = document.getElementById(targetId);
    if (targetContent) {
        targetContent.classList.add('active');
    }
}

function changeImage(element) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = element.src.replace('/100', '/500');

        const thumbnails = document.getElementsByClassName("thumbnail");
        for (let i = 0; i < thumbnails.length; i++) {
            thumbnails[i].classList.remove("active");
        }

        element.classList.add("active");
    }
}
window.changeImage = changeImage


stopPageLoage()
