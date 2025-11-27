import { stopPageLoage } from "./helpers.js"

secureAdminPages();
const currentUser = getUser();

const settingsFormHtml = document.querySelector('#settings-form')
const contentFormHtml = settingsFormHtml.querySelector('.content-form')
contentFormHtml.innerHTML =
    `
     <div class="form-group">
        <label for="nom">Nom</label>
        <input type="text" id="nom" name="nom" placeholder="Votre nom" value="${currentUser?.nom ?? ''}" required>
    </div>

    <div class="form-group">
        <label for="prenom">Prénom</label>
        <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" value="${currentUser?.prenom ?? ''}" required>
    </div>

    <div class="form-group">
        <label for="email">Adresse email</label>
        <input type="email" id="email" name="email" placeholder="exemple@mail.com" value="${currentUser?.email ?? ''}" required>
    </div>

    <div class="form-group">
        <label for="telephone">Téléphone</label>
        <input type="text" id="telephone" name="telephone" placeholder="Numéro de téléphone" value="${currentUser?.telephone ?? ''}" required>
    </div>


    <button type="submit" class="btn btn-success">Enregistrer </button>
    `

stopPageLoage()