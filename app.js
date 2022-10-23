// pick a new random color and assign it to the h1's style property
// randomly pick 3 numbers and put them in a string 'rgb(255, 255, 255)
function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = 0;
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const letters = document.querySelectorAll('.letter');
setInterval(() => {
  for (let letter of letters) {
    letter.style.color = randomRGB();
  };
}, 800);