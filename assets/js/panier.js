import { stopPageLoage } from "./helpers.js";

secureAdminPages()

let cart = getCartUser()
console.log(' cart : ', cart)
let products = cart?.produits ?? []

const containerCart = document.querySelector('#wrapper');
const contentCart = containerCart?.querySelector('.content-product')
const totaltCart = containerCart?.querySelector('#total')




// Calculer le prix total du panier
function calculateTotal() {
    let total = 0;
    products.forEach(item => {
        total += item.prix * item.qty;
    });

    return total;
}

// Afficher les produits du panier
function displayCart() {

    if (!contentCart) return;

    if (products.length === 0) {
        contentCart.innerHTML = `
            <div class="product" style="text-align: center; padding: 40px;">
                <h2>Votre panier est vide</h2>
                <p>Ajoutez des produits pour commencer vos achats</p>
                <a href="/index.html"><button class="commander btn btn-primary" style="margin-top: 20px;">Continuer mes achats</button></a>
            </div>
        `;
        totaltCart.classList.add('hide')
        return;
    }
    totaltCart.classList.remove('hide')

    // Afficher chaque produit
    contentCart.innerHTML = ''
    products.forEach((item, index) => {
        const originalProduct = db.products.find(p => p.id == item.id_prod)
        const subtotal = item.prix * item.qty;

        const productHTML = `
           <div class="product">
          <img src="${originalProduct?.img}" alt="ongles by stl">
          <div class="details">
            <h2>${item?.nom ?? ''}</h2>
            <p>${originalProduct?.description ?? ''}</p> 
            <div class="qty">
              <h4>Qty:<input type="number" value="${item?.qty ?? 0}" min="1"  key="${item?.id_prod}"></h4>
              <button class="delete" value="${item?.id_prod}">
                <i class="fa-solid fa-trash"></i> Delete
              </button>
            </div>
          </div>
          <div class="price">
            <p>${subtotal + item?.devise}</p>
          </div>
        </div>
        `
        contentCart.innerHTML += productHTML

    });

    // Calculer et afficher le total
    const total = calculateTotal();
    const h3 = totaltCart.querySelector('.total-val')
    h3.innerHTML = total.toLocaleString() + "FCFA"

    // // Ajouter les écouteurs d'événements 
    addEventListeners();
}


function updateQty(id_prod, val) {
    if (!parseInt(id_prod)) {
        return
    }

    products.forEach(p => {
        if (p.id_prod == id_prod) {
            p.qty = val
        }
    })
    cart.produits = products
    saveCartUser(cart)
    cart = getCartUser()
    displayCart()
}

// Supprimer un produit du panier
function removeFromCart(id_prod) {
    const product = products.find(p => p.id_prod == id_prod)
    if (!product) {
        return
    }


    if (confirm(`Voulez-vous vraiment supprimer "${product.nom}" du panier ?`)) {
        products = products.filter(p => p.id_prod != id_prod)
        cart.produits = products
        saveCartUser(cart)
        cart = getCartUser()

        updateCountCartUser()
        displayCart()
    }
}

displayCart()


function addEventListeners() {
    const inputQty = contentCart.querySelectorAll('.qty input')
    inputQty.forEach(elt => {
        elt.addEventListener('change', input => {
            updateQty(elt.getAttribute('key'), elt.value)
        })
    })

    const btnDelete = contentCart.querySelectorAll('.qty button')
    btnDelete.forEach(btn => {
        btn.addEventListener('click', () => {
            removeFromCart(btn.value)
        })
    })
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


document.addEventListener('DOMContentLoaded', () => {
    updateCountCartUser();
});


stopPageLoage()