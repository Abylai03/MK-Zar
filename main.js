const SubZero = {
  name: "Sub-Zero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["kunai", "shuriken"],
  attack: function () {
    console.log(player1.name + " Fight");
  },
};

const Scorpion = {
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["kunai", "shuriken"],
  attack: function () {
    console.log(this.name + " Fight");
  },
};

function createPlayer(selector, object) {
  const player1 = document.createElement("div");
  const progressbar = document.createElement("div");
  const character = document.createElement("div");
  let life = document.createElement("div");
  let name = document.createElement("div");
  let img = document.createElement("img");
  const arenas = document.querySelector(".arenas");

  life.style.width = '100%';
  name.innerText = object.name;
  name.style.fontSize = '28px';
  name.style.color = 'white';
  life.innerText = object.hp;
  img.src = object.img;

  player1.classList.add(selector);
  progressbar.classList.add("progressbar");
  character.classList.add("character");

  character.appendChild(img);
  character.appendChild(name);
  player1.appendChild(progressbar);
  player1.appendChild(character);
  arenas.appendChild(player1);
}

createPlayer('player1', Scorpion);
createPlayer('player2', SubZero);
