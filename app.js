var score = {
  userScore: 0,
  cpuScore: 0,
};

var userPick; //dichiaro ma non assegno perchè il valore viene dato dal click dell'utente
var cpuPick; //non assegno perchè il valore viene dato in maniera casuale dalla nostra function generateCpuPick()

var allOptions = [
  { name: "sasso", image: "assets/sasso.png" },
  { name: "carta", image: "assets/carta.png" },
  { name: "forbice", image: "assets/forbice.png" },
];

var possibleUserPicks = document.getElementsByClassName("user-choice");

for (var index = 0; index < possibleUserPicks.length; index++) {
  possibleUserPicks[index].addEventListener("click", onUserPick);
}

function onUserPick() {
  userPick = this.dataset.name;
  //console.log("Your choise is: ", userPick); da vedere in console
  generateCpuPick();
  //console.log("Cpu choice is: ", cpuPick.name); da vedere in console
  //console.log(checkWhoWon()); da vedere in console

  var cpuPickImg = "<img src='" + cpuPick.image + "'/>";
  var cpuPickText = "<h3>" + cpuPick.name + "</h3>";

  document.getElementById("computer-choice").innerHTML =
    cpuPickImg + cpuPickText; // mostriamo la scelta del cpu
  document.getElementById("result").innerHTML = checkWhoWon(); // mostriamo il risultato

  document.getElementById("player-score").innerHTML = score.userScore; // mandiamo a schermo lo score per interfaccia
  document.getElementById("cpu-score").innerHTML = score.cpuScore; // mandiamo a schermo lo score per interfaccia
}

function generateCpuPick() {
  cpuPick = allOptions[Math.floor(Math.random() * allOptions.length)];
}

function checkWhoWon() {
  if (userPick == cpuPick.name) {
    return "Tie!";
  } else {
    if (userPick == "sasso") {
      if (cpuPick.name == "forbice") {
        score.userScore++;
        return "You Win!";
      } else {
        score.cpuScore++;
        return "You Lose!";
      }
    }

    if (userPick == "carta") {
      if (cpuPick.name == "sasso") {
        score.userScore++;
        return "You Win!";
      } else {
        score.cpuScore++;
        return "You Lose!";
      }
    }

    if (userPick == "forbice") {
      if (cpuPick == "carta") {
        score.userScore++;
        return "You Win!";
      } else {
        score.cpuScore++;
        return "You Lose!";
      }
    }
  }
}
