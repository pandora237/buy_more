
// FONCTION : VÉRIFIER SI CONNECTÉ

function estConnecte() {
    const session = localStorage.getItem("sessionUtilisateur");
    return session !== null;
}


// FONCTION : RÉCUPÉRER SESSION

function getSession() {
    const session = localStorage.getItem("sessionUtilisateur");
    return session ? JSON.parse(session) : null;
}


// FONCTION : DÉCONNEXION

function deconnecter() {
    // Supprimer la session
    localStorage.removeItem("sessionUtilisateur");
    console.log(" Déconnexion effectuée");

    // Afficher message
    alert("Vous avez été déconnecté avec succès !");

    // Rediriger vers connexion
    window.location.href = "/pages/connexion.html";
}


// FONCTION : PROTÉGER UNE PAGE

function protegerPage() {
    if (!estConnecte()) {
        console.log("⚠️ Page protégée : redirection vers connexion");
        alert("Vous devez être connecté pour accéder à cette page");
        window.location.href = "/pages/connexion.html";
    }
}


// FONCTION : GÉRER L'AFFICHAGE DU MENU SELON L'ÉTAT

function gererAffichageMenu() {
    const session = getSession();

    // Trouver les liens dans le menu profile
    const profileMenu = document.querySelector(".profile-menu");

    if (!profileMenu) {
        console.log("⚠ Menu profile non trouvé");
        return;
    }

    // Trouver chaque lien par son texte
    const liens = profileMenu.querySelectorAll("li a");
    let lienInscription = null;
    let lienConnexion = null;
    let lienMonCompte = null;
    let lienDeconnexion = null;

    liens.forEach(lien => {
        const texte = lien.textContent.trim();
        if (texte === "Inscription") lienInscription = lien.parentElement;
        if (texte === "Connexion") lienConnexion = lien.parentElement;
        if (texte === "Mon compte") lienMonCompte = lien.parentElement;
        if (texte === "Déconnexion") lienDeconnexion = lien.parentElement;
    });

    if (session) {
        //  UTILISATEUR CONNECTÉ
        console.log(" Utilisateur connecté:", session.prenom, session.nom);

        // Cacher Inscription et Connexion
        if (lienInscription) lienInscription.style.display = "none";
        if (lienConnexion) lienConnexion.style.display = "none";

        // Afficher Mon compte et Déconnexion
        if (lienMonCompte) lienMonCompte.style.display = "block";
        if (lienDeconnexion) lienDeconnexion.style.display = "block";

        // Ajouter le nom de l'utilisateur dans le menu (optionnel)
        if (lienMonCompte) {
            const linkElement = lienMonCompte.querySelector("a");
            linkElement.innerHTML = `Mon compte <small style="display:block; font-size:11px;">${session.prenom} ${session.nom}</small>`;
        }

    } else {
        //  UTILISATEUR NON CONNECTÉ
        console.log(" Utilisateur non connecté");

        // Afficher Inscription et Connexion
        if (lienInscription) lienInscription.style.display = "block";
        if (lienConnexion) lienConnexion.style.display = "block";

        // Cacher Mon compte et Déconnexion
        if (lienMonCompte) lienMonCompte.style.display = "none";
        if (lienDeconnexion) lienDeconnexion.style.display = "none";
    }
}


// FONCTION : ATTACHER ÉVÉNEMENT DÉCONNEXION

function attacherEvenementDeconnexion() {
    const profileMenu = document.querySelector(".profile-menu");

    if (!profileMenu) return;

    // Trouver le lien "Déconnexion"
    const liens = profileMenu.querySelectorAll("li a");

    liens.forEach(lien => {
        if (lien.textContent.trim() === "Déconnexion") {
            console.log(" Événement déconnexion attaché");

            lien.addEventListener("click", function(event) {
                event.preventDefault();

                // Demander confirmation
                if (confirm("Voulez-vous vraiment vous déconnecter ?")) {
                    deconnecter();
                }
            });
        }
    });
}

// INITIALISATION AU CHARGEMENT

document.addEventListener("DOMContentLoaded", function() {
    console.log(" Initialisation auth.js");

    // Gérer l'affichage du menu
    gererAffichageMenu();

    // Attacher l'événement de déconnexion
    attacherEvenementDeconnexion();

    console.log(" Auth.js initialisé");
});