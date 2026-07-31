// ==========================================
// Typewriter Effect Module
// ==========================================

export function initTypewriter() {
  const texts = [
    "Computer Science Graduate",
    "Game Developer & Unity Enthusiast",
    "Full-Stack & Web Engineer",
    "C# & Java Specialist",
    "ML-Agents & RL Explorer"
  ];
  
  const target = document.querySelector('.typing-text');
  if (!target) return;

  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];

    if (isDeleting) {
      letter = currentText.substring(0, index - 1);
      index--;
      typingSpeed = 50;
    } else {
      letter = currentText.substring(0, index + 1);
      index++;
      typingSpeed = 100;
    }

    target.textContent = letter;

    if (!isDeleting && letter === currentText) {
      typingSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && letter === "") {
      isDeleting = false;
      count++;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}
