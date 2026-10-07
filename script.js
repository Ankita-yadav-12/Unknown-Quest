const startButton = document.getElementById("startButton");


    
const gameScreen = document.getElementById("gameScreen");

const surpriseScreen = document.getElementById("surpriseScreen");

const surpriseText = document.getElementById("surpriseText");

const surpriseNext = document.getElementById("surpriseNext");
const finalScreen =
    document.getElementById("finalScreen");

// =========================
// START GAME
// =========================

startButton.addEventListener("click", function() {

    gameScreen.style.display = "none";

    surpriseScreen.style.display = "flex";

});


// =========================
// BIRTHDAY MESSAGES
// =========================

const messages = [

    "kya lagta hai,what is the game about?👀",

    "kya hi kregi mai,kya hi banaegi,chhotaa sa hai bs kuchh",

    "bana to rhi vaise..,tereko :')",

    "anyways, banaya hai maine..khel..maut ka khel .hehe  👀",

    "Because today is something something day",

    "And obviously kuchh normal sa krne me kya hi maza.",

    "That would be way too boring.",

    "normal to maari dictionary me hai hi naaaa",

    "So I made you this instead. 🎮",

    "ok,You can click NEXT now."

];


// Keep track of which message we're on

let currentMessage = 0;


// Keep track of button behavior

let buttonStage = 0;


// =========================
// NEXT BUTTON
// =========================

// NEXT BUTTON
surpriseNext.addEventListener("click", function() {

    // After 6 escapes, clicking the button opens the birthday screen
    if (escapeCount >= 15) {

        surpriseScreen.style.display = "none";
        finalScreen.style.display = "flex";
        createConfetti();

        return;
    }

    currentMessage++;

    if (currentMessage < messages.length) {

        surpriseText.style.opacity = "0";

        setTimeout(function() {

            surpriseText.textContent = messages[currentMessage];
            surpriseText.style.opacity = "1";

        }, 250);
    }

    if (currentMessage === 8) {

        buttonStage = 1;
        surpriseNext.textContent = "NEXT?";
    }

    if (currentMessage === 9) {

        buttonStage = 2;
        surpriseNext.textContent = "right me move kr mouse";
    }

});


// BUTTON ESCAPES
let escapeCount = 0;

surpriseNext.addEventListener("mouseenter", function() {

    if (buttonStage !== 2) {
        return;
    }

    // If it has escaped 6 times, stop running away
    if (escapeCount >= 15) {
        surpriseNext.style.position = "static";
        surpriseNext.style.transform = "none";
        surpriseNext.textContent = "OKAY, CLICK ME 😭";
        return;
    }

    escapeCount++;

    const maxX = window.innerWidth - surpriseNext.offsetWidth - 40;
    const maxY = window.innerHeight - surpriseNext.offsetHeight - 40;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    surpriseNext.style.position = "fixed";
    surpriseNext.style.left = randomX + "px";
    surpriseNext.style.top = randomY + "px";

    // Change text as it escapes
    if (escapeCount === 1) {
        surpriseNext.textContent = "NOPE";
    }

    if (escapeCount === 2) {
        surpriseNext.textContent = "TOO SLOW 😂";
    }

    if (escapeCount === 3) {
        surpriseNext.textContent = "NICE TRY";
    }

    if (escapeCount === 4) {
        surpriseNext.textContent = "NOT YET 👀";
    }

    if (escapeCount === 5) {
        surpriseNext.textContent = "ALMOST 😭";
    }

    if (escapeCount === 6) {
        surpriseNext.textContent = "OKAY FINE...";
    }
    if (escapeCount === 7) {
        surpriseNext.textContent = "billu";
    }
    if (escapeCount === 8) {
        surpriseNext.textContent = "kr click";
    }
    if (escapeCount === 9) {
        surpriseNext.textContent = "IDHAR..";
    }
    if (escapeCount === 10) {
        surpriseNext.textContent = "OYEEEE..";
    }
    if (escapeCount === 11) {
        surpriseNext.textContent = "GADHEDO...";
    }
    if (escapeCount === 12) {
        surpriseNext.textContent = "JYDA HO GYA KE..";
    }
    if (escapeCount === 13) {
        surpriseNext.textContent = "CHAL JAA krle...";
    }
    if (escapeCount === 14) {
        surpriseNext.textContent = "last click, idhar aa";
    }
    if (escapeCount === 15) {
        surpriseNext.textContent = "OKAY FINE...";
    }
    
});
function createConfetti() {

    const container = document.getElementById("confetti-container");

    if (!container) {
        console.log("CONFETTI CONTAINER NOT FOUND!");
        return;
    }

    console.log("CONFETTI STARTED!");

    container.innerHTML = "";

    const colors = [
        "#ffffff",
        "#ffd166",
        "#7dd3fc",
        "#c4b5fd",
        "#f9a8d4"
    ];

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        container.appendChild(piece);
    }
}
