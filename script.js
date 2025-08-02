const heartsContainer = document.querySelector('.hearts');

setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 3 + Math.random() * 2 + 's';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 500);
