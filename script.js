let step = 0;

const messages = [
  { q: "Even though we are in a long-distance relationship 🌍", t: "you have never felt far from my heart, not even for a second ❤️" },
  { q: "Every single day 💭", t: "I think about how you’re feeling, if you ate well, if you smiled today" },
  { q: "Yuktha, you changed me ✨", t: "you changed the way I see life, the way I love, the way I believe" },
  { q: "Before you came into my life 💫", t: "I didn’t know love could feel this calm, this safe, this real" },
  { q: "Since you became part of my life ❤️", t: "my days feel brighter, my heart feels fuller, and I feel lucky every day" }
];

function start() {
  document.getElementById("music").play();
  next();
}

function next() {
  if (step < messages.length) {
    document.getElementById("question").innerText = messages[step].q;
    document.getElementById("text").innerText = messages[step].t;
    document.querySelector(".buttons").innerHTML = `<button onclick="next()">Continue 💕</button>`;
    step++;
  } else {
    askValentine();
  }
}

function askValentine() {
  document.getElementById("question").innerText = "Yuktha ❤️";
  document.getElementById("text").innerText = "With all my heart…\nWill you be my Valentine?";
  document.querySelector(".buttons").innerHTML =
    `<button onclick="askMarriage()">Yes 💖</button><button id="no">No 🙄</button>`;
  moveNo();
}

function askMarriage() {
  document.getElementById("question").innerText = "From Rahul 💍";
  document.getElementById("text").innerText =
    "Yuktha,\n\nLoving you was never a decision… it just happened.\nBut choosing you is something I do every single day.\n\nYou made my life feel like home.\nYou made me believe in forever.\n\nThrough distance, time, and every challenge…\nI want to walk life with you.\n\nWill you marry me? ❤️";
  document.querySelector(".buttons").innerHTML = `<button onclick="finalMessage()">Yes, forever 💍</button>`;
}

function finalMessage() {
  document.getElementById("question").innerText = "Happy Valentine’s Day ❤️";
  document.getElementById("text").innerText =
    "Yuktha,\nI am truly lucky to have you in my life.\nThank you for choosing me.\n\nHappy Valentine’s Day.\nWith all my love,\nRahul ❤️";
  document.getElementById("photos").style.display = "flex";
  document.querySelector(".buttons").innerHTML = "";
}

function moveNo() {
  const no = document.getElementById("no");
  no.onmouseover = () => {
    no.style.position = "absolute";
    no.style.top = Math.random() * 80 + "%";
    no.style.left = Math.random() * 80 + "%";
  };
}
