secureAdminPages();
const currentUser = getUser();

const pathnameTab = window.location.pathname?.split('/');
const key_page = pathnameTab.length > 3 ? pathnameTab[3] : ''

const sideBarHtml = document.querySelector("#sideBar");
sideBarHtml.innerHTML = "";

if (currentUser && sideBarHtml) {

    const initials =
        currentUser.prenom.charAt(0).toUpperCase() +
        currentUser.nom.charAt(0).toUpperCase();

    sideBarHtml.innerHTML = `
        <div class="profile-section">
            <div class="avatar">${initials}</div>
            <div class="profile-name">${currentUser.prenom} ${currentUser.nom}</div>
            <div class="profile-email">${currentUser.email}</div>
        </div>

        <ul>
            <li>
                <a href="./mon-compte.html" class="menu-item ${key_page.includes('compte') ? 'active' : ''}">
                    <i class="fa fa-user"></i>
                    <span class="item-aside">Informations</span>
                </a>
            </li>

            <li>
                <a href="./mes-commandes.html" class="menu-item ${key_page.includes('commandes') ? 'active' : ''}">
                    <i class="fa fa-shopping-cart"></i>
                    <span class="item-aside">Mes commandes</span>
                </a>
            </li>

            <li>
                <a href="./parametres.html" class="menu-item ${key_page.includes('parametres') ? 'active' : ''}">
                    <i class="fa fa-heart"></i>
                    <span class="item-aside">Paramètres</span>
                </a>
            </li>

            <li>
                <a href="#" class="menu-item deconnexion btn-danger">
                    <i class="fa fa-sign-out-alt"></i>
                    <span class="item-aside">Déconnexion</span>
                </a>
            </li>
        </ul>
    `;
}
