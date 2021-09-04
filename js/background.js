const images = [];

for (let i = 0; i < 7; ++i) {
  images.push(`${i}.jpg`.padStart(6, "0"));
}

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), 80%, rgba(0, 0, 0, 0.7), 90%, rgba(0, 0, 0, 1.0)), url(img/${chosenImage})`;

function onResizeWindow() {
  document.body.style.height = `${document.body.clientWidth * 0.7}px`;
}

window.onresize = onResizeWindow;
onResizeWindow();
