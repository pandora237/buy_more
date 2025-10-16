const popupOverlay = document.querySelector('#popup-overlay')
const summaryTotalBlock = document.querySelector('#summary-box')

if (summaryTotalBlock) {
    summaryTotalBlock.innerHTML = ''
    const cart = getCartUser()
    const total = cart?.produits?.reduce((summ, p) => summ + p.prix, 0)
    const html = `
        <div class="final-total">
            <span class="total-label">Total</span>
            <span class="total-amount">${total} FCFA</span>
        </div>
    `
    summaryTotalBlock.innerHTML = html
}

function setStepOrder() {
    const cart = getCartUser()
    let datas = window.localStorage.getItem(KEY_STEP_ORDER)
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
        buildOrder(allStep)
        localStorage.removeItem(KEY_STEP_ORDER)
        cart.produits = []
        saveCartUser(cart)
        endOrder()
    })
}


function buildOrder(datasStep) {
    const cart = getCartUser()
    const products = cart?.produits
    const order = {
        id: Date.now(),
        id_panier: cart.id,
        id_prod: JSON.stringify(products.map(p => p.id_prod)),
        date: new Date(),
        status: "paid",
        total: products.reduce((acc, p) => acc + p.prix, 0),
        devise: "XAF",
        otherInfo: datasStep
    }
    saveOrderUser([...getOrderUser(), order])
}

function endOrder() {
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
            <h1> Commande effectue avec succès !</h1>
            <div class="popup-btn">
                Vous serez redirige.
            </div>
        </div> 
    `
    popupOverlay.innerHTML = html
    popupOverlay.classList.remove('hidden')
    setTimeout(() => {
        window.location.href = '/pages/admin/mes-commandes.html'
    }, 2000)
}


setStepOrder()