// Create floating hearts
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (8 + Math.random() * 5) + 's';
  heart.style.opacity = Math.random();
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 15000);
}

setInterval(createHeart, 300);

// Background audio play
window.addEventListener("click", function () {
  const audio = new Audio("song2.m4a");
  audio.loop = true;
  audio.play().catch(() => {
    // Autoplay failed silently (usually due to browser policies)
  });
}, { once: true });
