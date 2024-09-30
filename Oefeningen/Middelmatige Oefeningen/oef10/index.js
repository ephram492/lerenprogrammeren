let getal = parseInt(prompt("Geef een getal in:"));
let reverst = 0;
let i = getal; // Use the input number for reversing

while (i > 0) {
    let laastecijfer = i % 10; // Get the last digit
    reverst = reverst * 10 + laastecijfer; // Build the reversed number
    i = parseInt(i / 10); // Remove the last digit from the original number
}

console.log("Het omgekeerde getal is:", reverst);


