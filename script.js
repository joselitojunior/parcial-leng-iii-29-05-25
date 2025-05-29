let name, lastName, dni, dateOfBirth, email;

function onLastNameChange(e) {
    lastName = document.getElementById('lastName').value;
}

function onNameChange(e) {
    name = document.getElementById('name').value;
}

function onDNIChange(e) {
    dni = document.getElementById('dni').value;
}

function onDateOfBirthChange(e) {
    dateOfBirth = document.getElementById('dateOfBirth').value;
}

function onEmailChange(e) {
    email = document.getElementById('email').value;
}

function isNameValid() {
}

function isFormValid() {
    if (!lastName) alert('Apellido no és válido.');
    else if (!name) alert('Nombre no és válido.');
    else if (!dni) alert('DNI no és válido.');
    else if (!dateOfBirth) alert('Fecha de nascimiento no és válido.');
    else if (!email) alert('Email no és válido.');
    if (!name || !lastName || !dni || !dateOfBirth || !email) {
        return false;
    }
    return true;
}

function next() {
    if (!isFormValid()) return;

    let nationality, favoriteColor, petName = ''

    while (true) {
        nationality = prompt('Cuál es tu nacionalidad?');
        if (nationality) {
            break
        } else {
            alert('Este valor no és válido.')
        }
    }

    while (true) {
        favoriteColor = prompt('Cuál es tu color favorito?');
        if (favoriteColor) {
            break
        } else {
            alert('Este valor no és válido.')
        }
    }

    while (true) {
        petName = prompt('Cuál es el nombre de tu mascote?');
        if (petName) {
            break
        } else {
            alert('Este valor no és válido.')
        }
    }
    const answerElement = document.getElementById("answer");
    answerElement.innerText = `${nationality}-${favoriteColor}-${petName}`;
}
