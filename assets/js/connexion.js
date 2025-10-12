//recuperation des elements 

const form = document.querySelector('.form-auth');
const email = document.querySelector('#email');
const password = document.querySelector('#password')



//gestions des evenements 
// preventDefault pour empecher le comportement par defaut du formulaire car il faut dabrd valider les chams avant d'envoyer
form.addEventListener('submit' , e=>{e.preventDefault(); 

    form_verify();
})

//fonction

function form_verify(){
    //obtenir toutes les valeurs des inputs
    //la fonction trim() pour enlever les espaces 
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim(); 
    let isValid = true; 

//verification d'adresse mail

if (emailValue === "") {
    let message = " email ne doit pas etre vide "
    setError(email,message)
            isValid = false;

    }
 else if (!emailValue.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))  {
         let message = "format d'email invalide"
          setError(email,message)
                isValid = false;
    }
    else{
        setSucess(email)
    }


    //verification du mot de passe
    if (passwordValue ==="") {
        let message = " le mot de passe ne doit pas etre vide "
    setError(password,message)
          isValid = false;
    }
    else if (!passwordValue.match(/^[a-zA-Z0-9._%+!-]/)) {
       let message = "le mot de passe contient des caractères invalides"  

          setError(password,message)
                isValid = false;
    }
    else if (passwordValue.length < 8 ) {
             let message = " le  mot de passe doit avoir aumoins 8 caractere"
            setError(password , message);
          isValid = false;

        }
     else   {
        setSucess(password);
     }
         // Si tout est valide, 
    if (isValid) {
        console.log('Formulaire valide ! Envoi en cours...');
        form.submit(); // ← Envoi du formulaire
    }



}

// function pour nom d'utilisateur

  function  setError(elem, messageError){
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');
//ajout du message d'erreur
    small.innerText = messageError

    //ajout de la classe d'erreur qui est dans le css 
    formControl.className = "form-group error";

  }

  function setSucess(elem){
       const formControl = elem.parentElement
       formControl.className = 'form-group success'
  }

