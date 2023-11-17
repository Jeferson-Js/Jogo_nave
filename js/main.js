const personagem = document.getElementById("personagem");

let posX = 0;
let speed = 10;
let moveLeft = false;
let moveRight = false;

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      moveLeft = true;
      break;
    case "ArrowRight":
      moveRight = true;
      break;
    case " ":
      disparo();
      console.log("Disparou");
      break;
  }
});

document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      moveLeft = false;
      break;
    case "ArrowRight":
      moveRight = false;
  }
});

const atualizajogo = () => {
  personagem.style.left = posX + "px";

  if (moveLeft && posX > 0) {
    posX -= speed;
  }

  if (moveRight && posX < window.innerWidth - personagem.offsetWidth) {
    posX += speed;
  }

  requestAnimationFrame(atualizajogo);
};

atualizajogo();

let velocidade = 3;

const disparo = () => {
  const bala = document.createElement("div");
  bala.classList.add("bala");
  document.body.appendChild(bala);

  bala.style.top = personagem.offsetTop + personagem.offsetHeight / 2 - bala.offsetHeight / 2 + "px";
  bala.style.left = personagem.offsetLeft + personagem.offsetWidth / 2 - bala.offsetWidth / 2 + "px";

  let intervalo = setInterval(() => {
    let position = parseInt(bala.style.top);
    if (position <= 0) {
      clearInterval(intervalo);
      document.body.removeChild(bala);
    } else {
      bala.style.top = position - velocidade + "px";
    }
  }, 10);
};
