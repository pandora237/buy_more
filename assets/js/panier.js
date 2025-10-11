const cart = getCartUser()
console.log(cart)

// ========== GESTION DU PANIER ==========

// Récupérer le panier depuis localStorage
function getCartUser() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Sauvegarder le panier dans localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(); // Mettre à jour le compteur à chaque sauvegarde
}

// Extraire les produits du HTML existant (pour initialiser le panier)
function extractProductsFromHTML() {
    const products = [];
    const productElements = document.querySelectorAll('.wrapper .product');
    
    productElements.forEach((productEl, index) => {
        const img = productEl.querySelector('img');
        const title = productEl.querySelector('.details h2');
        const description = productEl.querySelector('.details p');
        const color = productEl.querySelector('.size h3');
        const price = productEl.querySelector('.price p');
        const qtyInput = productEl.querySelector('.qty input[type="number"]');
        
        if (img && title && price) {
            // Extraire le prix (enlever "FCFA" et convertir en nombre)
            const priceValue = parseInt(price.textContent.replace(/[^0-9]/g, ''));
            
            const product = {
                id: Date.now() + index, // ID unique
                name: title.textContent.trim(),
                description: description ? description.textContent.trim() : '',
                color: color ? color.textContent.replace('Couleur:', '').trim() : 'Non spécifiée',
                price: priceValue,
                quantity: qtyInput ? parseInt(qtyInput.value) : 1,
                image: img.src
            };
            
            products.push(product);
        }
    });
    
    return products;
}

// Initialiser le panier avec les produits du HTML (si le panier est vide)
function initializeCartFromHTML() {
    let cart = getCartUser();
    
    // Si le panier est vide et qu'on est sur la page panier
    if (cart.length === 0 && window.location.pathname.includes('panier.html')) {
        const products = extractProductsFromHTML();
        if (products.length > 0) {
            saveCart(products);
            cart = products;
        }
    }
    
    return cart;
}

// Calculer le prix total du panier
function calculateTotal() {
    const cart = getCartUser();
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    
    return total;
}

// Afficher les produits du panier
function displayCart() {
    const cart = getCartUser();
    const itemsContainer = document.querySelector('.wrapper .items');
    
    if (!itemsContainer) return;
    
    // Vider le conteneur mais garder le titre
    itemsContainer.innerHTML = `
        <div class="title">
            <h3>Panier</h3>
        </div>
    `;
    
    if (cart.length === 0) {
        itemsContainer.innerHTML += `
            <div class="product" style="text-align: center; padding: 40px;">
                <h2>Votre panier est vide</h2>
                <p>Ajoutez des produits pour commencer vos achats</p>
                <a href="/index.html"><button class="commander" style="margin-top: 20px;">Continuer mes achats</button></a>
            </div>
        `;
        return;
    }
    
    // Afficher chaque produit
    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        
        const productHTML = `
            <div class="product" data-index="${index}">
                <img src="${item.image}" alt="${item.name}">
                <div class="details">
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <div class="size">
                        <h3>Couleur: ${item.color}</h3>
                    </div>
                    <div class="qty">
                        <h4>Qté: <input type="number" value="${item.quantity}" min="1" class="qty-input" data-index="${index}"></h4>
                        <button class="delete-btn" data-index="${index}">🗑 Supprimer</button>
                        <button class="buy-btn" data-index="${index}">Acheter</button>
                    </div>
                </div>
                <div class="price">
                    <p class="item-price" data-index="${index}">${subtotal.toLocaleString()} FCFA</p>
                </div>
            </div>
        `;
        itemsContainer.innerHTML += productHTML;
    });
    
    // Calculer et afficher le total
    const total = calculateTotal();
    const totalHTML = `
        <div class="total">
            <h3>Prix Total</h3>
            <h3 id="total-price">${total.toLocaleString()} FCFA</h3>
            <a href="/pages/livraison.html"><button class="commander" type="button">Commander le panier</button></a>
        </div>
    `;
    itemsContainer.innerHTML += totalHTML;
    
    // Ajouter les écouteurs d'événements
    addEventListeners();
}

// Supprimer un produit du panier
function removeFromCart(index) {
    const cart = getCartUser();
    const product = cart[index];
    
    if (confirm(`Voulez-vous vraiment supprimer "${product.name}" du panier ?`)) {
        cart.splice(index, 1);
        saveCart(cart);
        displayCart(); // Réafficher tout le panier
    }
}

// Mettre à jour la quantité d'un produit
function updateQuantity(index, newQuantity) {
    const cart = getCartUser();
    newQuantity = parseInt(newQuantity);
    
    if (newQuantity > 0 && !isNaN(newQuantity)) {
        // Mettre à jour la quantité dans le panier
        cart[index].quantity = newQuantity;
        saveCart(cart);
        
        // Recalculer le prix de la ligne
        const subtotal = cart[index].price * newQuantity;
        const priceEl = document.querySelector(`.item-price[data-index="${index}"]`);
        if (priceEl) {
            priceEl.textContent = `${subtotal.toLocaleString()} FCFA`;
        }
        
        // Recalculer et afficher le total
        const total = calculateTotal();
        const totalEl = document.getElementById('total-price');
        if (totalEl) {
            totalEl.textContent = `${total.toLocaleString()} FCFA`;
        }
        
        // Mettre à jour le compteur du panier
        updateCartCount();
    } else {
        alert('La quantité doit être un nombre supérieur à 0');
        displayCart(); // Réafficher pour corriger
    }
}

// Acheter un produit spécifique
function buyProduct(index) {
    const cart = getCartUser();
    const product = cart[index];
    const total = product.price * product.quantity;
    
    alert(`Achat de "${product.name}"\nQuantité: ${product.quantity}\nTotal: ${total.toLocaleString()} FCFA\n\nVous allez être redirigé vers la page de paiement.`);
    
    // Rediriger vers la page de livraison/paiement
    window.location.href = '/pages/livraison.html';
}

// Ajouter les écouteurs d'événements
function addEventListeners() {
    // Boutons supprimer
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            removeFromCart(index);
        });
    });
    
    // Inputs de quantité - Événement 'change' (quand on quitte le champ)
    document.querySelectorAll('.qty-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const index = parseInt(e.target.dataset.index);
            const newQuantity = e.target.value;
            updateQuantity(index, newQuantity);
        });
        
        // Événement 'input' pour mise à jour en temps réel
        input.addEventListener('input', (e) => {
            const index = parseInt(e.target.dataset.index);
            const newQuantity = e.target.value;
            
            // Mise à jour immédiate si la valeur est valide
            if (newQuantity > 0 && !isNaN(newQuantity)) {
                updateQuantity(index, newQuantity);
            }
        });
        
        // Empêcher les valeurs négatives
        input.addEventListener('keydown', (e) => {
            if (e.key === '-' || e.key === '+' || e.key === 'e' || e.key === 'E') {
                e.preventDefault();
            }
        });
    });
    
    // Boutons acheter
    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            buyProduct(index);
        });
    });
}

// ========== GESTION DU COMPTEUR DU PANIER (HEADER) ==========

// Mettre à jour le compteur du panier dans le header
function updateCartCount() {
    const cart = getCartUser();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-count');
    
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        
        // Ajouter un effet visuel si le panier n'est pas vide
        if (totalItems > 0) {
            cartCountElement.style.display = 'flex';
        } else {
            cartCountElement.style.display = 'none';
        }
    }
}

// Ajouter un produit au panier (fonction utilitaire pour d'autres pages)
function addToCart(product) {
    let cart = getCartUser();
    
    // Vérifier si le produit existe déjà
    const existingIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingIndex !== -1) {
        // Augmenter la quantité si le produit existe
        cart[existingIndex].quantity += product.quantity || 1;
    } else {
        // Ajouter le nouveau produit
        cart.push({
            ...product,
            quantity: product.quantity || 1
        });
    }
    
    saveCart(cart);
    alert(`"${product.name}" a été ajouté au panier !`);
}

// Vider tout le panier
function clearCart() {
    if (confirm('Voulez-vous vraiment vider tout le panier ?')) {
        localStorage.removeItem('cart');
        updateCartCount();
        displayCart();
    }
}

// ========== INITIALISATION ==========

document.addEventListener('DOMContentLoaded', () => {
    // Initialiser le compteur du panier sur toutes les pages
    updateCartCount();
    
    // Si on est sur la page panier
    if (window.location.pathname.includes('panier.html')) {
        // Initialiser le panier depuis le HTML s'il est vide
        initializeCartFromHTML();
        // Afficher le panier
        displayCart();
    }
    
    // S'assurer que le lien du panier fonctionne
    const cartLink = document.querySelector('a[href="/pages/panier.html"]');
    if (cartLink) {
        cartLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = '/pages/panier.html';
        });
    }
});

// Mettre à jour le compteur à chaque fois que la page devient visible
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        updateCartCount();
    }
});

// Export des fonctions pour utilisation dans d'autres scripts
if (typeof window !== 'undefined') {
    window.cartFunctions = {
        addToCart,
        getCartUser,
        updateCartCount,
        clearCart,
        calculateTotal
    };
}

console.log('Panier chargé avec', getCartUser().length, 'produit(s)');
console.log('Total du panier:', calculateTotal(), 'FCFA');
