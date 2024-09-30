// Vraag een getal aan de gebruiker
let getal = parseInt(prompt("Voer een getal in:"));

// Controleer of de invoer een geldig getal is
if (isNaN(getal) || getal <= 0) {
    console.log("Voer alstublieft een positief getal in.");
} else {
    console.log(`De veelvouden van ${getal} tot 100 zijn:`);

    // Loop om de veelvouden te berekenen
    for (let i = 1; i * getal <= 100; i++) {
        console.log(i * getal);
    }
}