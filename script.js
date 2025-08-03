// Floating hearts
let heartInterval;
const heartsContainer = document.getElementById("hearts");

const floatingMessages = [
  "I love you 💖",
  "You're my sunshine 🌞",
  "Forever mine 💘",
  "Your laugh = my favorite sound 🥰",
  "With you, even silence is sweet 💌",
  "Can’t stop thinking about you 😚",
  "I want to hold your hand forever 🫶",
  "You're the missing piece to my heart 🧩",
  "My heart beats your name 💓",
  "You're my favorite hello and hardest goodbye 💕"
];


function startHearts() {
  heartInterval = setInterval(() => {
    const heart = document.createElement("span");
    const message = floatingMessages[Math.floor(Math.random() * floatingMessages.length)];
    
    heart.innerText = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.position = "absolute";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    heart.classList.add("floating-heart");

    const label = document.createElement("div");
    label.className = "heart-label";
    label.innerText = message;
    heart.appendChild(label);

    // Show popup on click
    heart.onclick = () => {
      showPopup(message);
    };

    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }, 600);
}



// Typing I Love You
function typeILoveYou(text, targetElement) {
  let i = 0;
  targetElement.innerHTML = "";
  const interval = setInterval(() => {
    if (i < text.length) {
      targetElement.innerHTML += text[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, 150);
}

// Heart card logic
const heartMessages = [
  "Even though we’re apart, your smile still lights up everything for me. 💖",
  "A simple 'hey' from you feels like a warm hug across the distance. 🫂",
  "You’re far, but never out of my thoughts, you’re woven into my days. 💫",
  "I used to think home was a place, but now, it’s wherever I feel closest to you. 💗"
];

function showMessage(index) {
  const box = document.getElementById("heart-message");
  box.innerText = heartMessages[index];
  box.style.display = "block";
}

// Yes/No logic
let noClickCount = 0;
const question = document.getElementById("main-question");
const goBackBtn = document.getElementById("go-back-btn");

const fallbackMessages = [
  "Are you sure you don’t wanna be my girlfriend, Aananda? 😢",
  "Hmm... Maybe that was just a mistake Aananda? You can still say yes 😊",
  "It’s okay, Aananda. Mistakes happen. But I’m giving you one more chance 😌",
  "Still no, Aananda? Okay... but you're missing out on something pretty special 😌💔"
];

function respond(choice) {
  if (choice === "yes") {
    typeILoveYou("I Love You, Aananda 💖", question);
    goBackBtn.classList.remove("show");
    startHearts();
  } else {
    const msgIndex = Math.floor(noClickCount / 2);
    if (noClickCount % 2 === 0) {
      question.innerText = fallbackMessages[Math.min(msgIndex, fallbackMessages.length - 1)];
      showGoBack();
    } else {
      question.innerText = "Will you be my girlfriend, Aananda? 💖";
      hideGoBack();
    }
    noClickCount++;
  }
}

function goBack() {
  question.innerText = "Will you be my girlfriend? 💖";
  hideGoBack();
  noClickCount++;
}

function showGoBack() {
  goBackBtn.classList.add("show");
}

function hideGoBack() {
  goBackBtn.classList.remove("show");
}
function showPopup(text) {
  const popup = document.getElementById("popup");
  const popupMsg = document.getElementById("popup-message");
  popupMsg.innerText = text;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
