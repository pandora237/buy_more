
const userDB = db?.users ?? []
const urlParams = new URLSearchParams(window.location.search);
const redirectUrl = urlParams.get('redirect');


// FONCTION : AFFICHER MESSAGE

function afficherMessage(message, type) {
    const messageDiv = document.getElementById("messageErreur");
    messageDiv.textContent = message;

    if (type === "erreur") {
        messageDiv.style.color = "var(--col-danger)";
    } else if (type === "succes") {
        messageDiv.style.color = "var(--col-success)";
    }
}


// FONCTION : RÉCUPÉRER UTILISATEURS LOCALSTORAGE

function getUtilisateursLocalStorage() {
    const users = localStorage.getItem("utilisateurs");
    return users ? JSON.parse(users) : [];
}


// FONCTION : TROUVER UTILISATEUR

function trouverUtilisateur(email, password) {
    return db?.users.find(user => user.email === email && user.password === password)
}


// FONCTION : CRÉER SESSION

function creerSession(utilisateur) {
    logginUser(utilisateur)
}


// DÉMARRAGE

document.addEventListener("DOMContentLoaded", function () {
    console.log(" Page connexion chargée");

    // Vérifier si déjà connecté
    const sessionExistante = localStorage.getItem("sessionUtilisateur");
    if (sessionExistante) {
        console.log(" Utilisateur déjà connecté, redirection...");
        window.location.href = "../index.html";
        return;
    }

    // Récupérer les éléments
    const form = document.getElementById("formConnexion");
    const champEmail = document.getElementById("email");
    const champPassword = document.getElementById("password");

    if (!form || !champEmail || !champPassword) {
        console.error(" Éléments du formulaire manquants");
        return;
    }

    console.log(" Formulaire prêt");

    // Toggle password (optionnel)
    const togglePassword = document.getElementById("togglePassword");
    const iconOeilFerme = document.getElementById("iconOeilFerme");
    const iconOeilOuvert = document.getElementById("iconOeilOuvert");

    if (togglePassword && iconOeilFerme && iconOeilOuvert) {
        togglePassword.addEventListener("click", function () {
            if (champPassword.type === "password") {
                champPassword.type = "text";
                iconOeilFerme.style.display = "none";
                iconOeilOuvert.style.display = "block";
            } else {
                champPassword.type = "password";
                iconOeilFerme.style.display = "block";
                iconOeilOuvert.style.display = "none";
            }
        });
    }


    // SOUMISSION FORMULAIRE

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = champEmail.value.trim().toLowerCase();
        const password = champPassword.value;

        // Validation
        if (email === "") {
            afficherMessage("L'email est obligatoire", "erreur");
            champEmail.focus();
            return;
        }

        if (password === "") {
            afficherMessage("Le mot de passe est obligatoire", "erreur");
            champPassword.focus();
            return;
        }

        // Chercher l'utilisateur
        const utilisateur = trouverUtilisateur(email, password);

        if (!utilisateur) {
            afficherMessage("Email ou mot de passe incorrect", "erreur");
            champPassword.value = "";
            champPassword.focus();
            return;
        }

        // CONNEXION RÉUSSIE 
        afficherMessage("Connexion réussie ! Redirection...", "succes");

        creerSession(utilisateur);

        setTimeout(function () {
            window.location.href = redirectUrl ?? "../index.html";
        }, 1000);
    });
});

//recuperation des elements 
const form = document.querySelector('.form-auth');
const email = document.querySelector('#email');
const password = document.querySelector('#password')



//gestions des evenements 
// preventDefault pour empecher le comportement par defaut du formulaire car il faut dabrd valider les chams avant d'envoyer
form.addEventListener('submit', e => {
    e.preventDefault();

    form_verify();
})

//fonction

function form_verify() {
    //obtenir toutes les valeurs des inputs
    //la fonction trim() pour enlever les espaces 
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    let isValid = true;

    //verification d'adresse mail

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


    //verification du mot de passe
    if (passwordValue === "") {
        let message = " le mot de passe ne doit pas etre vide "
        setError(password, message)
        isValid = false;
    }
    else if (!passwordValue.match(/^[a-zA-Z0-9._%+!-]/)) {
        let message = "le mot de passe contient des caractères invalides"

        setError(password, message)
        isValid = false;
    }
    else if (passwordValue.length < 8) {
        let message = " le  mot de passe doit avoir aumoins 8 caractere"
        setError(password, message);
        isValid = false;

    }
    else {
        setSucess(password);
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

