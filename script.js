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

function formIsValid() {
    if (!name || !lastName || !dni || !dateOfBirth || !email) {
        return false;
    }
    return true;
}

function next() {
    if (!formIsValid()) {
        alert('Por favor, completa todos los campos.');
        return
    }
    const nationality = prompt('Cuál es tu nacionalidad?');
    const favoriteColor = prompt('Cuál es tu color favorito?');
    const petName = prompt('Cuál es el nombre de tu mascote?');
    const answerElement = document.getElementById("answer");
    answerElement.innerText = `${nationality}-${favoriteColor}-${petName}`;
}
