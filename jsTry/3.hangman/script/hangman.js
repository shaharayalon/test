// משחק האיש התלוי. מסך פתיחה בו צריך לרשום שם. במשחק יש אפשרות לטעות 7 פעמים. בפעם השמינית המשחק נגמר. אם טעית בשאלה אז אפשר להמשיך במשחק. מספר התשובות הנכונות והלא נכונות נספר. אופן הכנסת אות היא בדרך של אינפוט. המשחק יודע להמיר אות רגילה לאות סופית כך שאין אפשרות לרשום אות סופית באינפוט בכוונה. במשחק מגוון אזורים: אזור האיש התלוי, אזור השם, אזור הניצחונות וההפסדים, אזור השאלה ואזור הכנסת האות. גם כאן אופן הכנסת השאלות הוא רנדומלי בהחלט וזה די מגניב.
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const quizArr = [
  ["ר", "א", "ו", "ב", "ן", "-", "ע", "ו", "ב", "ד"],
  ["ב", "ר", "ו", "ך", "-", "ד", "ג", "ו"],
  ["י", "נ", "י", "ב", "-", "ק", "ט", "ן"],
  ["ח", "ן", "-", "ע", "ז", "ר", "א"],
  ["ד", "נ", "י", "-", "ע", "מ", "ו", "ס"],
  ["א", "ב", "י", "-", "פ", "י", "ט", "ו", "ס", "י"],
  ["א", "ו", "ר", "י", "-", "א", "ו", "ז", "ן"],
  ["א", "י", "י", "ל", "-", "ב", "ר", "ק", "ו", "ב", "י", "ץ"],
  ["ע", "ב", "א", "ס", "-", "ס", "ו", "א", "ן"],
  ["י", "ו", "ס", "י", "-", "א", "ב", "ו", "ק", "ס", "י", "ס"],
  ["ט", "ל", "-", "ב", "נ", "י", "ן"],
  ["א", "ב", "י", "-", "נ", "י", "מ", "נ", "י"],
  ["ע", "י", "ד", "ן", "-", "ו", "ר", "ד"],
  ["א", "י", "ת", "י", "-", "ש", "כ", "ט", "ר"],
  ["ע", "ד", "ן", "-", "ק", "א", "ר", "צ", "ב"],
  ["ר", "א", "ו", "ב", "ן", "-", "ע", "ט", "ר"],
  ["ב", "נ", "י", "-", "ל", "ם"],
  ["ג", "י", "ל", "י", "-", "ו", "ר", "מ", "ו", "ט"],
  ["ש", "מ", "ע", "ו", "ן", "-", "ג", "ר", "ש", "ו", "ן"],
  ["א", "ר", "י", "ק", "-", "ב", "נ", "א", "ד", "ו"],
  ["ר", "ו", "ב", "ר", "ט", "ו", "-", "ק", "ו", "ל", "א", "ו", "ט", "י"],
  ["ל", "י", "ר", "ן", "-", "ש", "ט", "ר", "א", "ו", "ב", "ר"],
];

let pastQuiz = [];
let questNum = 1;
let nameContainer = document.querySelector("#nameContainer");
let checker = "shahar";
let letterInput = document.querySelector("#letterInput");
let checkLetterBtn = document.querySelector("#checkLetterBtn");
let currentWord = [];
let letterHelp = 0;
let winHelper = 0;
let loseHelper = 0;
let badLetters = document.querySelector("#badLetters");
let winWord = document.querySelector("#winWord");
let winContainer = document.querySelector("#winContainer");
let pastLetters = [];
let helpWord = "";
let nextBtn = document.querySelector("#nextBtn");
let loseContainer = document.querySelector("#loseContainer");
let startOverBtn = document.querySelector("#startOverBtn");
let loseWord = document.querySelector("#loseWord");
let openVibeContainer = document.querySelector("#openVibeContainer");
let yourNameInput = document.querySelector("#yourNameInput");
let letsStartTheGameBtn = document.querySelector("#letsStartTheGameBtn");
let conatiner = document.querySelector("#conatiner");
let playerNameArea = document.querySelector("#playerNameArea");
let winCounter = 0;
let loseCounter = 0;
let loseNextBtn = document.querySelector("#loseNextBtn");
let winNumberArea = document.querySelector("#winNumberArea");
let loseNumberArea = document.querySelector("#loseNumberArea");
let specCover = 0;
let covers = [
  document.querySelector("#cover1"),
  document.querySelector("#cover2"),
  document.querySelector("#cover3"),
  document.querySelector("#cover4"),
  document.querySelector("#cover5"),
  document.querySelector("#cover6"),
  document.querySelector("#cover7"),
  document.querySelector("#cover8"),
];
let winsAndLosesSoFar = document.querySelector("#winsAndLosesSoFar");
let gameOverContainer = document.querySelector("#gameOverContainer");
let winAndLoseContainerInfo = document.querySelector(
  "#winAndLoseContainerInfo"
);
let reloadTheGame = document.querySelector("#reloadTheGame");

const play = () => {
  if (currentWord) {
    currentWord = [];
  }
  if (helpWord) {
    helpWord = "";
  }
  if (pastLetters) {
    pastLetters = [];
  }
  if (letterInput) {
    letterInput.value = "";
  }

  if (nameContainer) {
    nameContainer.innerHTML = "";
  }

  winHelper = 0;

  loseHelper = 0;

  if (badLetters) {
    badLetters.innerHTML = "";
  }

  letterHelp = 0;
  if (playerNameArea) {
    playerNameArea.innerHTML = yourNameInput.value;
  }
  if (winNumberArea) {
    winNumberArea.innerHTML = "מספר ניצחונות: " + "<br>" + winCounter;
  }
  if (loseNumberArea) {
    loseNumberArea.innerHTML = "מספר הפסדים: " + "<br>" + loseCounter;
  }
  specCover = 0;
  if (covers) {
    for (let cover of covers) {
      cover.style.display = "block";
    }
  }
  if (questNum) {
    questNum = getRandomIntInclusive(0, 21);
  }

  if (checker) {
    checker = checkPast(questNum);

    while (checker == "exist") {
      questNum = getRandomIntInclusive(0, 21);

      checker = checkPast(questNum);
    }
    if (checker == "possible") {
      insertQuest(questNum);
    }
  }
};

const checkPast = (questNum) => {
  if (pastQuiz) {
    for (let past of pastQuiz) {
      if (past === questNum) {
        return "exist";
      }
    }
    pastQuiz.push(questNum);

    return "possible";
  }
};

const insertQuest = (questNum) => {
  if (quizArr && currentWord && nameContainer) {
    for (let index of quizArr[questNum]) {
      if (index == "-") {
        currentWord.push(" - ");
        nameContainer.innerHTML += " - ";
      } else {
        currentWord.push("_ ");
        nameContainer.innerHTML += "_ ";
      }
    }
  }
};

const checkLetter = (letterInput) => {
  letterHelp = 0;
  if (pastLetters.length) {
    for (let pastLetter of pastLetters) {
      if (letterInput == pastLetter) {
        return;
      }
    }
    pastLetters.push(letterInput);
  } else {
    pastLetters.push(letterInput);
  }

  for (let i = 0; i < quizArr[questNum].length; i++) {
    if (letterInput === quizArr[questNum][i]) {
      currentWord[i] = quizArr[questNum][i];
      letterHelp++;
    }
    if (
      (letterInput == "מ" && quizArr[questNum][i] == "ם") ||
      (letterInput == "נ" && quizArr[questNum][i] == "ן") ||
      (letterInput == "צ" && quizArr[questNum][i] == "ץ") ||
      (letterInput == "פ" && quizArr[questNum][i] == "ף") ||
      (letterInput == "כ" && quizArr[questNum][i] == "ך")
    ) {
      currentWord[i] = quizArr[questNum][i];
      letterHelp++;
    }
  }

  if (letterHelp > 0) {
    insertAgain(currentWord);
    winHelper += letterHelp;

    winCheck();
  } else if (letterHelp == 0) {
    loseHelper++;
    badLetters.innerHTML += letterInput + ", ";

    covers[specCover].style.display = "none";
    specCover++;

    loseCheck();
  }
};

const insertAgain = (currentWord) => {
  helpWord = "";

  for (let letter of currentWord) {
    helpWord += letter;
  }

  nameContainer.innerHTML = helpWord;
};

const winCheck = () => {
  if (winHelper == quizArr[questNum].length - 1) {
    setTimeout(() => {
      winContainer.style.display = "flex";
      conatiner.style.display = "none";
      winWord.innerHTML = helpWord;
      winCounter++;
    }, 700);
  }
};

const loseCheck = () => {
  setTimeout(() => {
    if (loseHelper == 8) {
      loseContainer.style.display = "flex";
      helpWord = "";
      for (let word of quizArr[questNum]) {
        helpWord += word;
      }
      conatiner.style.display = "none";
      loseWord.innerHTML = helpWord;

      loseCounter++;
      winsAndLosesSoFar.innerHTML = `עד כה ניצחת ${winCounter} פעמים, והפסדת עד כה ${loseCounter} פעמים. <br> נשארו לך עוד ${
        22 - winCounter - loseCounter
      } שחקנים לנחש, אז מה בא לך?`;
      return;
    }
  }, 1500);
};

window.addEventListener("load", () => {
  if (yourNameInput) {
    yourNameInput.value = "";
  }
  if (checkLetterBtn) {
    checkLetterBtn.addEventListener("click", () => {
      if (
        letterInput.value == "א" ||
        letterInput.value == "ב" ||
        letterInput.value == "ג" ||
        letterInput.value == "ד" ||
        letterInput.value == "ה" ||
        letterInput.value == "ו" ||
        letterInput.value == "ז" ||
        letterInput.value == "ח" ||
        letterInput.value == "ט" ||
        letterInput.value == "י" ||
        letterInput.value == "כ" ||
        letterInput.value == "ל" ||
        letterInput.value == "מ" ||
        letterInput.value == "נ" ||
        letterInput.value == "ס" ||
        letterInput.value == "ע" ||
        letterInput.value == "פ" ||
        letterInput.value == "צ" ||
        letterInput.value == "ק" ||
        letterInput.value == "ר" ||
        letterInput.value == "ש" ||
        letterInput.value == "ת"
      ) {
        checkLetter(letterInput.value);
        letterInput.value = "";
      } else {
        alert("תכניס רק אות אחת ושתהיה מאותיות הא׳ ב׳ בבקשה בלי אותיות סופיות");
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (pastQuiz && quizArr) {
        if (pastQuiz.length == quizArr.length) {
          winContainer.style.display = "none";
          gameOverContainer.style.display = "flex";
          winAndLoseContainerInfo.innerHTML = `במשחק זה ניחשת נכונה לגבי ${winCounter} שחקנים וטעית נכונה לגבי ${loseCounter} שחקנים`;
          return;
        }
      }
      if (winContainer) {
        winContainer.style.display = "none";
      }
      if (conatiner) {
        conatiner.style.display = "grid";
      }
      play();
    });
  }
  if (startOverBtn) {
    startOverBtn.addEventListener("click", () => {
      location.reload();
    });
  }

  if (loseNextBtn) {
    loseNextBtn.addEventListener("click", () => {
      if (pastQuiz.length == quizArr.length) {
        loseContainer.style.display = "none";
        gameOverContainer.style.display = "flex";
        winAndLoseContainerInfo.innerHTML = `במשחק זה ניחשת נכונה לגבי ${winCounter} שחקנים וטעית נכונה לגבי ${loseCounter} שחקנים`;
        return;
      }
      loseContainer.style.display = "none";
      conatiner.style.display = "grid";
      play();
    });
  }

  if (letsStartTheGameBtn) {
    letsStartTheGameBtn.addEventListener("click", () => {
      if (!yourNameInput.value) {
        alert("בבקשה רשום את שמך");
      } else {
        play();
        openVibeContainer.style.display = "none";
        conatiner.style.display = "grid";
      }
    });
  }
  if (reloadTheGame) {
    reloadTheGame.addEventListener("click", () => {
      location.reload();
    });
  }
});
