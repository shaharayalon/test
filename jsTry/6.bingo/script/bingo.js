// משחק בינגו. מערך של מספרים מאחד עד 80 שקודם כל יוכנס ללוח המספרים ולאחר מכן יעורבב בעזרת פונקציה ויוכנסו רק 25 המספרים הראשונים שלו ללוח של השחקן. לאחר מכן יעורבב שוב וזה יהיה סדר המספרים שיופיעו אחד אחרי השני בלוח. נייס. כל 4 שניות יוצג מספר. לאחר 45 מספרים המשחק יפסיק. כל לחיצה על אזור שהמספר שלו הוצג , יגרום לאזור להיצבע באדום. בינגו שזה שורה או טור או אלכסון שצבועים באדום המספרים שלהם ייצבעו בלבן. בסוף המשחק לאחר 45 מספרים ייבדקו כמה בינגואים יש וזה יוצג באלרט פשוט.

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

let fullNumbersBoard = document.querySelector("#fullNumbersBoard");
let boardPlace = document.querySelectorAll(".boardPlace");
let numbersArr = [];
let numPlace = document.querySelectorAll(".numPlace");
let chosenNumbers = [];
let startTheGame = document.querySelector("#startTheGame");
let theNum = document.querySelector("#theNum");
let x = 1;
let chosenNum = 1;
let bingos = 1;
let endGame = 0;

const setNumbers = () => {
  let i = 1;
  if (boardPlace) {
    for (let place of boardPlace) {
      place.innerHTML = i;
      if (numbersArr) {
        numbersArr.push(i);
      }
      i++;
    }
  }
  numbersArr = shuffle(numbersArr);

  i = 0;

  if (numPlace) {
    for (let place of numPlace) {
      place.innerHTML = numbersArr[i];
      i++;
    }
  }
};

const bingoplay = () => {

  if (numbersArr) {
    numbersArr = shuffle(numbersArr);
  }

  if (theNum) {
    theNum.innerText = numbersArr[0];
  }
  if (chooseNumbers) {
    chosenNumbers.push(numbersArr[0]);
  }

  if (boardPlace) {
    for (let place of boardPlace) {
      if (place.innerHTML == numbersArr[0]) {
        place.style.backgroundColor = "green";
      }
    }
  }
  x = setInterval(chooseNumbers, 4000);
};

const checkNumber = (place) => {
  if (endGame == 0) {
    for (let number of chosenNumbers) {
      if (place.innerHTML == number) {
        place.style.backgroundColor = "red";
        checkBingo(place);
      }
    }
  } else {
    return;
  }
};
const chooseNumbers = () => {
  if (theNum) {
    theNum.innerText = numbersArr[chosenNum];
  }
  if (chosenNumbers) {
    chosenNumbers.push(numbersArr[chosenNum]);
  }
  if (boardPlace) {
    for (let place of boardPlace) {
      if (place.innerHTML == numbersArr[chosenNum]) {
        place.style.backgroundColor = "green";
      }
    }
  }


  if (chosenNum) {
    chosenNum++;
  }
  if (chosenNumbers.length == 2) {
    setTimeout(stopGame, 4000);
  }
};

const stopGame = () => {
  clearInterval(x);
  if (!endGame) {
    endGame = 1;
  }

  checkHowMuchBingos();
};

const checkBingo = (place) => {
  if (numPlace) {

    for (let i = 0; i <= 20; i += 5) {
      if (
        numPlace[i].style.backgroundColor == "red" &&
        numPlace[i + 1].style.backgroundColor == "red" &&
        numPlace[i + 2].style.backgroundColor == "red" &&
        numPlace[i + 3].style.backgroundColor == "red" &&
        numPlace[i + 4].style.backgroundColor == "red"
      ) {
        numPlace[i].style.color = "white";
        numPlace[i + 1].style.color = "white";
        numPlace[i + 2].style.color = "white";
        numPlace[i + 3].style.color = "white";
        numPlace[i + 4].style.color = "white";
      }
    }

    for (let i = 0; i < 5; i++) {
      if (
        numPlace[i].style.backgroundColor == "red" &&
        numPlace[i + 5].style.backgroundColor == "red" &&
        numPlace[i + 10].style.backgroundColor == "red" &&
        numPlace[i + 15].style.backgroundColor == "red" &&
        numPlace[i + 20].style.backgroundColor == "red"
      ) {
        numPlace[i].style.color = "white";
        numPlace[i + 5].style.color = "white";
        numPlace[i + 10].style.color = "white";
        numPlace[i + 15].style.color = "white";
        numPlace[i + 20].style.color = "white";
      }
    }

    if (
      numPlace[0].style.backgroundColor == "red" &&
      numPlace[6].style.backgroundColor == "red" &&
      numPlace[12].style.backgroundColor == "red" &&
      numPlace[18].style.backgroundColor == "red" &&
      numPlace[24].style.backgroundColor == "red"
    ) {
      numPlace[0].style.color = "white";
      numPlace[6].style.color = "white";
      numPlace[12].style.color = "white";
      numPlace[18].style.color = "white";
      numPlace[24].style.color = "white";
    }
    if (
      numPlace[4].style.backgroundColor == "red" &&
      numPlace[8].style.backgroundColor == "red" &&
      numPlace[12].style.backgroundColor == "red" &&
      numPlace[16].style.backgroundColor == "red" &&
      numPlace[20].style.backgroundColor == "red"
    ) {
      numPlace[4].style.color = "white";
      numPlace[8].style.color = "white";
      numPlace[12].style.color = "white";
      numPlace[16].style.color = "white";
      numPlace[20].style.color = "white";
    }
  }
};

const checkHowMuchBingos = () => {

  if (numPlace && bingos) {
    bingos = 0;
    for (let i = 0; i <= 20; i += 5) {
      if (
        numPlace[i].style.color == "white" &&
        numPlace[i + 1].style.color == "white" &&
        numPlace[i + 2].style.color == "white" &&
        numPlace[i + 3].style.color == "white" &&
        numPlace[i + 4].style.color == "white"
      ) {
        bingos++;
      }
    }

    for (let i = 0; i < 5; i++) {
      if (
        numPlace[i].style.color == "white" &&
        numPlace[i + 5].style.color == "white" &&
        numPlace[i + 10].style.color == "white" &&
        numPlace[i + 15].style.color == "white" &&
        numPlace[i + 20].style.color == "white"
      ) {
        bingos++;
      }
    }

    if (
      numPlace[0].style.color == "white" &&
      numPlace[6].style.color == "white" &&
      numPlace[12].style.color == "white" &&
      numPlace[18].style.color == "white" &&
      numPlace[24].style.color == "white"
    ) {
      bingos++;
    }
    if (
      numPlace[4].style.color == "white" &&
      numPlace[8].style.color == "white" &&
      numPlace[12].style.color == "white" &&
      numPlace[16].style.color == "white" &&
      numPlace[20].style.color == "white"
    ) {
      bingos++;
    }
    alert("your number of bingos is: " + bingos);
    location.reload();
  }
};

window.addEventListener("load", () => {
  setNumbers();
  if (startTheGame) {
    startTheGame.addEventListener("click", () => {
      startTheGame.style.display = "none";
      bingoplay();
      for (let place of numPlace) {
        place.addEventListener("click", () => {
          checkNumber(place);
        });
      }
    });
  }
});
