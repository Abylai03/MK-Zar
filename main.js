const arenas = document.querySelector(".arenas");
const randomBtn = document.querySelector(".button");

const player1 = {
  number: 1,
  name: "Sub-Zero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["kunai", "shuriken"],
  attack: function () {
    console.log(player1.name + " Fight");
  },
};

const player2 = {
  number: 2,
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["kunai", "shuriken"],
  attack: function () {
    console.log(this.name + " Fight");
  },
};

function createElement(tag, className) {
  let element = document.createElement(tag);

  if (className) {
    element.classList.add(className);
  }

  return element;
}

function createPlayer(object) {
  const player = createElement("div", "player" + object.number);
  const progressbar = createElement("div", "progressbar");
  const character = createElement("div", "character");
  let life = createElement("div", "life");
  let name = createElement("div", "name");
  let img = createElement("img");

  name.innerText = object.name;
  img.src = object.img;

  life.style.width = "100%";
  name.style.fontSize = "21px";
  name.style.color = "white";
  life.style.color = "white";

  if (object.number === 1) {
    life.style.textAlign = "right";
  }

  progressbar.appendChild(name);
  progressbar.appendChild(life);

  character.appendChild(img);

  player.appendChild(progressbar);
  player.appendChild(character);

  return player;
}

let i = 0;
function changeHp(player) {
  const playerLife = document.querySelector(
    ".player" + player.number + " .life"
  );
  let damage = Math.ceil(Math.random() * 20);
  player.hp -= damage;
  playerLife.style.width = player.hp + "%";
  if (player.hp <= 0) {
    player.hp = 0;
    playerLife.style.width = 0 + "%";
  }
}

function playerWin(winner) {
  const loseTitle = createElement("div", "loseTitle");
  loseTitle.innerText = winner.name + " Wins";
  randomBtn.disabled = true;

  arenas.appendChild(loseTitle);
}
function playerDraw() {
  const drawTitle = createElement("div", "loseTitle");
  drawTitle.innerText = "Draw!";
  randomBtn.disabled = true;

  arenas.appendChild(drawTitle);
}
randomBtn.addEventListener("click", function () {
  changeHp(player1);
  changeHp(player2);
  console.log("Player1 HP:" + player1.hp);
  console.log("Player2 HP:" + player2.hp);

  if (player1.hp === 0 && player2.hp === 0) {
    playerDraw();
  } else if (player1.hp === 0) {
    playerWin(player2);
  } else if (player2.hp === 0) {
    playerWin(player1);
  }
});

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));
