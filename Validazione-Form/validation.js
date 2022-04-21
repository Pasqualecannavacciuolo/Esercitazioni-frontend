const validateForm = () => {
    removeErrorMsg();
    console.log(validateMatricola());
    return checkValidity();
}

const checkValidity = () => {
    if(!validateNome() || !validateMatricola()) {
        return false;
    } else {
        return true;
    }
}


// Checkign if cognome is empty
const validateNome = () => {
    let check_nome = /^[A-Z\sa-z\sÀ-ÿ\s]+$/;
    let nome = document.forms["form-dati"]["nome"].value;
    if (nome == '') {
        showErrorMsg('nome-message', "Il nome non può essere vuoto");
        return false;
    } else if (nome != '') {
        if(!check_nome.test(nome)) {
            showErrorMsg('nome-message', 'Il nome inserito contiene caratteri non validi');
            return false;
        }
    }
    return true;
}



// Checkign if telefono is empty
const validateMatricola = () => {
    var check_matricola = /^([1-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|1[0-9]{3}|2000)$/g;
    let matricola = document.forms["form-dati"]["matricola"].value;

    if (matricola == '') {
        showErrorMsg('matricola-message', "Il matricola non può essere vuota");
        return false;
    } else if (matricola != '') {
        if (!check_matricola.test(matricola)) {
            showErrorMsg('matricola-message', "Non hai inserito una matricola valida");
            return false;
        }
    }
    return true;
}


// Showing the error message when needed
const showErrorMsg = (e_id, msg) => {
    var element = document.getElementById(e_id);
    element.className = 'error';
    element.innerHTML = msg;
}


/* Removing the error messages if you compiled the field */
const removeErrorMsg = () => {
    let nome = document.getElementById('nome-message');

    let matricola = document.getElementById('matricola-message');

    if(validateNome()) {
        nome.innerHTML = "";
    }

    if(validateMatricola()) {
        matricola.innerHTML = "";
    }
}