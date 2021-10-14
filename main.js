const SubZero = {
  name: "Sub-Zero",
  hp: 100,
  img: "",
  weapon: ["kunai", "shuriken"],
  attack: function () {
    console.log(player1.name + " Fight");
  },
};

const Scorpion = {
  name: "Scorpion",
  hp: 100,
  img: "",
  weapon: ["kunai", "shuriken"],
  attack: function () {
    console.log(this.name + " Fight");
  },
};

function createPlayer(cl, name, hp) {
  const player1 = document.createElement("div");
  const progressbar = document.createElement("div");
  const character = document.createElement("div");
  const life = document.createElement("div");
  const name = document.createElement("div");
  const img = document.createElement("img");
  const arenas = document.querySelector(".arenas");

  player1.classList.add("player1");
  progressbar.classList.add("progressbar");
  character.classList.add("character");

  character.appendChild(img);
  player1.appendChild(progressbar);
  player1.appendChild(character);
  arenas.appendChild(player1);
}

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);
