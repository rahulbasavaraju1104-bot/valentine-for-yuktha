let step = 0;

const messages = [
  { q: "Even though we are far 🌍", t: "you were never far from my heart ❤️" },
  { q: "Every single day", t: "I think about how you are feeling, how your day went" },
  { q: "Yuktha ✨", t: "you changed me in ways I never imagined" },
  { q: "Since you came into my life", t: "I feel lucky every single day" },
  { q: "With you", t: "life feels calmer, happier, and meaningful" }
];

function start() {
  const music = document.getElementById("music");
  music.volume = 0.6;
  music.play().catch(()=>{});
  next();
}

function next() {
  if (step < messages.length) {
    document.getElementById("question").innerText = "";
    document.getElementById("text").innerText = "";

    setTimeout(() => {
      document.getElementById("question").innerText = messages[step].q;
    }, 1000);

    setTimeout(() => {
      document.getElementById("text").innerText = messages[step].t;
    }, 2300);

    document.querySelector(".buttons").innerHTML =
      `<button onclick="next()">Continue 💕</button>`;

    step++;
  } else {
    proposal();
  }
}

function proposal() {
  document.getElementById("question").innerText = "";
  document.getElementById("text").innerText = "";

  setTimeout(() => {
    document.getElementById("question").innerText = "Yuktha ❤️";
  }, 1000);

  setTimeout(() => {
    document.getElementById("text").innerText =
      "Happy Valentine’s Day ❤️\n\nYou are my favorite blessing.\nMy safest place.\nMy forever.\n\nWill you be my Valentine?\nWill you marry me? 💍\n\nForever yours,\nRahul";
  }, 2600);

  document.getElementById("photos").style.display = "flex";
  document.querySelector(".buttons").innerHTML = "";
}
