// משחק הזיכרון של סדרות שאני אוהב. כל כפתור מציג לוח עם גריד בהתאם של מספר הקלפים. כל פעם תור של שחקן אחר. אם שחקן מצא זוג אז תורו ממשיך. הכל כתוב בהתאם בתוך המשחק. כל פעם שנלחת על קלף הוא ייפתח, ברגע שנלחצו 2 קלפים הם ייבדקו, האם הם זוג. אם הם זוג הם יישארו וימוסגרו בירוק, ואם לא הם יחזרו למצבם ההפוך המקורי. בסוף המשחק ייספרו הזוגות ובעל הזוגות הרב ביותר ינצח. או שיהיה תיקו.
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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

let container = document.querySelector("#container");
let gameContainer = document.querySelector("#gameContainer");
let createGridBtn6 = document.querySelector("#createGridBtn6");
let createGridBtn9 = document.querySelector("#createGridBtn9");
let createGridBtn12 = document.querySelector("#createGridBtn12");
let createGridBtn15 = document.querySelector("#createGridBtn15");
let createGridBtn18 = document.querySelector("#createGridBtn18");
let createGridBtn21 = document.querySelector("#createGridBtn21");
let gridOptions = [
  ["1/2", "1/2"],
  ["1/2", "2/3"],
  ["1/2", "3/4"],
  ["2/3", "1/2"],
  ["2/3", "2/3"],
  ["2/3", "3/4"],
  ["3/4", "1/2"],
  ["3/4", "2/3"],
  ["3/4", "3/4"],
  ["4/5", "1/2"],
  ["4/5", "2/3"],
  ["4/5", "3/4"],
  //   עד כאן האופציות של 6 זוגות
  ["5/6", "1/2"],
  ["5/6", "2/3"],
  ["5/6", "3/4"],
  ["6/7", "1/2"],
  ["6/7", "2/3"],
  ["6/7", "3/4"],
  //   עד כאן האופציות של 9 זוגות
  ["1/2", "4/5"],
  ["2/3", "4/5"],
  ["3/4", "4/5"],
  ["4/5", "4/5"],
  ["5/6", "4/5"],
  ["6/7", "4/5"],
  //   עד כאן האופציות של 12 זוגות
  ["1/2", "5/6"],
  ["2/3", "5/6"],
  ["3/4", "5/6"],
  ["4/5", "5/6"],
  ["5/6", "5/6"],
  ["6/7", "5/6"],
  //   עד כאן האופציות של 15 זוגות
  ["1/2", "6/7"],
  ["2/3", "6/7"],
  ["3/4", "6/7"],
  ["4/5", "6/7"],
  ["5/6", "6/7"],
  ["6/7", "6/7"],
  //   עד כאן האופציות של 18 זוגות
  ["7/8", "1/2"],
  ["7/8", "2/3"],
  ["7/8", "3/4"],
  ["7/8", "4/5"],
  ["7/8", "5/6"],
  ["7/8", "6/7"],
  //   עד כאן האופציות של 21 זוגות
];

let boxesArr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41,
];
let currentBoxesArr = [];
let imgArr = [
  "url(./assets/arthur.png)",
  "url(./assets/arthur.png)",
  "url(./assets/bojack_horseman.jpeg)",
  "url(./assets/bojack_horseman.jpeg)",
  "url(./assets/breaking_bad.jpeg)",
  "url(./assets/breaking_bad.jpeg)",
  "url(./assets/gini_and_georgia.webp)",
  "url(./assets/gini_and_georgia.webp)",
  "url(./assets/hatunami.jpeg)",
  "url(./assets/hatunami.jpeg)",
  "url(./assets/how_i_met_your_mother.png)",
  "url(./assets/how_i_met_your_mother.png)",
  "url(./assets/ish_hashuv_mehod.jpeg)",
  "url(./assets/ish_hashuv_mehod.jpeg)",
  "url(./assets/jewish_matchmaking.webp)",
  "url(./assets/jewish_matchmaking.webp)",
  "url(./assets/master_of_none.jpeg)",
  "url(./assets/master_of_none.jpeg)",
  "url(./assets/nehama.jpeg)",
  "url(./assets/nehama.jpeg)",
  "url(./assets/ravid_nagar.webp)",
  "url(./assets/ravid_nagar.webp)",
  "url(./assets/rick_and_morty.jpeg)",
  "url(./assets/rick_and_morty.jpeg)",
  "url(./assets/rikud_haesh.jpeg)",
  "url(./assets/rikud_haesh.jpeg)",
  "url(./assets/sex_education.jpeg)",
  "url(./assets/sex_education.jpeg)",
  "url(./assets/skins.jpeg)",
  "url(./assets/skins.jpeg)",
  "url(./assets/the_bear.jpeg)",
  "url(./assets/the_bear.jpeg)",
  "url(./assets/the_big_brother.jpeg)",
  "url(./assets/the_big_brother.jpeg)",
  "url(./assets/the_kardashians.jpeg)",
  "url(./assets/the_kardashians.jpeg)",
  "url(./assets/undone.webp)",
  "url(./assets/undone.webp)",
  "url(./assets/uri_and_ella.jpeg)",
  "url(./assets/uri_and_ella.jpeg)",
  "url(./assets/wednesday.webp)",
  "url(./assets/wednesday.webp)",
];
let cardisCheck = [];
let openDivas = [];
let correctCardis = [];
let turn = 1;
let cardsOf1 = [];
let cardsOf2 = [];
let whoIsPlay = document.querySelector("#whoIsPlay");

const createGrid = (couplesNum) => {
  if (cardsOf1 && cardsOf2) {
    cardsOf1 = [];
    cardsOf2 = [];
  }
  if (whoIsPlay && turn) {
    whoIsPlay.innerText = `It Is Player ${turn} Turn`;
  }

  turn = 1;
  if (currentBoxesArr) {
    currentBoxesArr = [];
  }

  if (cardisCheck) {
    cardisCheck = [];
  }
  if (correctCardis) {
    correctCardis = [];
  }

  if (couplesNum == 6) {
    if (gameContainer) {
      gameContainer.style.gridTemplateColumns = `repeat(${3}, 1fr)`;
      gameContainer.style.gridTemplateRows = `repeat(${4}, 1fr)`;
    }

    if (currentBoxesArr && boxesArr) {
      for (let i = 0; i < 12; i++) {
        currentBoxesArr.push(boxesArr[i]);
      }

      currentBoxesArr = shuffle(currentBoxesArr);
    }
    for (let i = 0; i < 12; i++) {
      insertDivs(i);
    }
  }
  if (couplesNum == 9) {
    if (gameContainer) {
      gameContainer.style.gridTemplateColumns = `repeat(${3}, 1fr)`;
      gameContainer.style.gridTemplateRows = `repeat(${6}, 1fr)`;
    }
    if (currentBoxesArr && boxesArr) {
      for (let i = 0; i < 18; i++) {
        currentBoxesArr.push(boxesArr[i]);
      }

      currentBoxesArr = shuffle(currentBoxesArr);
    }
    for (let i = 0; i < 18; i++) {
      insertDivs(i);
    }
  }
  if (couplesNum == 12) {
    if (gameContainer) {
      gameContainer.style.gridTemplateColumns = `repeat(${4}, 1fr)`;
      gameContainer.style.gridTemplateRows = `repeat(${6}, 1fr)`;
    }
    if (currentBoxesArr && boxesArr) {
      for (let i = 0; i < 24; i++) {
        currentBoxesArr.push(boxesArr[i]);
      }

      currentBoxesArr = shuffle(currentBoxesArr);
    }
    for (let i = 0; i < 24; i++) {
      insertDivs(i);
    }
  }
  if (couplesNum == 15) {
    if (gameContainer) {
      gameContainer.style.gridTemplateColumns = `repeat(${5}, 1fr)`;
      gameContainer.style.gridTemplateRows = `repeat(${6}, 1fr)`;
    }
    if (currentBoxesArr && boxesArr) {
      for (let i = 0; i < 30; i++) {
        currentBoxesArr.push(boxesArr[i]);
      }

      currentBoxesArr = shuffle(currentBoxesArr);
    }
    for (let i = 0; i < 30; i++) {
      insertDivs(i);
    }
  }
  if (couplesNum == 18) {
    if (gameContainer) {
      gameContainer.style.gridTemplateColumns = `repeat(${6}, 1fr)`;
      gameContainer.style.gridTemplateRows = `repeat(${6}, 1fr)`;
    }
    if (currentBoxesArr && boxesArr) {
      for (let i = 0; i < 36; i++) {
        currentBoxesArr.push(boxesArr[i]);
      }

      currentBoxesArr = shuffle(currentBoxesArr);
    }
    for (let i = 0; i < 36; i++) {
      insertDivs(i);
    }
  }
  if (couplesNum == 21) {
    if (gameContainer) {
      gameContainer.style.gridTemplateColumns = `repeat(${6}, 1fr)`;
      gameContainer.style.gridTemplateRows = `repeat(${7}, 1fr)`;
    }
    if (currentBoxesArr && boxesArr) {
      for (let i = 0; i < 42; i++) {
        currentBoxesArr.push(boxesArr[i]);
      }

      currentBoxesArr = shuffle(currentBoxesArr);
    }
    for (let i = 0; i < 42; i++) {
      insertDivs(i);
    }
  }
  //עכשיו מפעילים את הדיבות בשביל המשחק

  let divas = document.querySelectorAll(".divadivahey");

  let cardis = document.querySelectorAll(".cardi");

  for (let i = 0; i < couplesNum * 2; i++) {
    divas[i].addEventListener("click", () => {
      divas[i].style.display = "none";
      cardis[i].style.display = "block";
      if (cardisCheck) {
        cardisCheck.push(cardis[i]);
      }
      if (openDivas) {
        openDivas.push(divas[i]);
      }

      if (cardisCheck.length == "2") {
        console.log("now we check");
        matchCheck();
      }
    });
  }
};

const insertDivs = (i) => {
  let div = document.createElement("div");
  div.id = "div" + i;
  div.style.backgroundImage = imgArr[i];
  div.style.backgroundSize = "100% 100%";
  div.style.backgroundRepeat = "no-repeat";
  div.style.gridRow = gridOptions[currentBoxesArr[i]][0];
  div.style.gridColumn = gridOptions[currentBoxesArr[i]][1];
  div.style.display = "none";
  div.className = "cardi";
  if (gameContainer) {
    gameContainer.appendChild(div);
  }
  let diva = document.createElement("div");
  diva.id = "diva" + i;
  diva.style.gridRow = gridOptions[currentBoxesArr[i]][0];
  diva.style.gridColumn = gridOptions[currentBoxesArr[i]][1];
  diva.style.backgroundColor = "wheat";
  diva.innerHTML = "💚";
  diva.style.fontSize = "3vw";
  diva.style.display = "flex";
  diva.style.justifyContent = "center";
  diva.style.alignItems = "center";
  diva.className = "divadivahey";
  if (gameContainer) {
    gameContainer.appendChild(diva);
  }
};

const matchCheck = () => {
  if (
    cardisCheck[0].style.backgroundImage == cardisCheck[1].style.backgroundImage
  ) {
    cardisCheck[0].style.border = "3px solid white";
    cardisCheck[1].style.border = "3px solid white";
    correctCardis.push(cardisCheck[0], cardisCheck[1]);
    if (turn == 1) {
      cardsOf1.push(cardisCheck[0], cardisCheck[1]);
    } else {
      cardsOf2.push(cardisCheck[0], cardisCheck[1]);
    }
    cardisCheck = [];
    openDivas = [];

    whoIsPlay.innerText = `The Turn Is Still ${turn}`;

    if (correctCardis.length == currentBoxesArr.length) {
      if (cardsOf1.length > cardsOf2.length) {
        whoIsPlay.innerText = `Player 1 Is Winning! He Has ${
          cardsOf1.length / 2
        } Couples`;
      } else if (cardsOf1.length < cardsOf2.length) {
        whoIsPlay.innerText = `Player 2 Is Winning! He Has ${
          cardsOf2.length / 2
        } Couples`;
      } else if (cardsOf1.length == cardsOf2.length) {
        whoIsPlay.innerText = `TEKO TEKO`;
      }
    }
  } else {
    setTimeout(() => {
      cardisCheck[0].style.display = "none";
      cardisCheck[1].style.display = "none";
      openDivas[0].style.display = "flex";
      openDivas[1].style.display = "flex";
      cardisCheck = [];
      openDivas = [];
      if (turn == 1) {
        turn = 2;
      } else {
        turn = 1;
      }

      whoIsPlay.innerText = `It Is Player ${turn} Turn`;
    }, 700);
  }
};

window.addEventListener("load", () => {
  if (cardisCheck) {
    cardisCheck = [];
  }

  if (createGridBtn6) {
    createGridBtn6.addEventListener("click", () => {
      if (gameContainer) {
        gameContainer.innerHTML = "";
      }

      createGrid(6);
    });
  }
  if (createGridBtn9) {
    createGridBtn9.addEventListener("click", () => {
      if (gameContainer) {
        gameContainer.innerHTML = "";
      }

      createGrid(9);
    });
  }
  if (createGridBtn12) {
    createGridBtn12.addEventListener("click", () => {
      if (gameContainer) {
        gameContainer.innerHTML = "";
      }

      createGrid(12);
    });
  }
  if (createGridBtn15) {
    createGridBtn15.addEventListener("click", () => {
      if (gameContainer) {
        gameContainer.innerHTML = "";
      }

      createGrid(15);
    });
  }
  if (createGridBtn18) {
    createGridBtn18.addEventListener("click", () => {
      if (gameContainer) {
        gameContainer.innerHTML = "";
      }

      createGrid(18);
    });
  }
  if (createGridBtn21) {
    createGridBtn21.addEventListener("click", () => {
      if (gameContainer) {
        gameContainer.innerHTML = "";
      }

      createGrid(21);
    });
  }
});
