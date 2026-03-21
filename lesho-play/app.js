const quizData = [
  { letter: "A", image: "images/a.jpg" },
  { letter: "B", image: "images/b.jpg" },
  { letter: "C", image: "images/c.jpg" },
  { letter: "CH", image: "images/ch.jpg" },
  { letter: "D", image: "images/d.jpg" },
  { letter: "E", image: "images/e.jpg" },
  { letter: "F", image: "images/f.jpg" },
  { letter: "G", image: "images/g.jpg" },
  { letter: "H", image: "images/h.jpg" },
  { letter: "I", image: "images/i.jpg" },
  { letter: "J", image: "images/j.jpg" },
  { letter: "K", image: "images/k.jpg" },
  { letter: "L", image: "images/l.jpg" },
  { letter: "LL", image: "images/ll.jpg" },
  { letter: "M", image: "images/m.jpg" },
  { letter: "N", image: "images/n.jpg" },
  { letter: "Ñ", image: "images/enye.jpg" },
  { letter: "O", image: "images/o.jpg" },
  { letter: "P", image: "images/p.jpg" },
  { letter: "Q", image: "images/q.jpg" },
  { letter: "R", image: "images/r.jpg" },
  { letter: "RR", image: "images/rr.jpg" },
  { letter: "S", image: "images/s.jpg" },
  { letter: "T", image: "images/t.jpg" },
  { letter: "U", image: "images/u.jpg" },
  { letter: "V", image: "images/v.jpg" },
  { letter: "W", image: "images/w.jpg" },
  { letter: "X", image: "images/x.jpg" },
  { letter: "Y", image: "images/y.jpg" },
  { letter: "Z", image: "images/z.jpg" }
];

const wordBank = [
  "HOLA",
  "AMOR",
  "CASA",
  "MAMA",
  "PAPA",
  "LUZ",
  "SOL",
  "LUNA",
  "MANO",
  "OSO",
  "GATO",
  "PERRO",
  "FLOR",
  "RIO",
  "NUBE"
];

/* =========================
   CONFIG
========================= */
const TOTAL_ROUNDS = 10;
const TIME_PER_ROUND = 10;
const MEMORY_PAIRS = 6;
const WORD_ROUNDS = 5;
const RUSH_TIME = 5;

/* =========================
   ELEMENTOS - MENU / QUIZ
========================= */
const menuScreen = document.getElementById("menuScreen");
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const endScreen = document.getElementById("endScreen");

const openQuizBtn = document.getElementById("openQuizBtn");
const openMemoryBtn = document.getElementById("openMemoryBtn");
const openWordBtn = document.getElementById("openWordBtn");
const openRushBtn = document.getElementById("openRushBtn");

const backToMenuFromStart = document.getElementById("backToMenuFromStart");
const backToMenuFromGame = document.getElementById("backToMenuFromGame");
const backToMenuFromEnd = document.getElementById("backToMenuFromEnd");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const scoreValue = document.getElementById("scoreValue");
const streakValue = document.getElementById("streakValue");
const timerValue = document.getElementById("timerValue");
const roundValue = document.getElementById("roundValue");
const totalRoundsValue = document.getElementById("totalRoundsValue");

const questionImage = document.getElementById("questionImage");
const optionsContainer = document.getElementById("optionsContainer");
const feedbackMessage = document.getElementById("feedbackMessage");

const finalScore = document.getElementById("finalScore");
const finalStreak = document.getElementById("finalStreak");
const finalMessage = document.getElementById("finalMessage");

/* =========================
   ELEMENTOS - MEMORAMA
========================= */
const memoryStartScreen = document.getElementById("memoryStartScreen");
const memoryGameScreen = document.getElementById("memoryGameScreen");
const memoryEndScreen = document.getElementById("memoryEndScreen");

const backToMenuFromMemoryStart = document.getElementById("backToMenuFromMemoryStart");
const backToMenuFromMemoryGame = document.getElementById("backToMenuFromMemoryGame");
const backToMenuFromMemoryEnd = document.getElementById("backToMenuFromMemoryEnd");

const startMemoryBtn = document.getElementById("startMemoryBtn");
const restartMemoryBtn = document.getElementById("restartMemoryBtn");

const memoryBoard = document.getElementById("memoryBoard");
const memoryMovesValue = document.getElementById("memoryMovesValue");
const memoryPairsValue = document.getElementById("memoryPairsValue");
const memoryTimerValue = document.getElementById("memoryTimerValue");
const memoryFeedback = document.getElementById("memoryFeedback");

const memoryFinalMoves = document.getElementById("memoryFinalMoves");
const memoryFinalTime = document.getElementById("memoryFinalTime");
const memoryFinalMessage = document.getElementById("memoryFinalMessage");

/* =========================
   ELEMENTOS - WORD
========================= */
const wordStartScreen = document.getElementById("wordStartScreen");
const wordGameScreen = document.getElementById("wordGameScreen");
const wordEndScreen = document.getElementById("wordEndScreen");

const backToMenuFromWordStart = document.getElementById("backToMenuFromWordStart");
const backToMenuFromWordGame = document.getElementById("backToMenuFromWordGame");
const backToMenuFromWordEnd = document.getElementById("backToMenuFromWordEnd");

const startWordBtn = document.getElementById("startWordBtn");
const restartWordBtn = document.getElementById("restartWordBtn");

const wordScoreValue = document.getElementById("wordScoreValue");
const wordRoundValue = document.getElementById("wordRoundValue");
const wordCorrectValue = document.getElementById("wordCorrectValue");
const wordTargetDisplay = document.getElementById("wordTargetDisplay");
const wordAnswerDisplay = document.getElementById("wordAnswerDisplay");
const wordLetterPool = document.getElementById("wordLetterPool");
const wordClearBtn = document.getElementById("wordClearBtn");
const wordCheckBtn = document.getElementById("wordCheckBtn");
const wordFeedback = document.getElementById("wordFeedback");

const wordFinalScore = document.getElementById("wordFinalScore");
const wordFinalCorrect = document.getElementById("wordFinalCorrect");
const wordFinalMessage = document.getElementById("wordFinalMessage");

/* =========================
   ELEMENTOS - RUSH
========================= */
const rushStartScreen = document.getElementById("rushStartScreen");
const rushGameScreen = document.getElementById("rushGameScreen");
const rushEndScreen = document.getElementById("rushEndScreen");

const backToMenuFromRushStart = document.getElementById("backToMenuFromRushStart");
const backToMenuFromRushGame = document.getElementById("backToMenuFromRushGame");
const backToMenuFromRushEnd = document.getElementById("backToMenuFromRushEnd");

const startRushBtn = document.getElementById("startRushBtn");
const restartRushBtn = document.getElementById("restartRushBtn");

const rushScoreValue = document.getElementById("rushScoreValue");
const rushCorrectValue = document.getElementById("rushCorrectValue");
const rushTimerValue = document.getElementById("rushTimerValue");
const rushQuestionImage = document.getElementById("rushQuestionImage");
const rushOptionsContainer = document.getElementById("rushOptionsContainer");
const rushFeedback = document.getElementById("rushFeedback");

const rushFinalScore = document.getElementById("rushFinalScore");
const rushFinalCorrect = document.getElementById("rushFinalCorrect");
const rushFinalMessage = document.getElementById("rushFinalMessage");

/* =========================
   ESTADO - QUIZ
========================= */
let currentRound = 1;
let score = 0;
let streak = 0;
let bestStreak = 0;
let timeLeft = TIME_PER_ROUND;
let timerInterval = null;
let currentQuestion = null;
let gamePool = [];
let isAnswered = false;

/* =========================
   ESTADO - MEMORAMA
========================= */
let memoryDeck = [];
let memoryFirstCard = null;
let memorySecondCard = null;
let memoryLock = false;
let memoryMoves = 0;
let memoryPairsFound = 0;
let memorySeconds = 0;
let memoryTimerInterval = null;

/* =========================
   ESTADO - WORD
========================= */
let wordGameWords = [];
let wordRound = 1;
let wordScore = 0;
let wordCorrect = 0;
let currentWord = "";
let currentWordAnswer = [];
let wordSelectedButtons = [];

/* =========================
   ESTADO - RUSH
========================= */
let rushScore = 0;
let rushCorrect = 0;
let rushTimeLeft = RUSH_TIME;
let rushTimerInterval = null;
let rushQuestion = null;
let rushAnswered = false;

/* =========================
   HELPERS GENERALES
========================= */
function showScreen(screen) {
  const allScreens = [
    menuScreen,
    startScreen,
    gameScreen,
    endScreen,
    memoryStartScreen,
    memoryGameScreen,
    memoryEndScreen,
    wordStartScreen,
    wordGameScreen,
    wordEndScreen,
    rushStartScreen,
    rushGameScreen,
    rushEndScreen
  ];

  allScreens.forEach(s => s.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function stopAllTimers() {
  stopTimer();
  stopMemoryTimer();
  stopRushTimer();
}

function getLetterData(letter) {
  return quizData.find(item => item.letter === letter);
}

/* =========================
   HELPERS QUIZ
========================= */
function resetFeedback() {
  feedbackMessage.textContent = "";
  feedbackMessage.className = "feedback-message";
}

function updateStats() {
  scoreValue.textContent = score;
  streakValue.textContent = streak;
  timerValue.textContent = timeLeft;
  roundValue.textContent = currentRound;
  totalRoundsValue.textContent = TOTAL_ROUNDS;
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

/* =========================
   HELPERS MEMORAMA
========================= */
function stopMemoryTimer() {
  if (memoryTimerInterval) {
    clearInterval(memoryTimerInterval);
    memoryTimerInterval = null;
  }
}

function resetMemoryFeedback() {
  memoryFeedback.textContent = "";
  memoryFeedback.className = "feedback-message";
}

function updateMemoryStats() {
  memoryMovesValue.textContent = memoryMoves;
  memoryPairsValue.textContent = memoryPairsFound;
  memoryTimerValue.textContent = memorySeconds;
}

/* =========================
   HELPERS WORD
========================= */
function resetWordFeedback() {
  wordFeedback.textContent = "";
  wordFeedback.className = "feedback-message";
}

function updateWordStats() {
  wordScoreValue.textContent = wordScore;
  wordRoundValue.textContent = wordRound;
  wordCorrectValue.textContent = wordCorrect;
}

function renderWordAnswer() {
  wordAnswerDisplay.innerHTML = "";

  if (!currentWordAnswer.length) {
    const placeholder = document.createElement("div");
    placeholder.className = "word-answer-placeholder";
    placeholder.textContent = "Selecciona las señas en orden";
    wordAnswerDisplay.appendChild(placeholder);
    return;
  }

  currentWordAnswer.forEach(letter => {
    const letterData = getLetterData(letter);
    if (!letterData) return;

    const chip = document.createElement("div");
    chip.className = "word-answer-chip";
    chip.innerHTML = `
      <img src="${letterData.image}" alt="Seña ${letterData.letter}">
      <span>${letterData.letter}</span>
    `;
    wordAnswerDisplay.appendChild(chip);
  });
}

/* =========================
   HELPERS RUSH
========================= */
function resetRushFeedback() {
  rushFeedback.textContent = "";
  rushFeedback.className = "feedback-message";
}

function updateRushStats() {
  rushScoreValue.textContent = rushScore;
  rushCorrectValue.textContent = rushCorrect;
  rushTimerValue.textContent = rushTimeLeft;
}

function stopRushTimer() {
  if (rushTimerInterval) {
    clearInterval(rushTimerInterval);
    rushTimerInterval = null;
  }
}

/* =========================
   MENÚ / NAV
========================= */
function goToMenu() {
  stopAllTimers();
  resetFeedback();
  resetMemoryFeedback();
  resetWordFeedback();
  resetRushFeedback();
  showScreen(menuScreen);
}

function openQuizIntro() {
  stopAllTimers();
  resetFeedback();
  showScreen(startScreen);
}

function openMemoryIntro() {
  stopAllTimers();
  resetMemoryFeedback();
  showScreen(memoryStartScreen);
}

function openWordIntro() {
  stopAllTimers();
  resetWordFeedback();
  showScreen(wordStartScreen);
}

function openRushIntro() {
  stopAllTimers();
  resetRushFeedback();
  showScreen(rushStartScreen);
}

/* =========================
   QUIZ
========================= */
function startGame() {
  currentRound = 1;
  score = 0;
  streak = 0;
  bestStreak = 0;
  gamePool = shuffleArray(quizData).slice(0, TOTAL_ROUNDS);

  resetFeedback();
  showScreen(gameScreen);
  loadQuestion();
}

function loadQuestion() {
  stopTimer();
  isAnswered = false;
  resetFeedback();

  if (currentRound > TOTAL_ROUNDS) {
    endGame();
    return;
  }

  currentQuestion = gamePool[currentRound - 1];
  questionImage.src = currentQuestion.image;
  questionImage.alt = `Seña de la letra ${currentQuestion.letter}`;

  timeLeft = TIME_PER_ROUND;
  updateStats();

  renderOptions();
  startTimer();
}

function renderOptions() {
  optionsContainer.innerHTML = "";

  const correctLetter = currentQuestion.letter;
  const wrongOptions = quizData
    .filter(item => item.letter !== correctLetter)
    .map(item => item.letter);

  const shuffledWrong = shuffleArray(wrongOptions).slice(0, 3);
  const allOptions = shuffleArray([correctLetter, ...shuffledWrong]);

  allOptions.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.addEventListener("click", () => handleAnswer(option, btn));
    optionsContainer.appendChild(btn);
  });
}

function startTimer() {
  timerValue.textContent = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerValue.textContent = timeLeft;

    if (timeLeft <= 0) {
      stopTimer();
      handleTimeOut();
    }
  }, 1000);
}

function disableAllOptions() {
  const buttons = optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);
}

function markCorrectOption() {
  const buttons = optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach(btn => {
    if (btn.textContent === currentQuestion.letter) {
      btn.classList.add("correct");
    }
  });
}

function handleAnswer(selectedOption, selectedButton) {
  if (isAnswered) return;

  isAnswered = true;
  stopTimer();
  disableAllOptions();

  const isCorrect = selectedOption === currentQuestion.letter;

  if (isCorrect) {
    score += 10;
    streak += 1;
    if (streak > bestStreak) bestStreak = streak;

    selectedButton.classList.add("correct");
    feedbackMessage.textContent = "✅ ¡Correcto!";
    feedbackMessage.className = "feedback-message success";
  } else {
    streak = 0;
    selectedButton.classList.add("wrong");
    markCorrectOption();

    feedbackMessage.textContent = `❌ Incorrecto. Era: ${currentQuestion.letter}`;
    feedbackMessage.className = "feedback-message error";
  }

  updateStats();

  setTimeout(() => {
    currentRound++;
    loadQuestion();
  }, 1400);
}

function handleTimeOut() {
  if (isAnswered) return;

  isAnswered = true;
  streak = 0;
  disableAllOptions();
  markCorrectOption();

  feedbackMessage.textContent = `⏰ Tiempo agotado. Era: ${currentQuestion.letter}`;
  feedbackMessage.className = "feedback-message error";

  updateStats();

  setTimeout(() => {
    currentRound++;
    loadQuestion();
  }, 1500);
}

function endGame() {
  stopTimer();

  finalScore.textContent = score;
  finalStreak.textContent = bestStreak;

  if (score >= 90) {
    finalMessage.textContent = "🔥 ¡Increíble! Ya casi dominas el abecedario LESHO.";
  } else if (score >= 60) {
    finalMessage.textContent = "💙 ¡Muy bien! Vas avanzando excelente, sigue practicando.";
  } else if (score >= 30) {
    finalMessage.textContent = "✨ Buen intento. Con unas rondas más lo dominarás.";
  } else {
    finalMessage.textContent = "📘 Sigue practicando. Cada partida te hará mejorar.";
  }

  showScreen(endScreen);
}

/* =========================
   MEMORAMA
========================= */
function startMemoryGame() {
  stopAllTimers();

  memoryFirstCard = null;
  memorySecondCard = null;
  memoryLock = false;
  memoryMoves = 0;
  memoryPairsFound = 0;
  memorySeconds = 0;

  resetMemoryFeedback();

  buildMemoryDeck();
  renderMemoryBoard();
  updateMemoryStats();
  showScreen(memoryGameScreen);
  startMemoryTimer();
}

function buildMemoryDeck() {
  const selectedPairs = shuffleArray(quizData).slice(0, MEMORY_PAIRS);
  const deck = [];

  selectedPairs.forEach((item, index) => {
    const pairId = `pair-${index}-${item.letter}`;

    deck.push({
      id: `${pairId}-img`,
      pairId,
      type: "image",
      letter: item.letter,
      image: item.image,
      matched: false
    });

    deck.push({
      id: `${pairId}-txt`,
      pairId,
      type: "text",
      letter: item.letter,
      image: item.image,
      matched: false
    });
  });

  memoryDeck = shuffleArray(deck);
}

function renderMemoryBoard() {
  memoryBoard.innerHTML = "";

  memoryDeck.forEach(card => {
    const cardButton = document.createElement("button");
    cardButton.className = "memory-card";
    cardButton.dataset.id = card.id;

    cardButton.innerHTML = `
      <div class="memory-card-inner">
        <div class="memory-face memory-front">
          <span class="memory-front-symbol">💙</span>
        </div>

        <div class="memory-face memory-back">
          ${
            card.type === "image"
              ? `
                <div class="memory-image-card">
                  <div class="memory-image-label">Seña</div>
                  <div class="memory-image-wrap">
                    <img src="${card.image}" alt="Seña de la letra ${card.letter}" />
                  </div>
                </div>
              `
              : `
                <div class="memory-text-card">${card.letter}</div>
              `
          }
        </div>
      </div>
    `;

    cardButton.addEventListener("click", () => handleMemoryCardClick(card, cardButton));
    memoryBoard.appendChild(cardButton);
  });
}

function startMemoryTimer() {
  memoryTimerInterval = setInterval(() => {
    memorySeconds++;
    updateMemoryStats();
  }, 1000);
}

function handleMemoryCardClick(card, cardElement) {
  if (memoryLock) return;
  if (card.matched) return;
  if (cardElement.classList.contains("flipped")) return;

  cardElement.classList.add("flipped");

  if (!memoryFirstCard) {
    memoryFirstCard = { data: card, element: cardElement };
    return;
  }

  memorySecondCard = { data: card, element: cardElement };
  memoryMoves++;
  updateMemoryStats();

  checkMemoryMatch();
}

function checkMemoryMatch() {
  if (!memoryFirstCard || !memorySecondCard) return;

  const isMatch = memoryFirstCard.data.pairId === memorySecondCard.data.pairId;

  if (isMatch) {
    memoryFirstCard.data.matched = true;
    memorySecondCard.data.matched = true;

    memoryFirstCard.element.classList.add("matched");
    memorySecondCard.element.classList.add("matched");

    memoryPairsFound++;
    updateMemoryStats();

    memoryFeedback.textContent = "✅ ¡Pareja correcta!";
    memoryFeedback.className = "feedback-message success";

    resetMemorySelection();

    if (memoryPairsFound === MEMORY_PAIRS) {
      setTimeout(() => endMemoryGame(), 500);
    }
  } else {
    memoryLock = true;

    memoryFeedback.textContent = "❌ No coinciden";
    memoryFeedback.className = "feedback-message error";

    setTimeout(() => {
      memoryFirstCard.element.classList.remove("flipped");
      memorySecondCard.element.classList.remove("flipped");

      resetMemorySelection();
      memoryLock = false;
    }, 900);
  }
}

function resetMemorySelection() {
  memoryFirstCard = null;
  memorySecondCard = null;
}

function endMemoryGame() {
  stopMemoryTimer();

  memoryFinalMoves.textContent = memoryMoves;
  memoryFinalTime.textContent = `${memorySeconds}s`;

  if (memoryMoves <= 10) {
    memoryFinalMessage.textContent = "🔥 ¡Memoria legendaria! Lo hiciste excelente.";
  } else if (memoryMoves <= 16) {
    memoryFinalMessage.textContent = "💙 ¡Muy bien! Tienes muy buena memoria.";
  } else if (memoryMoves <= 24) {
    memoryFinalMessage.textContent = "✨ Buen trabajo. Cada vez lo harás más rápido.";
  } else {
    memoryFinalMessage.textContent = "📘 Lo lograste. Sigue practicando para mejorar tu tiempo.";
  }

  showScreen(memoryEndScreen);
}

/* =========================
   ESCRIBE LA PALABRA CON SEÑAS
========================= */
function startWordGame() {
  stopAllTimers();

  wordGameWords = shuffleArray(wordBank).slice(0, WORD_ROUNDS);
  wordRound = 1;
  wordScore = 0;
  wordCorrect = 0;

  resetWordFeedback();
  showScreen(wordGameScreen);
  loadWordRound();
}

function loadWordRound() {
  resetWordFeedback();

  if (wordRound > WORD_ROUNDS) {
    endWordGame();
    return;
  }

  currentWord = wordGameWords[wordRound - 1].toUpperCase();
  currentWordAnswer = [];
  wordSelectedButtons = [];

  wordTargetDisplay.textContent = currentWord;
  updateWordStats();
  renderWordAnswer();
  renderWordLetterPool();
}

function renderWordLetterPool() {
  wordLetterPool.innerHTML = "";

  const letters = currentWord.split("");
  const allLetters = [...letters];

  while (allLetters.length < Math.max(8, currentWord.length + 2)) {
    const randomLetter = quizData[Math.floor(Math.random() * quizData.length)].letter;
    if (randomLetter.length === 1 && randomLetter !== "Ñ") {
      allLetters.push(randomLetter);
    }
  }

  const shuffled = shuffleArray(allLetters);

  shuffled.forEach(letter => {
    const letterData = getLetterData(letter);
    if (!letterData) return;

    const btn = document.createElement("button");
    btn.className = "word-sign-btn";

    btn.innerHTML = `
      <img src="${letterData.image}" alt="Seña ${letterData.letter}">
      <div class="word-sign-label">${letterData.letter}</div>
    `;

    btn.addEventListener("click", () => {
      if (currentWordAnswer.length >= currentWord.length) return;

      currentWordAnswer.push(letter);
      btn.disabled = true;
      wordSelectedButtons.push(btn);

      renderWordAnswer();
    });

    wordLetterPool.appendChild(btn);
  });
}

function clearWordAnswer() {
  currentWordAnswer = [];
  wordSelectedButtons.forEach(btn => (btn.disabled = false));
  wordSelectedButtons = [];
  renderWordAnswer();
  resetWordFeedback();
}

function checkWordAnswer() {
  if (currentWordAnswer.length !== currentWord.length) {
    wordFeedback.textContent = "⚠️ Completa la palabra primero.";
    wordFeedback.className = "feedback-message error";
    return;
  }

  const answerString = currentWordAnswer.join("");

  if (answerString === currentWord) {
    wordScore += 20;
    wordCorrect += 1;

    wordFeedback.textContent = "✅ ¡Correcto!";
    wordFeedback.className = "feedback-message success";
  } else {
    wordFeedback.textContent = `❌ Incorrecto. Era: ${currentWord}`;
    wordFeedback.className = "feedback-message error";
  }

  updateWordStats();

  setTimeout(() => {
    wordRound++;
    loadWordRound();
  }, 1400);
}

function endWordGame() {
  wordFinalScore.textContent = wordScore;
  wordFinalCorrect.textContent = wordCorrect;

  if (wordCorrect === 5) {
    wordFinalMessage.textContent = "🔥 ¡Perfecto! Dominaste todas las palabras en señas.";
  } else if (wordCorrect >= 3) {
    wordFinalMessage.textContent = "💙 ¡Muy bien! Vas excelente formando palabras en LESHO.";
  } else {
    wordFinalMessage.textContent = "📘 Buen intento. Sigue practicando para mejorar.";
  }

  showScreen(wordEndScreen);
}

/* =========================
   MODO RÁPIDO
========================= */
function startRushGame() {
  stopAllTimers();

  rushScore = 0;
  rushCorrect = 0;

  resetRushFeedback();
  showScreen(rushGameScreen);
  loadRushQuestion();
}

function loadRushQuestion() {
  stopRushTimer();
  rushAnswered = false;
  resetRushFeedback();

  rushQuestion = quizData[Math.floor(Math.random() * quizData.length)];
  rushQuestionImage.src = rushQuestion.image;
  rushQuestionImage.alt = `Seña de la letra ${rushQuestion.letter}`;

  rushTimeLeft = RUSH_TIME;
  updateRushStats();
  renderRushOptions();
  startRushTimer();
}

function renderRushOptions() {
  rushOptionsContainer.innerHTML = "";

  const correctLetter = rushQuestion.letter;
  const wrongOptions = quizData
    .filter(item => item.letter !== correctLetter)
    .map(item => item.letter);

  const shuffledWrong = shuffleArray(wrongOptions).slice(0, 3);
  const allOptions = shuffleArray([correctLetter, ...shuffledWrong]);

  allOptions.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.addEventListener("click", () => handleRushAnswer(option, btn));
    rushOptionsContainer.appendChild(btn);
  });
}

function startRushTimer() {
  rushTimerValue.textContent = rushTimeLeft;

  rushTimerInterval = setInterval(() => {
    rushTimeLeft--;
    rushTimerValue.textContent = rushTimeLeft;

    if (rushTimeLeft <= 0) {
      stopRushTimer();
      endRushGame("⏰ Se acabó el tiempo.");
    }
  }, 1000);
}

function disableRushOptions() {
  const buttons = rushOptionsContainer.querySelectorAll(".option-btn");
  buttons.forEach(btn => (btn.disabled = true));
}

function markRushCorrect() {
  const buttons = rushOptionsContainer.querySelectorAll(".option-btn");
  buttons.forEach(btn => {
    if (btn.textContent === rushQuestion.letter) {
      btn.classList.add("correct");
    }
  });
}

function handleRushAnswer(selectedOption, selectedButton) {
  if (rushAnswered) return;

  rushAnswered = true;
  stopRushTimer();
  disableRushOptions();

  const isCorrect = selectedOption === rushQuestion.letter;

  if (isCorrect) {
    rushScore += 10;
    rushCorrect += 1;

    selectedButton.classList.add("correct");
    rushFeedback.textContent = "✅ ¡Correcto!";
    rushFeedback.className = "feedback-message success";

    updateRushStats();

    setTimeout(() => {
      loadRushQuestion();
    }, 700);
  } else {
    selectedButton.classList.add("wrong");
    markRushCorrect();

    rushFeedback.textContent = `❌ Incorrecto. Era: ${rushQuestion.letter}`;
    rushFeedback.className = "feedback-message error";

    updateRushStats();

    setTimeout(() => {
      endRushGame("❌ Fallaste una respuesta.");
    }, 900);
  }
}

function endRushGame(reason = "") {
  stopRushTimer();

  rushFinalScore.textContent = rushScore;
  rushFinalCorrect.textContent = rushCorrect;

  if (rushCorrect >= 10) {
    rushFinalMessage.textContent = `🔥 ¡Brutal! ${reason} Récord increíble.`;
  } else if (rushCorrect >= 5) {
    rushFinalMessage.textContent = `💙 ¡Muy bien! ${reason}`;
  } else {
    rushFinalMessage.textContent = `${reason} Sigue practicando para mejorar tu velocidad.`;
  }

  showScreen(rushEndScreen);
}

/* =========================
   EVENTOS
========================= */
openQuizBtn.addEventListener("click", openQuizIntro);
openMemoryBtn.addEventListener("click", openMemoryIntro);
openWordBtn.addEventListener("click", openWordIntro);
openRushBtn.addEventListener("click", openRushIntro);

[
  backToMenuFromStart,
  backToMenuFromGame,
  backToMenuFromEnd,
  backToMenuFromMemoryStart,
  backToMenuFromMemoryGame,
  backToMenuFromMemoryEnd,
  backToMenuFromWordStart,
  backToMenuFromWordGame,
  backToMenuFromWordEnd,
  backToMenuFromRushStart,
  backToMenuFromRushGame,
  backToMenuFromRushEnd
].forEach(btn => btn.addEventListener("click", goToMenu));

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);

startMemoryBtn.addEventListener("click", startMemoryGame);
restartMemoryBtn.addEventListener("click", startMemoryGame);

startWordBtn.addEventListener("click", startWordGame);
restartWordBtn.addEventListener("click", startWordGame);
wordClearBtn.addEventListener("click", clearWordAnswer);
wordCheckBtn.addEventListener("click", checkWordAnswer);

startRushBtn.addEventListener("click", startRushGame);
restartRushBtn.addEventListener("click", startRushGame);

/* =========================
   INIT
========================= */
goToMenu();