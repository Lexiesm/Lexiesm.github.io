const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const gif = document.querySelector('.gif');
const container = document.querySelector('.container');

const gifsNo = [
  "https://media.tenor.com/sn2VlcXM580AAAAM/fat-cat.gif",
  "https://a0.anyrgb.com/pngimg/806/1890/sandwich-loaf-long-tail-keyword-pusheen-telegram-set-of-keyword-bread-idea-emoticon-small-to-medium-sized-cats-thumbnail.png",
  "https://media.tenor.com/5ImOUsM-lWUAAAAe/fat-cat.png",
  "https://art.pixilart.com/f7022f6b8c59703.png",
  "https://media.tenor.com/SrwLggbH1VYAAAAM/you-bite-your-tounge-pusheen.gif",
  "https://media.tenor.com/T3wQvcGijRQAAAAM/pusheen-angry.gif",
  "https://media.tenor.com/vsFl98nfL3cAAAAM/pusheen-charge.gif"
];

const frasesNo = [
  "NO TOQUES ESE BOTÓN",
  "EPAAAA A DONDE VAS",
  "NI SE TE OCURRA",
  "ATRAPAME SI PUEDES",
  "NO PUEDES DECIR QUE NO >:D",
  "JEJE, SIGUE INTENTANDO",
  "SORPRESA, NO PUEDES DECIR QUE NO"
];

let currentGifIndex = 0; 
let currentFraseIndex = 0;

function mostrarMensaje(texto, tamaño = "30px") {
  const mensajeExistente = document.getElementById('mensaje');
  if (mensajeExistente) mensajeExistente.remove();

  const mensaje = document.createElement('div');
  mensaje.id = 'mensaje';
  mensaje.textContent = texto;
  mensaje.style.color = '#ff1a75';
  mensaje.style.fontSize = tamaño; 
  mensaje.style.margin = '10px 0';
  container.insertBefore(mensaje, gif);
}

yesBtn.addEventListener('click', () => {

  const h1s = document.querySelectorAll('h1');
  h1s.forEach(h1 => h1.remove());


  gif.src = 'https://media.tenor.com/vg6RXqC8TM4AAAAM/cute-pusheen.gif';
   mostrarMensaje("Eres oficialmente mi pushivalentine", "60px");
});

noBtn.addEventListener('mouseover', () => {

  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  noBtn.style.position = 'absolute';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';

  gif.src = gifsNo[currentGifIndex];
  currentGifIndex = (currentGifIndex + 1) % gifsNo.length;

  mostrarMensaje(frasesNo[currentFraseIndex]);
  currentFraseIndex = (currentFraseIndex + 1) % frasesNo.length;
});
