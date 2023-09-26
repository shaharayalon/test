// האיקס תמיד מתחיל. המטרה היא שיהיה רצף של 3 מאותה צורה. כל ניצחון של שחקן מוסיף לו נקודה. הפונקציות פה בודקות את כל האפשרויותשל הניצחון ומזינות מידע בהתאם באזורים השונים של המשחק: אזור השחקנים והנקודות שלהם והלוח עצמו בו יהיה מסומן הניצחון באדום יפה

let player = "X";
let points = document.querySelectorAll(".point");
let btn = document.querySelector("#btn");
let player1Points = 0;
let player2Points = 0;
let endGame = 0;
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");

const start = () => {
  if (player1) {
    player1.innerHTML = "PLAYER X" + "<br>" + player1Points;
  }
  if (player2) {
    player2.innerHTML = "PLAYER O" + "<br>" + player2Points;
  }
  if (endGame) {
    endGame = 0;
  }
  if (player) {
    player = "X";
  }

  if (points && points.length) {
    for (let point of points) {
      point.style.backgroundColor = "#14bdac";
      point.innerHTML = "";
      point.addEventListener("click", () => {
        play(point);
      });
    }
  }
};

const play = (point) => {
  if (endGame == 0) {
    if (!point.innerHTML) {
      point.innerHTML = player;
      change();
      check();
    }
  } else {
    return;
  }
};

const change = () => {
  if (player) {
    if (player == "X") {
      player = "O";
      return;
    }
    if (player == "O") {
      player = "X";
      return;
    }
  }
};

const check = () => {
  if (points) {
    for (let i = 0; i <= 6; i += 3) {
      if (points[i].innerHTML) {
        if (
          points[i].innerHTML == points[i + 1].innerHTML &&
          points[i + 1].innerHTML == points[i + 2].innerHTML
        ) {
          points[i].style.backgroundColor = "rgb(247, 135, 135)";
          points[i + 1].style.backgroundColor = "rgb(247, 135, 135)";
          points[i + 2].style.backgroundColor = "rgb(247, 135, 135)";
          if (points[i].innerHTML == "X" && typeof player1Points == "number") {
            player1Points++;
          } else if (
            points[i].innerHTML == "O" &&
            typeof player2Points == "number"
          ) {
            player2Points++;
          }
          if (player1) {
            player1.innerHTML = "PLAYER X" + "<br>" + player1Points;
          }
          if (player2) {
            player2.innerHTML = "PLAYER O" + "<br>" + player2Points;
          }
          if (!endGame) {
            endGame = 1;
          }
          if (btn) {
            btn.style.display = "block";
          }
          return;
        }
      }
    }

    for (let v = 0; v <= 2; v++) {
      if (points[v].innerHTML) {
        if (
          points[v].innerHTML == points[v + 3].innerHTML &&
          points[v + 3].innerHTML == points[v + 6].innerHTML
        ) {
          points[v].style.backgroundColor = "rgb(247, 135, 135)";
          points[v + 3].style.backgroundColor = "rgb(247, 135, 135)";
          points[v + 6].style.backgroundColor = "rgb(247, 135, 135)";
          if (points[v].innerHTML == "X" && typeof player1Points == "number") {
            player1Points++;
          } else if (
            points[v].innerHTML == "O" &&
            typeof player2Points == "number"
          ) {
            player2Points++;
          }
          if (player1) {
            player1.innerHTML = "PLAYER X" + "<br>" + player1Points;
          }
          if (player2) {
            player2.innerHTML = "PLAYER O" + "<br>" + player2Points;
          }
          if (!endGame) {
            endGame = 1;
          }
          if (btn) {
            btn.style.display = "block";
          }
          return;
        }
      }
    }
    if (points[0].innerHTML) {
      if (
        points[0].innerHTML == points[4].innerHTML &&
        points[4].innerHTML == points[8].innerHTML
      ) {
        points[0].style.backgroundColor = "rgb(247, 135, 135)";
        points[4].style.backgroundColor = "rgb(247, 135, 135)";
        points[8].style.backgroundColor = "rgb(247, 135, 135)";
        if (points[0].innerHTML == "X" && typeof player1Points == "number") {
          player1Points++;
        } else if (
          points[0].innerHTML == "O" &&
          typeof player2Points == "number"
        ) {
          player2Points++;
        }
        if (player1) {
          player1.innerHTML = "PLAYER X" + "<br>" + player1Points;
        }
        if (player2) {
          player2.innerHTML = "PLAYER O" + "<br>" + player2Points;
        }
        if (!endGame) {
          endGame = 1;
        }
        if (btn) {
          btn.style.display = "block";
        }
        return;
      }
    }

    if (points[2].innerHTML) {
      if (
        points[2].innerHTML == points[4].innerHTML &&
        points[4].innerHTML == points[6].innerHTML
      ) {
        points[2].style.backgroundColor = "rgb(247, 135, 135)";
        points[4].style.backgroundColor = "rgb(247, 135, 135)";
        points[6].style.backgroundColor = "rgb(247, 135, 135)";
        if (points[2].innerHTML == "X" && typeof player1Points == "number") {
          player1Points++;
        } else if (
          points[2].innerHTML == "O" &&
          typeof player2Points == "number"
        ) {
          player2Points++;
        }
        if (player1) {
          player1.innerHTML = "PLAYER X" + "<br>" + player1Points;
        }
        if (player2) {
          player2.innerHTML = "PLAYER O" + "<br>" + player2Points;
        }
        if (!endGame) {
          endGame = 1;
        }
        if (btn) {
          btn.style.display = "block";
        }
        return;
      }
    }
    let i = 0;
    for (let point of points) {
      if (point.innerHTML) {
        i++;
      }
    }
    if (i == points.length) {
      if (!endGame) {
        endGame = 1;
      }
      if (player1) {
        player1.innerHTML = "PLAYER X" + "<br>" + player1Points;
      }
      if (player2) {
        player2.innerHTML = "PLAYER O" + "<br>" + player2Points;
      }
      if (btn) {
        btn.style.display = "block";
      }
      return;
    }
  }
};

window.addEventListener("load", () => {
  if (btn) {
    btn.style.display = "none";
    btn.addEventListener("click", () => {
      btn.style.display = "none";
      start();
    });
  }
  start();
});
