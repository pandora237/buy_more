


function afficherMessage(message, type) {
    const messageDiv = document.getElementById("messageErreur");
    messageDiv.textContent = message;

    if (type === "erreur") {
        messageDiv.style.color = "var(--col-danger)";
    } else if (type === "succes") {
        messageDiv.style.color = "var(--col-success)";
    }
}

function afficherCriteres() {
    const criteriaDiv = document.getElementById("passwordCriteria");

    criteriaDiv.innerHTML = `
        <div style="margin: 10px 0; padding: 10px; background-color: var(--col-background); border-radius: 5px; font-size: 14px;">
            <div id="critere-longueur" style="margin: 5px 0; transition: color 0.3s;">• Au moins 8 caractères</div>
            <div id="critere-majuscule" style="margin: 5px 0; transition: color 0.3s;">• Au moins une lettre majuscule (A-Z)</div>
            <div id="critere-minuscule" style="margin: 5px 0; transition: color 0.3s;">• Au moins une lettre minuscule (a-z)</div>
            <div id="critere-chiffre" style="margin: 5px 0; transition: color 0.3s;">• Au moins un chiffre (0-9)</div>
            <div id="critere-special" style="margin: 5px 0; transition: color 0.3s;">• Au moins un caractère spécial (@#$!%*?&)</div>
        </div>
    `;
}

function cacherCriteres() {
    const criteriaDiv = document.getElementById("passwordCriteria");
    criteriaDiv.innerHTML = "";
}


function validerMotDePasse(password) {
    const critereLongueur = document.getElementById("critere-longueur");
    const critereMajuscule = document.getElementById("critere-majuscule");
    const critereMinuscule = document.getElementById("critere-minuscule");
    const critereChiffre = document.getElementById("critere-chiffre");
    const critereSpecial = document.getElementById("critere-special");

    if (!critereLongueur) return false;

    let tousLesCriteresValides = true;


    if (password.length >= 8) {
        critereLongueur.style.color = "var(--col-success)";
    } else {
        critereLongueur.style.color = "var(--col-danger)";
        tousLesCriteresValides = false;
    }


    if (/[A-Z]/.test(password)) {
        critereMajuscule.style.color = "var(--col-success)";
    } else {
        critereMajuscule.style.color = "var(--col-danger)";
        tousLesCriteresValides = false;
    }

    if (/[a-z]/.test(password)) {
        critereMinuscule.style.color = "var(--col-success)";
    } else {
        critereMinuscule.style.color = "var(--col-danger)";
        tousLesCriteresValides = false;
    }

      if (/[0-9]/.test(password)) {
        critereChiffre.style.color = "var(--col-success)";
    } else {
        critereChiffre.style.color = "var(--col-danger)";
        tousLesCriteresValides = false;
    }


    if (/[@#$!%*?&]/.test(password)) {
        critereSpecial.style.color = "var(--col-success)";
    } else {
        critereSpecial.style.color = "var(--col-danger)";
        tousLesCriteresValides = false;
    }

    return tousLesCriteresValides;
}

function validerTelephone(telephone) {

    const tel = telephone.replace(/\s/g, "");


    const regex = /^\+2376[0-9]{8}$/;

    return regex.test(tel);
}


function getUtilisateurs() {
    const users = localStorage.getItem("utilisateurs");
    return users ? JSON.parse(users) : [];
}


function emailExiste(email) {
    const utilisateurs = getUtilisateurs();
    return utilisateurs.some(user => user.email === email);
}


function sauvegarderUtilisateur(utilisateur) {
    const utilisateurs = getUtilisateurs();
    utilisateurs.push(utilisateur);
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
}


document.addEventListener("DOMContentLoaded", function() {



    const form = document.getElementById("formInscription");
    const champNom = document.getElementById("nom");
    const champPrenom = document.getElementById("prenom");
    const champEmail = document.getElementById("email");
    const champTelephone = document.getElementById("telephone");
    const champPassword = document.getElementById("password");
    const champConfirmPassword = document.getElementById("confirmPassword");


    const togglePassword = document.getElementById("togglePassword");
    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
    const iconOeilFerme = document.getElementById("iconOeilFerme");
    const iconOeilOuvert = document.getElementById("iconOeilOuvert");
    const iconOeilFerme2 = document.getElementById("iconOeilFerme2");
    const iconOeilOuvert2 = document.getElementById("iconOeilOuvert2");


    champTelephone.addEventListener("focus", function() {
        const longueur = champTelephone.value.length;
        champTelephone.setSelectionRange(longueur, longueur);
    });


    champTelephone.addEventListener("input", function() {
        const valeur = champTelephone.value;

        if (!valeur.startsWith("+237 ")) {
            champTelephone.value = "+237 ";
            champTelephone.setSelectionRange(5, 5);
        }
    });


    champTelephone.addEventListener("keydown", function(event) {
        const position = champTelephone.selectionStart;

        if ((event.key === "Backspace" && position <= 5) ||
            (event.key === "Delete" && position < 5)) {
            event.preventDefault();
        }
    });


    togglePassword.addEventListener("click", function() {
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


    toggleConfirmPassword.addEventListener("click", function() {
        if (champConfirmPassword.type === "password") {
            champConfirmPassword.type = "text";
            iconOeilFerme2.style.display = "none";
            iconOeilOuvert2.style.display = "block";
        } else {
            champConfirmPassword.type = "password";
            iconOeilFerme2.style.display = "block";
            iconOeilOuvert2.style.display = "none";
        }
    });


    champPassword.addEventListener("focus", function() {
        afficherCriteres();
    });

    champPassword.addEventListener("input", function() {
        const password = champPassword.value;

        if (password === "") {
            cacherCriteres();
        } else {
            if (document.getElementById("critere-longueur") === null) {
                afficherCriteres();
            }
            validerMotDePasse(password);
        }
    });


    champPassword.addEventListener("blur", function() {
        if (champPassword.value === "") {
            cacherCriteres();
        }
    });



    form.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("🚀 Formulaire soumis");

        // Récupérer et nettoyer les valeurs
        const nom = champNom.value.trim();
        const prenom = champPrenom.value.trim();
        const email = champEmail.value.trim().toLowerCase();
        const telephone = champTelephone.value.trim();
        const password = champPassword.value;
        const confirmPassword = champConfirmPassword.value;


        if (nom === "") {
            afficherMessage("Le nom est obligatoire", "erreur");
            champNom.focus();
            return;
        }


        if (prenom === "") {
            afficherMessage("Le prénom est obligatoire", "erreur");
            champPrenom.focus();
            return;
        }


        if (email === "") {
            afficherMessage("L'email est obligatoire", "erreur");
            champEmail.focus();
            return;
        }

        if (!email.includes("@")) {
            afficherMessage("L'email doit contenir un @", "erreur");
            champEmail.focus();
            return;
        }


        if (!email.includes(".")) {
            afficherMessage("L'email doit contenir un point (.)", "erreur");
            champEmail.focus();
            return;
        }


        if (emailExiste(email)) {
            afficherMessage("Cet email est déjà utilisé", "erreur");
            champEmail.focus();
            return;
        }


        if (telephone === "" || telephone === "+237 ") {
            afficherMessage("Le téléphone est obligatoire", "erreur");
            champTelephone.focus();
            return;
        }


        if (!validerTelephone(telephone)) {
            afficherMessage("Format invalide. Entrez 9 chiffres commençant par 6", "erreur");
            champTelephone.focus();
            return;
        }


        if (password === "") {
            afficherMessage("Le mot de passe est obligatoire", "erreur");
            champPassword.focus();
            return;
        }


        if (document.getElementById("critere-longueur") === null) {
            afficherCriteres();
        }

        if (!validerMotDePasse(password)) {
            afficherMessage("Le mot de passe ne respecte pas tous les critères", "erreur");
            champPassword.focus();
            return;
        }


        if (confirmPassword === "") {
            afficherMessage("Confirmez votre mot de passe", "erreur");
            champConfirmPassword.focus();
            return;
        }


        if (password !== confirmPassword) {
            afficherMessage("Les mots de passe ne correspondent pas", "erreur");
            champConfirmPassword.focus();
            return;
        }



        const nouvelUtilisateur = {
            id: Date.now(),
            nom: nom,
            prenom: prenom,
            email: email,
            telephone: telephone,
            password: password,
            dateInscription: new Date().toISOString()
        };

        sauvegarderUtilisateur(nouvelUtilisateur);

        afficherMessage(" Inscription réussie ! Redirection...", "succes");

        // Vider le formulaire
        form.reset();
        champTelephone.value = "+237 ";

        // Redirection après 2 secondes
        setTimeout(function() {
            window.location.href = "connexion.html";
        }, 2000);
    });


});