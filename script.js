function gameloop() {
    let facil = document.getElementById("Facile");
    let inter = document.getElementById("Intermediaire");
    let diffi = document.getElementById("Difficile");

    let upper;

    if (facil.checked) {
        upper = 10;
    } else if (inter.checked) {
        upper = 50;
    } else if (diffi.checked) {
        upper = 100;
    }

    let guess = Math.floor(Math.random() * upper) + '';
    let tries = 3;

    console.log(guess);

    while (tries > 0) {
        tries--;
        let userGuess = prompt("Donner un nombre dans [0, " + upper + "[ (Il reste " + (tries + 1) + " essais)");
        if (userGuess == null) {
            break;
        }
        if (userGuess == guess) {
            alert("Bravo, vous avez gagné.");
            tries = 3;
            break;
        }
    }

    if (tries == 0) {
        alert("Vous avez perdu. Le nombre était " + guess);
    }
}

const a = document.getElementById("btn");
a.addEventListener("click", gameloop);