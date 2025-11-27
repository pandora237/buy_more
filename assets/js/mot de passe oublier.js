import { stopPageLoage } from "./helpers.js";

const form = document.querySelector('#FormulaireMotDePasseOublie');
const email = document.querySelector('#email');



form.addEventListener('submit', e => {
    e.preventDefault();

    form_verify();
})

function form_verify() {
    const emailValue = email.value.trim();
    let isValid = true;


    if (emailValue === "") {
        let message = " email ne doit pas etre vide "
        setError(email, message)
        isValid = false;

    }
    else if (!emailValue.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        let message = "format d'email invalide"
        setError(email, message)
        isValid = false;
    }
    else {
        setSucess(email)
    }


    if (isValid) {
        // console.log('Formulaire valide ! Envoi en cours...');
        alert('Instructions envoyées !'); // Pour tester
        // form.submit(); // Décommentez pour envoyer
    }

}

// function pour nom d'utilisateur

function setError(elem, messageError) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');
    //ajout du message d'erreur
    small.innerText = messageError

    //ajout de la classe d'erreur qui est dans le css 
    formControl.className = "form-group error";

}

function setSucess(elem) {
    const formControl = elem.parentElement
    formControl.className = 'form-group success'
}

stopPageLoage()

