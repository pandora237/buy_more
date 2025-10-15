console.log(db)

// start message 
const containerChat = document.querySelector('#chat-container')
const bodyChat = containerChat.querySelector('#chat-body')
const boxChat = containerChat.querySelector('#chat-box')
const formChat = containerChat.querySelector('#form-chat-footer')
const chatToggle = containerChat.querySelector('#chatToggle')
const closeChat = containerChat.querySelector('#close-btn')

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



const USER_CART_KEY = 'USER_CART'
const USER_ORDERS_KEY = 'USER_ORDERS'
const USER_APP = 'USER_APP'


// fonction utils 
function clearKey(key) {
    if (!key)
        return
    localStorage.removeItem(key)
}

function saveCartUser(cart) {
    localStorage.setItem(USER_CART_KEY, JSON.stringify(cart))
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

// end header


//  

const KEY_STEP_ORDER = 'KEY_STEP_ORDER'
const form = document.querySelector('#form-step-1')

form.addEventListener('submit', e => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    const datas = {
        name: formdata.get('name'),
        phone: formdata.get('phone'),
        address: formdata.get('address'),
        country: formdata.get('country'),
        city: formdata.get('city'),
    }
    localStorage.setItem(KEY_STEP_ORDER, datas.stringify())
})

function setStepOrder() {
    let datas = localStorage.get(KEY_STEP_ORDER)
    if (!datas) {
        window.location.href = '/pages/livraison.html'
    }
    datas = JSON.parse(datas)

    const form = document.querySelector('#paiement-form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        const allStep = {
            ...datas,
            paiementMethod: formdata.get('paiement-method'),
            phonePay: formdata.get('phone-pay')
        }
    })

}

function buildOrder(datasStep) {
    const cart = getCartUser()
    const products = cart?.produits
    const date = new Date()
    const order = {
        id: date.toDateString(),
        id_panier: cart.id,
        id_prod: products.map(p => p.id),
        date: date,
        status: "paid",
        total: products.reduce((a, b) => a + b),
        devise: "XAF",
        otherInfo: datasStep
    }
    saveOrderUser([...getOrderUser(), order])
}

function endOrder() {

}

