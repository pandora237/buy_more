
console.log(db)




// start message 
const containerChat = document.querySelector('#chat-container')
const bodyChat = containerChat.querySelector('#chat-body')
const boxChat = containerChat.querySelector('#chat-box')
const formChat = containerChat.querySelector('#form-chat-footer')
const chatToggle = containerChat.querySelector('#chatToggle')
const closeChat = containerChat.querySelector('#close-btn')
const searchFormHtml = document.querySelector('#form-searchbar')

const messages = [
    {
        isBot: true,
        content: "Bonjour ! Comment puis-je vous aider ?"
    }
]

function updateMessBox() {
    bodyChat.innerHTML = ''
    messages.forEach(mess => {
        const div = document.createElement('div')
        div.classList.add('message')
        div.classList.add(mess.isBot ? "bot" : "user")
        div.innerText = mess.content ?? ''

        bodyChat.appendChild(div)
    })
}

formChat.addEventListener('submit', (e) => {
    e.preventDefault()
    const form = e.target
    const input = form.querySelector('input')
    const val = input.value.trim()
    if (val) {
        messages.push({
            isBot: false,
            content: val
        })
        updateMessBox()
    }
    form.reset()
})

closeChat.addEventListener('click', (e) => {
    if (!boxChat.classList.contains('hide-chat')) {
        boxChat.classList.add('hide-chat')
    }
})

chatToggle.addEventListener('click', (e) => {
    // if (!boxChat.classList.contains('hide-chat')) {
    //     boxChat.classList.add('hide-chat')
    // }
    if (boxChat.classList.contains('hide-chat')) {
        boxChat.classList.remove('hide-chat')
    }
})

updateMessBox()

// end messages


function secureAdminPages() {
    const currentUser = getUser()
    const pathnameTab = window.location.pathname?.split('/');
    const key_admin = pathnameTab.length > 1 ? pathnameTab[1] : ''
    if (!(key_admin == 'admin' && !currentUser)) {
        window.location.href = `/pages/connexion.html?redirect=${window.location.href}`
    }
}


// search products 
function searchProduct() {
    searchFormHtml.addEventListener('submit', (e) => {
        e.preventDefault()
        const query = e.target.querySelector('input').value.trim();
        if (query && query != '') {
            window.location.href = `/pages/resultats-recherche.html?query=${query}`
            searchFormHtml.reset()
        }
    })
}
searchProduct()


const USER_CART_KEY = 'USER_CART'
const USER_ORDERS_KEY = 'USER_ORDERS'
const USER_APP = 'USER_APP'


// fonction utils  
function sliceText(text, size) {
    if (text.length > size) {
        return text.slice(0, size) + '...'
    }
    return text
}

function isNew(date) {
    const dateAjout = new Date(date);
    const maintenant = new Date();

    const diffMs = maintenant - dateAjout;

    const diffJours = diffMs / (1000 * 60 * 60 * 24);

    return diffJours <= 120;
}

function clearKey(key) {
    if (!key)
        return
    localStorage.removeItem(key)
}

function saveCartUser(cart) {
    localStorage.setItem(USER_CART_KEY, JSON.stringify(cart))
    updateCountCartUser()
}

function getCartUser() {
    return JSON.parse(localStorage.getItem(USER_CART_KEY))
}

function saveUser(user) {
    localStorage.setItem(USER_APP, JSON.stringify(user))
}

function getUser() {
    return JSON.parse(localStorage.getItem(USER_APP))
}

// commande
function saveOrderUser(order) {
    localStorage.setItem(USER_ORDERS_KEY, JSON.stringify(order))
}

function getOrderUser() {
    return JSON.parse(localStorage.getItem(USER_ORDERS_KEY)) ?? []
}

function logginUser(user) {
    const session = {
        id: user.id,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        dateConnexion: new Date().toISOString()
    };
    const cart = db?.paniers.find(p => p.id_user == user.id)
    const order = db?.commandes.filter(c => c.id_panier == cart.id)

    saveUser(session)
    saveCartUser(cart)
    saveOrderUser(order)
}

function logoutUser() {
    clearKey(USER_APP)
    clearKey(USER_CART_KEY)
    clearKey(USER_ORDERS_KEY)
    window.location.href = '/pages/connexion.html'
}


// start header

const containerProfileHtml = document.querySelector('.profile')
const listProfileHtml = containerProfileHtml.querySelector('.profile-menu')
const cartHtml = document.querySelector('.cart')
const menuContentItmsHtml = document.querySelector('#menu-item-content')

function updateMenu() {
    const categories = db?.categories
    if (menuContentItmsHtml) {
        menuContentItmsHtml.innerHTML = ''
        categories?.forEach(c => {
            const html = `
            <li class="menu-item">
                <a href="/pages/listeProduits.html?id_cat=${c.id}">
                    <span><i class="fa-solid fa-${c.icon}"></i></span>
                    <span>${c.title}</span>
                </a>
            </li>
        `
            menuContentItmsHtml.innerHTML += html
        });
    }
}

updateMenu()

function updateCountCartUser() {
    const cart = getCartUser()
    const products = cart?.produits ?? []
    const span_cart_count = document.querySelector('.cart-count')

    span_cart_count.innerText = products.length
}

updateCountCartUser()

function initHeader() {
    const inscription = listProfileHtml.querySelector('.inscription')
    const connexion = listProfileHtml.querySelector('.connexion')
    const monCompte = listProfileHtml.querySelector('.mon-compte')
    const deconnexion = listProfileHtml.querySelector('.deconnexion')

    const user = getUser()
    if (user) {
        // user loggin
        inscription?.classList.add('hide')
        connexion?.classList.add('hide')

        monCompte?.classList.remove('hide')
        deconnexion?.classList.remove('hide')

        cartHtml.querySelector('.cart-count')?.classList.remove('hide')
        containerProfileHtml?.classList.add('active')
    } else {
        inscription.classList.remove('hide')
        connexion.classList.remove('hide')

        monCompte.classList.add('hide')
        deconnexion.classList.add('hide')

        cartHtml.querySelector('.cart-count')?.classList.add('hide')
        containerProfileHtml.classList.remove('active')
    }

    deconnexion?.addEventListener('click', () => {
        logoutUser()
    })
}

initHeader()

const KEY_STEP_ORDER = 'KEY_STEP_ORDER'

// validation
function validation(val, type) {
    switch (type) {
        case 'email': {
            const regex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
            if (!regex.test(val)) {
                return {
                    isValid: false,
                    messages: 'Adresse e-mail invalide.'
                };
            }
            return {
                isValid: true,
                messages: 'Adresse e-mail valide.'
            };
        }

        case 'phone': {
            const regex = /^(?:\+?\d{1,3})?[ .-]?\d{6,14}$/;
            if (!regex.test(val)) {
                return {
                    isValid: false,
                    messages: 'Numéro de téléphone invalide.'
                };
            }
            return {
                isValid: true,
                messages: 'Numéro de téléphone valide.'
            };
        }

        case 'password': {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!regex.test(val)) {
                return {
                    isValid: false,
                    messages: 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un symbole.'
                };
            }
            return {
                isValid: true,
                messages: 'Mot de passe valide.'
            };
        }

        default: {
            if (!val || val.length < 2) {
                return {
                    isValid: false,
                    messages: 'Ce champ doit contenir au moins 2 caractères.'
                };
            }
            return {
                isValid: true,
                messages: 'Valeur valide.'
            };
        }
    }
}

function HtmlValidate(input) {
    const parentDiv = input.parentElement
    const description = parentDiv.querySelector('.description-form')
    const dataType = input.getAttribute('data-type')
    const val = input.value
    const resultat = validation(val, dataType)

    if (input.tagName.toLowerCase() == 'select') {
        resultat.messages = 'choix invalide.'
    }
    description.innerHTML = resultat.messages
    if (resultat.isValid) {
        parentDiv.classList.remove('error-validation')
        return true
    }
    parentDiv.classList.add('error-validation')
    return false
}

function isSubmittable(inputs) {
    let isValid = true
    inputs?.forEach(input => {
        if (!HtmlValidate(input)) {
            isValid = false
            return
        }
    })
    if (isValid) {
        return true
    }
    return false
}





