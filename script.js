const starsContainer = document.querySelector(".stars");

// Create 100 star elements
for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 5}s`;
  starsContainer.appendChild(star);
}
// typewriter effect
var p = document.getElementById("typewriter");
var text = "<Student Web Developer />"; /* The text */

function textTypingEffect(element, text, i = 0) {
  element.textContent += text[i];

  if (i === text.length - 1) {
    return;
  }
  setTimeout(() => textTypingEffect(p, text, i + 1), 50);
}
textTypingEffect(p, text);
console.log(5+5)