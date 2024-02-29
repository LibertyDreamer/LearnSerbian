const pronouns = [
    "Ja",
    "Ti",
    "On/Ona/Ono",
    "Mi",
    "Vi",
    "Oni/One/Ona",
    
    "Ja ne",
    "Ti ne",
    "On/Ona/Ono ne",
    "Mi ne",
    "Vi ne",
    "Oni/One/Ona ne",

    "Ja ?",
    "Ti ?",
    "On/Ona/Ono ?",
    "Mi ?",
    "Vi ?",
    "Oni/One/Ona ?"
    
];

const answers = [
    "sam",
    "si",
    "je",
    "smo",
    "ste",
    "su",
    
    "nisam",
    "nisi",
    "nije",
    "nismo",
    "niste",
    "nisu",

    "da li sam/jesam li",
    "da li si/jesi li",
    "da li je/je li",
    "da li smo/jesmo li",
    "da li ste/jeste li",
    "da li su/jesu li",
];

const verbDisplay = document.getElementById('verbDisplay');
const translationInput = document.getElementById('translationInput');
const nextButton = document.getElementById('nextButton');
const checkButton = document.getElementById('checkButton');
const resultMessage = document.getElementById('resultMessage');

let answer = 0;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayNextPronoun() {
    translationInput.value = '';
    resultMessage.textContent = '';
    answer = getRandomNumber(0,pronouns.length-1);
    verbDisplay.textContent = pronouns[answer];
}


function checkString(inputString, testString) {
    const substrings = inputString.split('/');

    for (let i = 0; i < substrings.length; i++) {
        const substring = substrings[i].trim().toLowerCase();
        if (substring === testString.toLowerCase()) {
            return "Corrrect!";
        }
    }
    return "Incorrect. Good luck next time!";
}




function checkTranslation() {
    const translation = translationInput.value;
    const expectedTranslation = answers[answer];

    resultMessage.textContent = checkString(expectedTranslation, translation);

    setTimeout(displayNextPronoun, 1000); 
}

nextButton.addEventListener('click', () => {
    displayNextPronoun();
});

checkButton.addEventListener('click', checkTranslation);

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkTranslation();
    }
});

// Display the first verb when the page loads
displayNextPronoun();
