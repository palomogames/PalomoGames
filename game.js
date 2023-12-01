let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth-20; // Ancho igual al ancho de la ventana del navegador

let playerImg = new Image();
playerImg.src = "taylor2d.png";

let squareImg = new Image();
squareImg.src = "swiftie.JPG";

let player = {
  x: 50,
  y: canvas.height - 70, // Posición inicial desde abajo
  width: 90,
  height: 70,
  speed: 5,
  velX: 0,
  jumping: false,
  facingRight: true, // Variable para rastrear la dirección del jugador

};

let squares = [];
let fallSpeed = 1; // Velocidad de caída inicial

function drawPlayer() {
    if (player.velX > 0) {
      // Si el jugador se mueve hacia la izquierda, invertir horizontalmente
      ctx.save(); // Guardar el estado actual del contexto
      ctx.scale(-1, 1); // Voltear horizontalmente (-1 en el eje x)
      ctx.drawImage(playerImg, -player.x - player.width, player.y, player.width, player.height);
      ctx.restore(); // Restaurar el estado del contexto
    } else {
      ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
    }
  }
function drawSquare(square) {
  ctx.drawImage(squareImg, square.x, square.y, square.width, square.height);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  squares.forEach(drawSquare);
  requestAnimationFrame(gameLoop);
}
let backgroundImage = new Image();
backgroundImage.src = "fondo.jpg";

function drawBackground() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground(); // Dibujar el fondo primero
  drawPlayer();
  squares.forEach(drawSquare);
  requestAnimationFrame(gameLoop);
}

function update() {
  player.x += player.velX;

  if (player.x >= canvas.width - player.width) {
    player.x = canvas.width - player.width;
  } else if (player.x <= 0) {
    player.x = 0;
  }

  squares.forEach(function (square) {
    square.y += fallSpeed; // Usamos la variable de velocidad

    if (
      player.x < square.x + square.width &&
      player.x + player.width > square.x &&
      player.y < square.y + square.height &&
      player.y + player.height > square.y
    ) {
      player.y = -player.height; // Mueve al jugador fuera del canvas para que desaparezca
          document.getElementById('miPopup').style.display = 'block';

    }

    if (square.y > canvas.height) {
      squares.splice(squares.indexOf(square), 1);
    }
  });

  fallSpeed += 0.01; // Aumentamos la velocidad de caída gradualmente

  requestAnimationFrame(update);
}

canvas.addEventListener("touchstart", function (e) {
  if (e.touches) {
    const touchX = e.touches[0].clientX;

    if (touchX < canvas.width / 2) {
      player.velX = -player.speed;
    } else {
      player.velX = player.speed;
    }
  }
});

canvas.addEventListener("touchend", function () {
  player.velX = 0;
});

setInterval(function () {
  for (let i = 0; i < 2; i++) {
    let square = {
      x: Math.random() * (canvas.width - 50),
      y: 0,
      width: 50,
      height: 50,
    };
    squares.push(square);
  }
}, 2000);

gameLoop();
update();
function volverAlMenu() {
    window.location.href = "inicio.html";
}

function volverAJugar() {
    window.location.reload();
}