let som = 0;

// Loop door de getallen van 1 tot 100
for (let i = 1; i <= 100; i++) {
    // Controleer of het getal even is
    if (i % 2 === 0) {
        som += i; // Voeg het even getal toe aan de som
    }

    console.log('som:', som);
}

console.log(`De som van de even getallen van 1 tot 100 is: ${som}`);