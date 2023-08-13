let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let Passbox     = document.getElementById("Passbox");
let lowercase   = document.getElementById("lowercase");
let uppercase   = document.getElementById("uppercase");
let numbers     = document.getElementById("numbers");
let symbols     = document.getElementById("symbols");
let genBtn      = document.getElementById("genBtn");

let lowerChar   = "abcdefghijklmnopqrstuvwxyz";
let upperChar   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num         = "0123456789";
let symbol      = "!@#$%^&";

// Display initial slider value
sliderValue.innerText = inputSlider.value;

// Update slider value when slider is moved
inputSlider.addEventListener('input', () => {
    sliderValue.innerText = inputSlider.value;
});

// Generate password when button is clicked
genBtn.addEventListener('click', () => {
    Passbox.value = generatePassword();
});

// Function to generate password
function generatePassword() {
    let generatedPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChar : "";
    allChars += uppercase.checked ? upperChar : "";
    allChars += numbers.checked ? num : "";
    allChars += symbols.checked ? symbol : "";

    let i = 1;
    while (i <= inputSlider.value) {
        generatedPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return generatedPassword;
}