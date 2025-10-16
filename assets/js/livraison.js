
const form = document.querySelector('#form-step-1')
const summaryTotalBlock = document.querySelector('#summary-box')


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

    localStorage.setItem(KEY_STEP_ORDER, JSON.stringify(datas))
    window.location.href = '/pages/paiement.html'
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






// const formLivraison = document.querySelector('.form-livraison');
// const formPaiement = document.querySelector('.form-paiement');

// // recuperation des elements  Champs du formulaire de livraison
// const nom = document.querySelector('#name');
// const telephone = document.querySelector('#phone');
// const adresse = document.querySelector('#address');
// const pays = document.querySelector('#country');
// const ville = document.querySelector('#city');
// const quartier = document.querySelector('#street');
// const methodeLivraison = document.querySelector('#delivery');


// //recuperation des champs de paiement

// const Titulaire = document.querySelector('#name-care');
// const NumeroCard = document.querySelector('#card-number');
// const dateExpiration = document.querySelector('#expiry');
// const cardVerification = document.querySelector('#cvc')
// const methodePaiement = document.querySelector('#mobile-pay');
// const phoneConfirmation = document.querySelector('#phone-otp');

// //gestion des evenements

// formLivraison.addEventListener('submit', (e) => {
//     e.preventDefault();
//     validateForm('livraison');
// });

// formPaiement.addEventListener('submit', (e) => {
//     e.preventDefault();
//     validateForm('paiement');
// });


// //fonction de validation

// function validateForm(formType) {
//     let isValid = true;

//     if (formType === 'livraison') {
//         const nomValue = nom.value.trim();
//         const telephoneValue = telephone.value.trim();
//         const adresseValue = adresse.value.trim();
//         const paysValue = pays.value.trim();
//         const villeValue = ville.value.trim();
//         const quartierValue = quartier.value.trim();
//         const methodeLivraisonValue = methodeLivraison.value.trim();
//         // Validation nom
//         if (nomValue === "") {
//             let message = "Le nom ne doit pas être vide";
//             setError(nom, message);
//             isValid = false;
//         } else if (nomValue.length < 2) {
//             let message = "Le nom doit contenir au moins 2 caractères";
//             setError(nom, message);
//             isValid = false;
//         } else {
//             setSuccess(nom);
//         }
//         // Validation téléphone
//         if (telephoneValue === "") {
//             let message = "Le numéro de téléphone ne doit pas être vide";
//             setError(telephone, message);
//             isValid = false;
//         } else if (!telephoneValue.match(/^[0-9+\s()-]+$/)) {
//             let message = "Format de téléphone invalide";
//             setError(telephone, message);
//             isValid = false;
//         } else if (telephoneValue.replace(/[^0-9]/g, '').length < 9) {
//             let message = "Le numéro doit contenir au moins 9 chiffres";
//             setError(telephone, message);
//             isValid = false;
//         } else {
//             setSuccess(telephone);
//         }

//         // Validation adresse
//         if (adresseValue === "") {
//             let message = "L'adresse ne doit pas être vide";
//             setError(adresse, message);
//             isValid = false;
//         } else {
//             setSuccess(adresse);
//         }
//         // Validation pays
//         if (paysValue === "") {
//             let message = "Le pays ne doit pas être vide";
//             setError(pays, message);
//             isValid = false;
//         } else {
//             setSuccess(pays);
//         }

//         // Validation ville
//         if (villeValue === "") {
//             let message = "La ville ne doit pas être vide";
//             setError(ville, message);
//             isValid = false;
//         } else {
//             setSuccess(ville);
//         }

//         // Validation quartier
//         if (quartierValue === "") {
//             let message = "Le quartier ne doit pas être vide";
//             setError(quartier, message);
//             isValid = false;
//         } else {
//             setSuccess(quartier);
//         }
//         // Validation méthode de livraison
//         if (methodeLivraisonValue === "") {
//             let message = "Veuillez choisir une méthode de livraison";
//             setError(methodeLivraison, message);
//             isValid = false;
//         } else {
//             setSuccess(methodeLivraison);
//         }
//     } else if (formType === 'paiement') {
//         const nomTitulaireValue = nomTitulaire.value.trim();
//         const numeroCarteValue = numeroCarte.value.trim();
//         const dateExpirationValue = dateExpiration.value.trim();
//         const cvvValue = cvv.value.trim();
//         const methodePaiementValue = methodePaiement.value.trim();
//         const telephonePaiementValue = telephonePaiement.value.trim();

//         // Validation nom titulaire
//         if (nomTitulaireValue === "") {
//             let message = "Le nom du titulaire ne doit pas être vide";
//             setError(nomTitulaire, message);
//             isValid = false;
//         } else if (nomTitulaireValue.length < 2) {
//             let message = "Le nom du titulaire doit contenir au moins 2 caractères";
//             setError(nomTitulaire, message);
//             isValid = false;
//         } else {
//             setSuccess(nomTitulaire);
//         }
//         // Validation numéro de carte
//         if (numeroCarteValue === "") {
//             let message = "Le numéro de carte ne doit pas être vide";
//             setError(numeroCarte, message);
//             isValid = false;
//         } else if (!numeroCarteValue.match(/^[0-9\s-]{12,19}$/)) {
//             let message = "Format de numéro de carte invalide";
//             setError(numeroCarte, message);
//             isValid = false;
//         } else {
//             setSuccess(numeroCarte);
//         }

//         // Validation date d'expiration
//         if (dateExpirationValue === "") {
//             let message = "La date d'expiration ne doit pas être vide";
//             setError(dateExpiration, message);
//             isValid = false;
//         } else {
//             setSuccess(dateExpiration);
//         }

//         // Validation CVV
//         if (cvvValue === "") {
//             let message = "Le CVV ne doit pas être vide";
//             setError(cvv, message);
//             isValid = false;
//         } else if (!cvvValue.match(/^[0-9]{3,4}$/)) {
//             let message = "Le CVV doit contenir 3 ou 4 chiffres";
//             setError(cvv, message);
//             isValid = false;
//         } else {
//             setSuccess(cvv);
//         }

//         // Validation méthode de paiement
//         if (methodePaiementValue === "") {
//             let message = "Veuillez choisir une méthode de paiement";
//             setError(methodePaiement, message);
//             isValid = false;
//         } else {
//             setSuccess(methodePaiement);
//         }

//         // Validation téléphone paiement (optionnel dans ton HTML)
//         if (telephonePaiementValue === "") {
//             let message = "Le numéro de téléphone est requis pour la confirmation";
//             setError(telephonePaiement, message);
//             isValid = false;
//         } else if (!telephonePaiementValue.match(/^[0-9+\s()-]+$/)) {
//             let message = "Format de téléphone invalide";
//             setError(telephonePaiement, message);
//             isValid = false;
//         } else if (telephonePaiementValue.replace(/[^0-9]/g, '').length < 9) {
//             let message = "Le numéro doit contenir au moins 9 chiffres";
//             setError(telephonePaiement, message);
//             isValid = false;
//         } else {
//             setSuccess(telephonePaiement);
//         }
//     }

//     if (isValid) {
//         console.log(`${formType} valide ! Envoi en cours...`);
//         if (formType === 'livraison') formLivraison.submit();
//         else if (formType === 'paiement') formPaiement.submit();
//     }
// }


// //gestion des erreurs et succes

// function setError(elem, messageError) {
//     const formControl = elem.parentElement;
//     const small = formControl.querySelector('small');
//     small.innerText = messageError;
//     formControl.className = "form-group success";
// }









