
const form = document.querySelector('#form-step-1')
const summaryTotalBlock = document.querySelector('#summary-box')
const inputs = document.querySelectorAll('input.go-to-validate')
const selects = document.querySelectorAll('select.go-to-validate')


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

    if (isSubmittable(inputs)) {
        localStorage.setItem(KEY_STEP_ORDER, JSON.stringify(datas))
        window.location.href = '/pages/paiement.html'
    }
})

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

inputs?.forEach(input => {
    input.addEventListener('keyup', e => HtmlValidate(e.target))
})

selects?.forEach(select => {
    select.addEventListener('change', e => HtmlValidate(e.target))
})


