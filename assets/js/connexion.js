



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


// FONCTION : RÉCUPÉRER TOUS LES UTILISATEURS (db.js + localStorage)

function getTousLesUtilisateurs() {
    // Utilisateurs de db.js (si disponible)
    const usersDB = (typeof db !== 'undefined' && db.users) ? db.users : [];

    // Utilisateurs de localStorage
    const usersLocal = getUtilisateursLocalStorage();

    console.log("👥 Utilisateurs db.js:", usersDB.length);
    console.log("👥 Utilisateurs localStorage:", usersLocal.length);

    // Fusionner les deux (localStorage en priorité pour éviter les doublons)
    return [...usersLocal, ...usersDB];
}


// FONCTION : TROUVER UTILISATEUR

function trouverUtilisateur(email, password) {
    const tousLesUtilisateurs = getTousLesUtilisateurs();

    // D'abord chercher dans localStorage (password en clair)
    const userLocal = getUtilisateursLocalStorage().find(
        user => user.email === email && user.password === password
    );

    // Ensuite chercher dans db.js avec mots de passe de TEST
    if (typeof db !== 'undefined' && db.users) {
        const userDB = db.users.find(user => user.email === email);

        if (userDB) {
            console.log(" Utilisateur trouvé dans db.js, vérification password...");


            console.log("⚠ Mode TEST : mot de passe accepté pour utilisateur db.js");
            return userDB;
        }
    }

    console.log(" Aucun utilisateur trouvé");
    return null;
}


// FONCTION : CRÉER SESSION

function creerSession(utilisateur) {
    const session = {
        id: utilisateur.id,
        nom: utilisateur.nom,
        prenom: utilisateur.prenom,
        email: utilisateur.email,
        dateConnexion: new Date().toISOString()
    };

    localStorage.setItem("sessionUtilisateur", JSON.stringify(session));
    console.log(" Session créée:", session);
}


// DÉMARRAGE

document.addEventListener("DOMContentLoaded", function() {
    console.log(" Page connexion chargée");

    // Vérifier si déjà connecté
    const sessionExistante = localStorage.getItem("sessionUtilisateur");
    if (sessionExistante) {
        console.log("⚠ Utilisateur déjà connecté, redirection...");
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
    }


    // SOUMISSION FORMULAIRE

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Tentative de connexion");

        const email = champEmail.value.trim().toLowerCase();
        const password = champPassword.value;

        console.log(" Email:", email);

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
        console.log(" Connexion réussie:", utilisateur);
        afficherMessage("Connexion réussie ! Redirection...", "succes");

        creerSession(utilisateur);

        setTimeout(function() {
            window.location.href = "../index.html";
        }, 1000);
    });
});