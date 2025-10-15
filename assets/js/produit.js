const urlParams = new URLSearchParams(window.location.search);
const id_product = urlParams.get('id');
const produit = db.products.find(p => p.id == id_product)

if (!produit) {
    console.log('pas de produit')
    window.location.href = '/index.html'
}

const ContainerProduct = document.querySelector('#product-detail')
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
    const content = `
     <div class="product-gallery">
        <div class="product-image">
            <img src="${produit.img}" alt="Biscuits Maison">
            <div class="promo-badge">-100 FCFA</div>
            <div class="guarantee-badge">
                <i class="fas fa-shield-alt"></i>
                <span>12 mois</span>
                <span>GARANTIE</span>
            </div>
        </div>
    </div>

    <div class="product-info">
        <h1>${produit.nom}</h1>

        <div class="price-section">
            <span class="old-price">200 FCFA</span>
            <span class="current-price">${produit.prix} FCFA</span>
        </div>

        <div class="product-description">
            <h3>Description</h3>
            <p>${produit.description}</p>
        </div>

        <form class="quantity-form" id="quantity-form">
            <div class="quantity-selector">
                <label for="quantity">Quantité :</label>
                <input type="number" id="quantity" name="quantity" value="1" min="1" max="${produit.qty}">
            </div>

            <div class="action-buttons">
                <button type="submit"  type="name"  class="btn btn-success" value="${produit.id}">
                    <i class="fas fa-shopping-cart"></i>
                    Ajouter au Panier
                </button>
                <a href="https://wa.me/237" class="btn btn-secondary">
                    <i class="fab fa-whatsapp"></i>
                    Chat sur WhatsApp
                </a>
            </div>
        </form>

        <div class="product-meta">
            <div class="meta-item">
                <i class="fas fa-truck"></i>
                <span>Livraison disponible sur le campus</span>
            </div>
            <div class="meta-item">
                <i class="fas fa-check-circle"></i>
                <span>Produit disponible en stock</span>
            </div>
            <div class="meta-item">
                <i class="fas fa-user-graduate"></i>
                <span>Vendu par un étudiant vérifié</span>
            </div>
        </div>
    </div>
    `
    ContainerProduct.innerHTML = content

    const form = document.querySelector('#quantity-form')
    form?.addEventListener('submit', (e) => {
        e.preventDefault()
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
