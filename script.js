let step = 0;

const messages = [
  {
    q: "Even though we are in a long-distance relationship 🌍",
    t: "You were never far from my heart, not even for a second ❤️"
  },
  {
    q: "Every single day 💭",
    t: "I think about how you’re feeling and hope you smiled today"
  },
  {
    q: "Yuktha ✨",
    t: "You changed me — the way I love, the way I see life"
  },
  {
    q: "When you came into my life 💫",
    t: "I started feeling lucky every single day"
  },
  {
    q: "With you ❤️",
    t: "Life feels calmer, happier, and meaningful"
  }
];

function start() {
  const music = document.getElementById("music");
  if (music) {
    music.volume = 0.6;
    music.play().catch(() => {});
  }
  next();
}

function next() {
  const question = document.getElementById("question");
  const text = document.getElementById("text");
  const buttons = document.querySelector(".buttons");

  if (!question || !text || !buttons) return;

  if (step < messages.length) {
    question.innerHTML = "";
    text.innerHTML = "";

    setTimeout(() => {
      question.innerHTML = messages[step].q;
    }, 1000);

    setTimeout(() => {
      text.innerHTML = messages[step].t;
    }, 2200);

    buttons.innerHTML = `<button onclick="next()">Continue 💕</button>`;
    step++;
  } else {
    finalProposal();
  }
}

function finalProposal() {
  const question = document.getElementById("question");
  const text = document.getElementById("text");
  const photos = document.getElementById("photos");
  const buttons = document.querySelector(".buttons");

  question.innerHTML = "";
  text.innerHTML = "";

  setTimeout(() => {
    question.innerHTML = "Yuktha ❤️";
  }, 1000);

  setTimeout(() => {
    text.innerHTML = `
      Happy Valentine’s Day ❤️<br><br>
      You are my favorite blessing.<br>
      My safest place.<br>
      My forever.<br><br>
      Will you be my Valentine?<br>
      Will you marry me? 💍<br><br>
      Forever yours,<br>
      <b>Rahul</b>
    `;
  }, 2500);

  if (photos) photos.style.display = "flex";
  if (buttons) buttons.innerHTML = "";
}
