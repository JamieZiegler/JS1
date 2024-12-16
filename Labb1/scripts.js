const getName = function () {
    const name = prompt("Vad heter du?");
    return name.toUpperCase();
}

const userName = getName();

const nameLength = userName.length;

alert("Hej " + userName + " visste du att ditt namn har " + nameLength + " bokstäver?");