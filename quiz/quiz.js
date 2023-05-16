class Question {
  constructor(
    question,
    answers,
    correctAnswer,
    randomizeAllExceptLast = false
  ) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.randomizeAllExceptLast = randomizeAllExceptLast;
    this.correct = null;
  }
}

const questions = [
  new Question(
    "Hvilket AI program bruges ikke til billedredigering",
    ["Luminar Neo", "Tropaz Photo AI", "Upscayl", "Adobe Sensei"],
    4
  ),

  new Question(
    "Hvilket AI værktøj kan bruges til at fjerne støj/uskarphed fra et billede?",
    ["Topaz Photo AI", "ChatGPT", "Dall-E", "Midjourney"],
    1
  ),

  new Question(
    "Hvilken fejl ses ofte ved billedgenerering af mennesker?",
    [
      "Har svært ved at lave realistisk hår",
      "Hænder ser mærkelige ud eller mangler fingre",
      "Tænder er skæve, og ofte sat sammen",
      "Ansigter er meget animerede",
    ],
    2
  ),

  new Question(
    "Hvilket AI værktøj kan lave wireframes om til Figma prototyper?",
    ["Galileo", "Microsoft Designer", "Uizard", "Khroma"],
    1
  ),

  new Question(
    "Hvilket værktøj fjerner effektivt baggrunden på et billede?",
    ["Cleanup Pictures", "Luminar Neo", "remove.bg", "Upscayl"],
    3
  ),

  new Question(
    "Hvem er kendt som “the Father of AI”?",
    ["Elon Musk", "Mark Zuckerberg", "Alan Turing", "Bill Gates"],
    3
  ),

  new Question(
    "Hvilket AI værktøj kan bruges til at fjerne støj/uskarphed fra et billede?",
    ["Topaz Photo AI", "ChatGPT", "Dall-E", "Midjourney"],
    1
  ),

  new Question(
    "Hvad står AI for?",
    [
      "Automatic Intelligence",
      "Artificial Intelligence",
      "Advanced Intelligence",
      "Astral Intelligence",
    ],
    2
  ),

  new Question(
    "Hvilket af følgende, er IKKE et eksempel på hvad AI kan bruges til?",
    [
      "Identificere svindel",
      "Diagnosticere sundhedsproblemer",
      "Reparere en bil",
      "AI kan bruges til alle ovenstående eksempler",
    ],
    3,
    true
  ),

  new Question(
    'Hvad betyder "prompts"?',
    [
      "Bruger instruktioner til AI",
      "Tekst svar fra AI",
      "Billede svar fra AI",
      "Model data til AI",
    ],
    1
  ),

  new Question(
    "Hvor skal du oprette en konto for at få adgang til Midjourney?",
    ["Reddit", "Discord", "Telegram", "Microsoft"],
    2
  ),

  new Question(
    "Hvilken abonnement mulighed er ikke tilgængelig i Midjourney?",
    ["Basic", "Standard", "Premium", "Pro"],
    3
  ),

  new Question(
    "Hvilken mulighed har du IKKE, efter du har genereret et billede i MidJourney?",
    ["Upscale", "Variationer", "Edit", "Redo"],
    3
  ),

  new Question(
    "Hvilke nøgleord kan man tilføje sin prompt til ChatGPT, for at få en mere simpel og menneskelig tekst?",
    [
      "Simple og Minimalistic",
      "Density og Intricacy",
      "Perplexity og Burstiness",
      "Difficulty og Humanism",
    ],
    3
  ),

  new Question(
    "Hvor meget information kan ChatGPT 3 og 3.5 huske?",
    ["2048 tokens", "4096 tokens", "8000 (8K) tokens", "16000 (16K) tokens"],
    2
  ),

  new Question(
    "Hvilket AI værktøj har ikke en gratis mulighed?",
    ["remove.bg", "Midjourney", "ChatGPT", "Upscayl"],
    2
  ),

  new Question(
    "Hvilket af følgende, kan AI billedgenerering IKKE hjælpe med?",
    [
      "Fjerne baggrunden",
      "Forbedre kvaliteten",
      "Forstørre opløsningen",
      "Slå græsplænen",
    ],
    4
  ),

  new Question(
    "Hvilket udsagn om kunstig intelligens er ikke rigtigt?",
    [
      "Kunstig intelligens kan bruges til at udvikle og forbedre systemer inden for områder som medicin og finans.",
      "Kunstig intelligens kan lære og forbedre sig over tid gennem maskinlæring.",
      "Kunstig intelligens kan udføre komplekse beregninger og dataanalyse med en hastighed og præcision, der overstiger menneskelige evner.",
      "Kunstig intelligens kan fuldstændigt erstatte menneskelig intelligens og følelser.",
    ],
    4
  ),

  new Question(
    "Hvad er et neuralt netværk?",
    [
      "Et neuralt netværk er en type datamodelleringsteknik, der er inspireret af den menneskelige hjerne.",
      "Et neuralt netværk er en fysisk forbindelse mellem hjernen og en computer, der muliggør tankelæsning.",
      "Et neuralt netværk er en avanceret type virtuel robot assistent, som kan efterligne menneskelige bevægelser og adfærd.",
      "Et neuralt netværk er en form for holografisk displayenhed, der giver brugeren mulighed for at interagere med virtuelle objekter.",
    ],
    1
  ),

  new Question(
    "Hvad er målet med kunstig intelligens?",
    [
      "At løse kunstige problemer",
      "At udlede videnskabelige årsager",
      "At fremvise forskellige former for intelligens",
      "At løse virkelighedsbaserede problemer",
    ],
    3
  ),

  new Question(
    "Hvilket af følgende er et komponent af kunstig intelligens?",
    ["Træning", "Designing", "Gætte", "Læring"],
    4
  ),

  new Question(
    "Hvad er de etiske udfordringer forbundet med kunstig intelligens?",
    [
      "Bekymringer om datasikkerhed og privatliv",
      "Potentiel bias og diskrimination i algoritmer",
      "Automatisering af job og indvirkning på arbejdsmarkedet",
      "Alle ovenstående svarmuligheder",
    ],
    4,
    true
  ),

  new Question(
    "Hvad er forskellen mellem kunstig intelligens og automatisering?",
    [
      "Kunstig intelligens fokuserer på at automatisere gentagne opgaver og processer uden nødvendigvis at efterligne menneskelig intelligens, imens automatisering fokuserer på opgaver der kræver menneskelig intelligens.",
      "Kunstig intelligens omfatter udviklingen af computersystemer til at udføre opgaver, der normalt kræver menneskelig intelligens, mens automatisering fokuserer på at automatisere gentagne opgaver.",
      "Kunstig intelligens er kun relevant for softwareudvikling, mens automatisering dækker andre områder.",
      "Der er ingen forskel mellem kunstig intelligens og automatisering.",
    ],
    2,
    true
  ),

  new Question(
    "Hvad er Turing-testen, og hvordan bruges den til at evaluere kunstig intelligens?",
    [
      "Turing-testen bruges til at bestemme, om en maskine kan opnå menneskelig følelsesmæssig intelligens",
      "Turing-testen handler om at bestemme, om en maskine kan forudsige fremtidige begivenheder",
      "Turing-testen tester store mængder data fra internettet, til at træne datamodeller til kunstig intelligens",
      "Turing-testen er en test, hvor en maskine forsøger at narre en evaluator til at tro, at den er en menneskelig deltager",
    ],
    4
  ),
];

const MINIMUM_PERCENTAGE = 80;

//const startQuizButton = document.querySelector(".quiz .start-quiz");
const questionContentDiv = document.querySelector(".quiz .content");
const resultsDiv = document.querySelector(".quiz .results");
const timerDiv = document.querySelector(".quiz .timer");
const aboutDiv = document.querySelector(".quiz .about");
const questionDiv = questionContentDiv.querySelector(".question");
const optionDivs = [...questionContentDiv.querySelectorAll(".option")];
const nextQuestionButton = questionContentDiv.querySelector(".next-question");
const [currentDiv, lengthDiv] = [
  ...document.querySelectorAll(".question-indicator > span"),
];

let currentQuestion = -1;
let secondsLeft = -1;
let currentInterval = null;

const startQuiz = () => {
  resultsDiv.classList.add("hidden");
  questionContentDiv.classList.remove("hidden");
  questionContentDiv.classList.add("flex");
  aboutDiv.classList.add("hidden");

  optionDivs.forEach((elm) => {
    elm.parentElement.addEventListener("click", () =>
      nextQuestionButton.removeAttribute("disabled")
    );
  });

  lengthDiv.innerText = questions.length;

  nextQuestion();
};

const nextQuestion = () => {
  if (currentInterval) {
    clearInterval(currentInterval);
  }

  currentQuestion++;
  if (currentQuestion >= questions.length) {
    endQuiz();
    return;
  }

  currentDiv.innerText = currentQuestion + 1;
  nextQuestionButton.setAttribute("disabled", "");

  const question = questions[currentQuestion];
  const correctAnswer = question.answers[question.correctAnswer - 1];
  const options = shuffle(question.answers, question.randomizeAllExceptLast);
  question.correctAnswer = options.indexOf(correctAnswer);

  questionDiv.innerText = `${currentQuestion + 1}. ${question.question}`;
  optionDivs.forEach((elm, i) => {
    elm.innerText = options[i];
  });

  if (currentQuestion + 1 == questions.length) {
    nextQuestionButton.innerText = "Afslut quiz";
  }

  secondsLeft = 46;
  setTimerDiv();
  currentInterval = setInterval(setTimerDiv, 1000);
};

const answerQuestion = () => {
  const selectedAnswer = document.querySelector("input[name=answer]:checked");

  questions[currentQuestion].correct =
    selectedAnswer !== null &&
    selectedAnswer.value - 1 == questions[currentQuestion].correctAnswer;

  if (selectedAnswer) {
    selectedAnswer.checked = false;
  }

  nextQuestion();
};

const endQuiz = () => {
  questionContentDiv.classList.add("hidden");
  resultsDiv.classList.remove("hidden");

  const correctAnswers = questions.filter(
    (question) => question.correct
  ).length;
  const correctPercentage = Math.floor(
    (correctAnswers / questions.length) * 100
  );

  const button = resultsDiv.querySelector("button");
  const text = resultsDiv.querySelector("p");
  if (correctPercentage >= MINIMUM_PERCENTAGE) {
    text.innerHTML = `Tillykke! Du fik <span class="text-green-600">${correctPercentage} % rigtige</span> (${correctAnswers} ud af ${questions.length}), og har derfor bestået prøven. Du kan nu downloade dit AI kørekort.`;
    button.innerText = "Download AI kørekort";
    button.addEventListener("click", createPdf);
  } else {
    text.innerHTML = `Du fik <span class="text-red-600">${correctPercentage} % rigtige</span> (${correctAnswers} ud af ${questions.length}), og du skal minimum have 80 %, for at bestå prøven. Du er desværre ikke bestået, men er velkommen til at prøve igen.`;
    button.innerText = "Prøv igen";
    questions.forEach((question) => {
      question.correct = false;
    });
    currentQuestion = -1;
    button.addEventListener("click", startQuiz);
  }
};

const createPdf = async () => {
  const { PDFDocument } = PDFLib;
  const existingPdfBytes = await fetch(
    "https://aikademiet.dk/wp-content/uploads/2023/05/diplom.pdf"
  ).then((res) => res.arrayBuffer());
  const bytes = new Uint8Array(existingPdfBytes);
  const pdfDoc = await PDFDocument.load(bytes);
  const page = pdfDoc.getPages()[0];

  pdfDoc.registerFontkit(fontkit);
  const fontBytes = await fetch(
    "https://aikademiet.dk/wp-content/uploads/2023/05/Apalu.ttf"
  ).then((res) => res.arrayBuffer());
  const apaluFont = await pdfDoc.embedFont(fontBytes);

  const text = aboutDiv.querySelector("input").value;
  const textSize = 40;
  const textWidth = apaluFont.widthOfTextAtSize(text, textSize);

  page.drawText(text, {
    x: page.getWidth() / 2 - textWidth / 2,
    y: 230,
    size: textSize,
    font: apaluFont,
  });

  const pdfDataUri = await pdfDoc.save({ dataUri: true });
  console.log(pdfDataUri);
  const blob = new Blob([pdfDataUri], {
    type: "application/pdf",
  });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "Certifikat";
  link.click();
};

const setTimerDiv = () => {
  secondsLeft--;
  if (secondsLeft < 0) {
    answerQuestion();
    return;
  }

  timerDiv.classList[secondsLeft < 10 ? "add" : "remove"]("text-red-600");
  timerDiv.innerText = `00:${
    secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft
  }`;
};

const shuffle = (array, ignoreLast) => {
  const last = ignoreLast ? array.pop() : null;
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  if (last) {
    array.push(last);
  }

  return array;
};
