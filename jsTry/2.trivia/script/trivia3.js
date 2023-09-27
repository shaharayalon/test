// יש לנו מערך של אובייקטים של שאלות המשחק יודע לערבב אותם ולמקם אותם בצורה רנדומלית כל פעם, גם את סדר השאלות וגם את סדר התשובות. כל לחיצה על אחת התשובות תשלח את המשחק לפונקציית הבדיקה האם התשובה היא הנכונה או לא. במקביל נספרים גם הזמן וגם מספר התשובות הנכונות. בעזרת לוקאל סטוראג׳ יש אפשרות לשמור את התוצאה, רק עשרת התשובות הגבוהות מוצגות בטבלת האלופים. כאשר טועים בשאלה נגמר המשחק ואי אפשר להמשיך אותו. כמובן שיש את מסך הפתיחה היפה בו צריך לרשום את שמך.

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

let pName = document.querySelector("#pName");
let startPlayBtn = document.querySelector("#startPlayBtn");
let openContainer = document.querySelector("#openContainer");
let playContainer = document.querySelector("#playContainer");
let questionArr = [
  {
    question: "איך קוראים לאלבום הראשון של אביתר בנאי?",
    correctAnswer: "אביתר בנאי",
    wrongAnswer1: "אקדח",
    wrongAnswer2: "עומד על נייר",
    wrongAnswer3: "שקיעתה של הזריחה",
  },
  {
    question: "באיזה מקום סיימה מכבי נתניה את העונה שעברה?",
    correctAnswer: "5",
    wrongAnswer1: "7",
    wrongAnswer2: "4",
    wrongAnswer3: "6",
  },
  {
    question: "מי לא באמת ראפר",
    correctAnswer: "קיו אי",
    wrongAnswer1: "וואי טי",
    wrongAnswer2: "אי זי",
    wrongAnswer3: "ג׳יי זי",
  },
  {
    question: "לאיזו קבוצה עבר עומרי גנדלמן",
    correctAnswer: "גנט",
    wrongAnswer1: "הפועל תל אביב",
    wrongAnswer2: "טוטנהאם",
    wrongAnswer3: "לייפציג",
  },
  {
    question: "לאיזו קבוצה עבר דניאל פרץ?",
    correctAnswer: "באיירן מינכן",
    wrongAnswer1: "אוניון ברלין",
    wrongAnswer2: "ניוקאסל",
    wrongAnswer3: "דתן ואבירם",
  },
  {
    question: "כמה זה 6*6?",
    correctAnswer: "36",
    wrongAnswer1: "ים יבשה",
    wrongAnswer2: "ריבוע",
    wrongAnswer3: "42",
  },
  {
    question: "מהם הצבעים של ברצלונה?",
    correctAnswer: "אדום כחול",
    wrongAnswer1: "שלום שלום",
    wrongAnswer2: "סגול בורדו",
    wrongAnswer3: "ירוק צהוב",
  },
  {
    question: "איך קוראים למשחק הכדורגל של ברצלונה נגד ריאל מדריד?",
    correctAnswer: "סופר קלאסיקו",
    wrongAnswer1: "ערימת ילדים",
    wrongAnswer2: "דרבי",
    wrongAnswer3: "סואלו דה לא חרטילגו",
  },
  {
    question: "איזה מהשירים הבאים הוא לא של יונה וולך?",
    correctAnswer: "עד מחר",
    wrongAnswer1: "שיר",
    wrongAnswer2: "לא יכולתי לעשות עם זה כלום",
    wrongAnswer3: "תבוא אלי כמו קפיטליסט",
  },
  {
    question: "כמה ספרים הוציא יהונתן גפן עד היום?",
    correctAnswer: "51",
    wrongAnswer1: "47",
    wrongAnswer2: "33",
    wrongAnswer3: "24",
  },
  {
    question: "איך אשכול נבו קשור לכדורגל?",
    correctAnswer: "לא קשור ",
    wrongAnswer1: "אביו שיחק בהפועל פתח תקווה",
    wrongAnswer2: "שותף בבעלות של הפועל קטמון",
    wrongAnswer3: "אוהד שרוף של מילאן",
  },
  {
    question: "איזו מהקבוצות הבאות אף פעם לא זכתה באליפות המדינה?",
    correctAnswer: "מ.ס אשדוד",
    wrongAnswer1: "מכבי נתניה",
    wrongAnswer2: "הפועל פתח תקווה",
    wrongAnswer3: "הכח רמת גן",
  },
  {
    question: "איזה מהקבוצות הבאות בעלת בעלים סעודי?",
    correctAnswer: "ניוקאסל יונייטד",
    wrongAnswer1: "מנצ׳סטר יונייטד",
    wrongAnswer2: "מנצ׳סטר סיטי",
    wrongAnswer3: "ארסנל",
  },
  {
    question: "איזה מהשחקנים הבאים שיחק בליגה הגרמנית?",
    correctAnswer: "מונאס דאבור",
    wrongAnswer1: "יוסי בניון",
    wrongAnswer2: "ליאור רפאלוב",
    wrongAnswer3: "אילון אלמוג",
  },
  {
    question: "איך קוראים לליגה השנייה בגרמניה?",
    correctAnswer: "בונדסליגה 2",
    wrongAnswer1: "חונדסליגה",
    wrongAnswer2: "צ׳מפיונשיפ",
    wrongAnswer3: "אפטרליג",
  },
  {
    question: "מי סיימה במקום ה13 בליגה הספרדית השנה?",
    correctAnswer: "סלטה ויגו",
    wrongAnswer1: "חטאפה",
    wrongAnswer2: "סביליה",
    wrongAnswer3: "ראיו",
  },
  {
    question: "כמה אליפויות זכתה ויאריאל עד כה?",
    correctAnswer: "0",
    wrongAnswer1: "1",
    wrongAnswer2: "2",
    wrongAnswer3: "3",
  },
  {
    question: "כמה אלבומים הוציא שאיי/אנטי עד כה?",
    correctAnswer: "2",
    wrongAnswer1: "3",
    wrongAnswer2: "4",
    wrongAnswer3: "2.5",
  },
  {
    question: "מי הפיק להפנר את האלבום האחרון שלו?",
    correctAnswer: "ארגוב",
    wrongAnswer1: "דני שובבני",
    wrongAnswer2: "שקל",
    wrongAnswer3: "ישי סוויסה",
  },
  {
    question: "למה קראו לזוהר ארגוב המלך?",
    correctAnswer: "כי הוא היה מלך",
    wrongAnswer1: "כי הוא היה הבן של הזמר של המלך של תימן",
    wrongAnswer2: "כי מי שהיה עושה הרואין בשנות השמונים היה מלך",
    wrongAnswer3: "כי ארגוב בעברית זה מלך",
  },
  {
    question: "השלם את את המשפט: ״אני רואה אותה בדרך ל...״",
    correctAnswer: "גימנסיה",
    wrongAnswer1: "בלומפילד",
    wrongAnswer2: "גלידה",
    wrongAnswer3: "שימפנזה",
  },
  {
    question: "ברוך אתה ה׳ שהכל נהיה בדברו?",
    correctAnswer: "אמן",
    wrongAnswer1: "ברור",
    wrongAnswer2: "תודה",
    wrongAnswer3: "כן כן קפטן",
  },
  {
    question: " מי ימלל גבורות ישראל?",
    correctAnswer: "אני",
    wrongAnswer1: "אנחנו",
    wrongAnswer2: "מתישהו",
    wrongAnswer3: "תודה",
  },
];
let questionNum = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22,
];
let questionPlace = [0, 1, 2, 3];
let option1Div = document.querySelector("#option1Div");
let option2Div = document.querySelector("#option2Div");
let option3Div = document.querySelector("#option3Div");
let option4Div = document.querySelector("#option4Div");
let divOptions = [option1Div, option2Div, option3Div, option4Div];
let questionCounter = 0;
let questionDiv = document.querySelector("#questionDiv");
let correctContainer = document.querySelector("#correctContainer");
let incorrectContainer = document.querySelector("#incorrectContainer");
let nextQuestion = document.querySelector("#nextQuestion");
let startOverBtn1 = document.querySelector("#startOverBtn1");
let timeDiv = document.querySelector("#timeDiv");
let time = 25;
let timerito = 1;
let playerDiv = document.querySelector("#playerDiv");
let timeCounter = 0;
let correctAnswersCounter = 0;
let gameOverWin = document.querySelector("#gameOverWin");
let startOverEndGameBtn = document.querySelector("#startOverEndGameBtn");
let correctAnswersAndTimeInfo = document.querySelector(
  "#correctAnswersAndTimeInfo"
);
let correctAnswersAndTimeInfo2 = document.querySelector(
  "#correctAnswersAndTimeInfo2"
);
let saveYou = document.querySelector("#saveYou");
class player {
  name;
  correctAnswers;
  totalTime;
  constructor(name, correctAnswers, totalTime) {
    this.name = name;
    this.correctAnswers = correctAnswers;
    this.totalTime = totalTime;
  }
}
let you;
let playersRate = [];
let saveYouLoser = document.querySelector("#saveYouLoser");

let top10TableArr = [
  {
    nameDiv: document.querySelector("#name1"),
    correctAnswersDiv: document.querySelector("#correctAnswers1"),
    totalTimeDiv: document.querySelector("#totaltime1"),
  },
  {
    nameDiv: document.querySelector("#name2"),
    correctAnswersDiv: document.querySelector("#correctAnswers2"),
    totalTimeDiv: document.querySelector("#totaltime2"),
  },
  {
    nameDiv: document.querySelector("#name3"),
    correctAnswersDiv: document.querySelector("#correctAnswers3"),
    totalTimeDiv: document.querySelector("#totaltime3"),
  },
  {
    nameDiv: document.querySelector("#name4"),
    correctAnswersDiv: document.querySelector("#correctAnswers4"),
    totalTimeDiv: document.querySelector("#totaltime4"),
  },
  {
    nameDiv: document.querySelector("#name5"),
    correctAnswersDiv: document.querySelector("#correctAnswers5"),
    totalTimeDiv: document.querySelector("#totaltime5"),
  },
  {
    nameDiv: document.querySelector("#name6"),
    correctAnswersDiv: document.querySelector("#correctAnswers6"),
    totalTimeDiv: document.querySelector("#totaltime6"),
  },
  {
    nameDiv: document.querySelector("#name7"),
    correctAnswersDiv: document.querySelector("#correctAnswers7"),
    totalTimeDiv: document.querySelector("#totaltime7"),
  },
  {
    nameDiv: document.querySelector("#name8"),
    correctAnswersDiv: document.querySelector("#correctAnswers8"),
    totalTimeDiv: document.querySelector("#totaltime8"),
  },
  {
    nameDiv: document.querySelector("#name9"),
    correctAnswersDiv: document.querySelector("#correctAnswers9"),
    totalTimeDiv: document.querySelector("#totaltime9"),
  },
  {
    nameDiv: document.querySelector("#name10"),
    correctAnswersDiv: document.querySelector("#correctAnswers10"),
    totalTimeDiv: document.querySelector("#totaltime10"),
  },
];
let top10PlayersContainer = document.querySelector("#top10PlayersContainer");
let startOverTable = document.querySelector("#startOverTable");

const triviaPlay = () => {
  if (timeDiv) {
    timeDiv.innerHTML = "";
  }
  if (time) {
    time = 25;
  }
  if (timeDiv) {
    timeDiv.innerHTML = time;
  }
  if (timerito) {
    timerito = setInterval(timer, 1000);
  }
  if (questionPlace) {
    questionPlace = shuffle(questionPlace);
  }
  if (questionNum.length) {
    if (divOptions && questionDiv) {
      questionDiv.innerHTML = questionArr[questionNum[0]].question;
      divOptions[questionPlace[0]].innerHTML =
        questionArr[questionNum[0]].correctAnswer;
      divOptions[questionPlace[1]].innerHTML =
        questionArr[questionNum[0]].wrongAnswer1;
      divOptions[questionPlace[2]].innerHTML =
        questionArr[questionNum[0]].wrongAnswer2;
      divOptions[questionPlace[3]].innerHTML =
        questionArr[questionNum[0]].wrongAnswer3;
    }
  }
};

const timer = () => {
  if (typeof time == "number") {
    time--;
  }
  if (timeDiv) {
    timeDiv.innerHTML = time;
  }
  if (time <= 7) {
    timeDiv.style.color = "red";
  }
  if (time == 0) {
    stopTimer();
    if (timeDiv) {
      timeDiv.innerHTML = "נגמר הזמן";
    }
    setTimeout(() => {
      if (playContainer) {
        playContainer.style.display = "none";
      }
      if (incorrectContainer) {
        incorrectContainer.style.display = "flex";
      }
    }, 1500);
  }
};
const stopTimer = () => {
  clearInterval(timerito);
};

const setTable = () => {
  if (playersRate) {
    if (playersRate.length < 10) {
      for (let i = 0; i < playersRate.length; i++) {
        if (top10TableArr) {
          top10TableArr[i].nameDiv.innerHTML = playersRate[i].name;
          top10TableArr[i].correctAnswersDiv.innerHTML =
            playersRate[i].correctAnswers;
          top10TableArr[i].totalTimeDiv.innerHTML = playersRate[i].totalTime;
        }
      }
    } else {
      for (let i = 0; i < 10; i++) {
        if (top10TableArr) {
          top10TableArr[i].nameDiv.innerHTML = playersRate[i].name;
          top10TableArr[i].correctAnswersDiv.innerHTML =
            playersRate[i].correctAnswers;
          top10TableArr[i].totalTimeDiv.innerHTML = playersRate[i].totalTime;
        }
      }
    }
    if (top10PlayersContainer) {
      top10PlayersContainer.style.display = "flex";
    }
  }
};

window.addEventListener("load", () => {
  if (pName) {
    pName.value = "";
  }
  if (questionNum) {
    questionNum = shuffle(questionNum);
  }

  if (playersRate) {
    playersRate = JSON.parse(localStorage.getItem("thePlayersRate"));
  }
  if (startPlayBtn) {
    startPlayBtn.addEventListener("click", () => {
      if (!pName.value || pName.value == " ") {
        alert("היי היי לרשום שם בבקשה");
      } else {
        if (openContainer) {
          openContainer.style.display = "none";
        }
        if (playContainer) {
          playContainer.style.display = "grid";
        }
        if (playerDiv) {
          playerDiv.innerHTML = pName.value;
        }
        triviaPlay();
        if (divOptions) {
          for (let option of divOptions) {
            option.addEventListener("click", () => {
              if (playContainer) {
                playContainer.style.display = "none";
              }
              if (timeDiv) {
                timeDiv.style.color = "rgb(200, 239, 201)";
              }
              if (typeof timeCounter == "number") {
                timeCounter += 25 - time;
              }
              stopTimer();
              if (
                option.innerHTML == questionArr[questionNum[0]].correctAnswer
              ) {
                if (correctContainer) {
                  correctContainer.style.display = "flex";
                }
                if (typeof correctAnswersCounter == "number") {
                  correctAnswersCounter++;
                }
              } else {
                if (correctAnswersAndTimeInfo2) {
                  correctAnswersAndTimeInfo2.innerHTML =
                    "ענית נכון על " +
                    correctAnswersCounter +
                    " שאלות נכונה בזמן של " +
                    timeCounter +
                    " שניות. שכוייעח.";
                }
                if (player) {
                  you = new player(
                    playerDiv.innerHTML,
                    correctAnswersCounter,
                    timeCounter
                  );
                }
                incorrectContainer.style.display = "flex";
              }
            });
          }
        }
      }
    });
  }
  if (nextQuestion) {
    nextQuestion.addEventListener("click", () => {
      questionNum.shift();
      correctContainer.style.display = "none";
      if (!questionNum.length) {
        if (correctAnswersAndTimeInfo) {
          correctAnswersAndTimeInfo.innerHTML =
            "ענית נכון על " +
            correctAnswersCounter +
            " שאלות נכונה בזמן של " +
            timeCounter +
            " שניות. שכוייעח.";
        }

        you = new player(
          playerDiv.innerHTML,
          correctAnswersCounter,
          timeCounter
        );

        if (gameOverWin) {
          gameOverWin.style.display = "flex";
        }
      } else {
        if (playContainer) {
          playContainer.style.display = "grid";
        }
        triviaPlay();
      }
    });
  }
  if (startOverBtn1) {
    startOverBtn1.addEventListener("click", () => {
      location.reload();
    });
  }
  if (startOverEndGameBtn) {
    startOverEndGameBtn.addEventListener("click", () => {
      location.reload();
    });
  }
  if (saveYou) {
    saveYou.addEventListener("click", () => {
      if (gameOverWin) {
        gameOverWin.style.display = "none";
      }
      if (playersRate != null) {
        console.log("raziel");
        for (let i = 0; i < playersRate.length; i++) {
          if (playersRate[i].correctAnswers == you.correctAnswers) {
            if (playersRate[i].totalTime > you.totalTime) {
              playersRate.splice(i, 0, you);
              localStorage.setItem(
                "thePlayersRate",
                JSON.stringify(playersRate)
              );
              setTable();
              return;
            }
          } else if (playersRate[i].correctAnswers < you.correctAnswers) {
            playersRate.splice(i, 0, you);
            localStorage.setItem("thePlayersRate", JSON.stringify(playersRate));
            setTable();
            return;
          }
        }
        playersRate.push(you);
      } else {
        playersRate = [];
        playersRate.push(you);
      }
      localStorage.setItem("thePlayersRate", JSON.stringify(playersRate));
      setTable();
    });
  }
  if (saveYouLoser) {
    saveYouLoser.addEventListener("click", () => {
      incorrectContainer.style.display = "none";
      if (playersRate != null) {
        for (let i = 0; i < playersRate.length; i++) {
          if (playersRate[i].correctAnswers == you.correctAnswers) {
            if (playersRate[i].totalTime > you.totalTime) {
              playersRate.splice(i, 0, you);
              localStorage.setItem(
                "thePlayersRate",
                JSON.stringify(playersRate)
              );
              setTable();
              return;
            }
          } else if (playersRate[i].correctAnswers < you.correctAnswers) {
            playersRate.splice(i, 0, you);
            localStorage.setItem("thePlayersRate", JSON.stringify(playersRate));
            setTable();
            return;
          }
        }
        playersRate.push(you);
      } else {
        playersRate = [];
        playersRate.push(you);
      }
      localStorage.setItem("thePlayersRate", JSON.stringify(playersRate));
      setTable();
    });
  }
  if (startOverTable) {
    startOverTable.addEventListener("click", () => {
      location.reload();
    });
  }
});
