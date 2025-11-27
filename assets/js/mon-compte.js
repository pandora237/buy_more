import { stopPageLoage } from "./helpers.js";

secureAdminPages();
const currentUser = getUser();

const infoGridHtml = document.querySelector('#info-grid');
infoGridHtml.innerHTML = '';

if (currentUser && infoGridHtml) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(currentUser.dateInscription).toLocaleDateString('fr-FR', options);

    infoGridHtml.innerHTML = `
        <div class="info-card">
            <div class="info-label">
                <i class="fa-solid fa-user"></i> Nom complet
            </div>
            <div class="info-value">${currentUser.prenom} ${currentUser.nom}</div>
        </div>

        <div class="info-card">
            <div class="info-label">
                <i class="fa-solid fa-envelope"></i> Email
            </div>
            <div class="info-value">${currentUser.email}</div>
        </div>

        <div class="info-card">
            <div class="info-label">
                <i class="fa-solid fa-phone"></i> Téléphone
            </div>
            <div class="info-value">${currentUser.telephone}</div>
        </div>

        <div class="info-card">
            <div class="info-label">
                <i class="fa-solid fa-calendar"></i> Date d'inscription
            </div>
            <div class="info-value">${formattedDate}</div>
        </div>
    `;
}

stopPageLoage();
