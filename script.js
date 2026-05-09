function scramble(word) {
    return word.split("").sort(() => 0.5 - Math.random()).join("");
}

let passwords = ["root", "admin", "cyber", "secure","data","input","javascript","html"];
let password = passwords[Math.floor(Math.random() * passwords.length)];

let score = 0;

// show first hint
document.getElementById("hint").innerText =
    "Encrypted: " + scramble(password);

// terminal log
function logMessage(message) {
    let output = document.getElementById("output");

    let line = document.createElement("p");
    line.innerText = message;
    output.appendChild(line);

    output.scrollTop = output.scrollHeight;
}

// MAIN GAME FUNCTION
function checkGuess() {

    // 🔥 THIS FIXES THE "GLITCH"
    document.getElementById("output").innerHTML = "";
   

    let guess = document.getElementById("guess").value;

    if (guess === password) {
        logMessage(">> Attempting access...");
        document.getElementById("result").innerText = "ACCESS GRANTED";

        logMessage(">> Access granted");
        logMessage(">> Extracting data...");

        score++;

        // new password
        password = passwords[Math.floor(Math.random() * passwords.length)];

        // update hint
        document.getElementById("hint").innerText =
            "Encrypted: " + scramble(password);

    } else {
        logMessage(">> Attempting access...");
        logMessage(">> Attempt failed");

        document.getElementById("result").innerText = "ACCESS DENIED";
    }

    document.getElementById("score").innerText = "Score: " + score;
}
const introLines = [
logMessage(">> bro entered the system .. "),
logMessage(">> verifying vibes..."),
logMessage(">> you are not alone"),
logMessage(">> something is watching"),
logMessage(">> do not turn around"),
logMessage(">> level 0 is endless"),
logMessage(">> it hears you typing")
];

function playIntro() {
    let output = document.getElementById("output");
    output.innerHTML = "";

    let i = 0;

    let interval = setInterval(() => {
        if (i < introLines.length) {
            let line = document.createElement("p");
            line.innerText = introLines[i];
            output.appendChild(line);

            output.scrollTop = output.scrollHeight;

            i++;
        } else {
            clearInterval(interval);
        }
    }, 800); // speed (lower = faster)
}
document.getElementById("guess").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});
document.addEventListener("mousemove", (e) => {
    const panel = document.querySelector(".side-panel");

    let x = (window.innerWidth / 2 - e.clientX) / 40;
    let y = (window.innerHeight / 2 - e.clientY) / 40;

    panel.style.transform =
        `translateY(-50%) perspective(800px) rotateY(${x}deg) rotateX(${y}deg)`;
});
// TIMER
let time = 140;

let timer = setInterval(() => {
    time--;
    document.getElementById("result").innerText = "Time left: " + time;

    if (time <= 0) {
        document.getElementById("result").innerText = "ACCESS DENIED - TIME OUT";
        clearInterval(timer);
    }
}, 1000);
