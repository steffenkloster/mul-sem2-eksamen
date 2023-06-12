// Definerer en klasse kaldet Question, som repræsenterer en quiz-spørgsmål
class Question {
  // Konstruktøren definerer, hvordan man opretter et objekt af denne klasse
  constructor(
    question, // Spørgsmålets tekst
    answers, // En array, der indeholder svarmuligheder
    correctAnswer, // Index for det korrekte svar (bemærk: dette er baseret på 1, ikke 0)
    randomizeAllExceptLast = false // En valgfri parameter, der bestemmer, om svarmulighederne skal blandes
  ) {
    // Disse er egenskaber for objektet, og de er alle sat fra parametrene
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.randomizeAllExceptLast = randomizeAllExceptLast;

    // Dette er også en egenskab for objektet, men det sættes ikke fra en parameter
    this.correct = null; // Vi bruger dette senere til at gemme, om brugeren svarede korrekt på dette spørgsmål
  }
}

// Dette er en array af Question-objekter. Det bruges til at gemme alle spørgsmålene for vores quiz
const questions = [
  // Vi opretter nye Question-objekter ved hjælp af "new" nøgleordet, efterfulgt af navnet på klassen og derefter værdierne til konstruktøren i parentes
  new Question(
    'Hvilket AI program bruges ikke til billedredigering',
    ['Luminar Neo', 'Tropaz Photo AI', 'Upscayl', 'Adobe Sensei'],
    4
  ),

  // Resten af spørgsmålene er her...
  new Question(
    'Hvilket AI værktøj kan bruges til at fjerne støj/uskarphed fra et billede?',
    ['Topaz Photo AI', 'ChatGPT', 'Dall-E', 'Midjourney'],
    1
  ),

  new Question(
    'Hvilken fejl ses ofte ved billedgenerering af mennesker?',
    [
      'Har svært ved at lave realistisk hår',
      'Hænder ser mærkelige ud eller mangler fingre',
      'Tænder er skæve, og ofte sat sammen',
      'Ansigter er meget animerede',
    ],
    2
  ),

  new Question(
    'Hvilket AI værktøj kan lave wireframes om til Figma prototyper?',
    ['Galileo', 'Microsoft Designer', 'Uizard', 'Khroma'],
    1
  ),

  new Question(
    'Hvilket værktøj fjerner effektivt baggrunden på et billede?',
    ['Cleanup Pictures', 'Luminar Neo', 'remove.bg', 'Upscayl'],
    3
  ),

  new Question(
    'Hvem er kendt som “the Father of AI”?',
    ['Elon Musk', 'Mark Zuckerberg', 'Alan Turing', 'Bill Gates'],
    3
  ),

  new Question(
    'Hvilket AI værktøj kan bruges til at fjerne støj/uskarphed fra et billede?',
    ['Topaz Photo AI', 'ChatGPT', 'Dall-E', 'Midjourney'],
    1
  ),

  new Question(
    'Hvad står AI for?',
    [
      'Automatic Intelligence',
      'Artificial Intelligence',
      'Advanced Intelligence',
      'Astral Intelligence',
    ],
    2
  ),

  new Question(
    'Hvilket af følgende, er IKKE et eksempel på hvad AI kan bruges til?',
    [
      'Identificere svindel',
      'Diagnosticere sundhedsproblemer',
      'Reparere en bil',
      'AI kan bruges til alle ovenstående eksempler',
    ],
    3,
    true
  ),

  new Question(
    'Hvad betyder "prompts"?',
    [
      'Bruger instruktioner til AI',
      'Tekst svar fra AI',
      'Billede svar fra AI',
      'Model data til AI',
    ],
    1
  ),

  new Question(
    'Hvor skal du oprette en konto for at få adgang til Midjourney?',
    ['Reddit', 'Discord', 'Telegram', 'Microsoft'],
    2
  ),

  new Question(
    'Hvilken abonnement mulighed er ikke tilgængelig i Midjourney?',
    ['Basic', 'Standard', 'Premium', 'Pro'],
    3
  ),

  new Question(
    'Hvilken mulighed har du IKKE, efter du har genereret et billede i MidJourney?',
    ['Upscale', 'Variationer', 'Edit', 'Redo'],
    3
  ),

  new Question(
    'Hvilke nøgleord kan man tilføje sin prompt til ChatGPT, for at få en mere simpel og menneskelig tekst?',
    [
      'Simple og Minimalistic',
      'Density og Intricacy',
      'Perplexity og Burstiness',
      'Difficulty og Humanism',
    ],
    3
  ),

  new Question(
    'Hvor meget information kan ChatGPT 3 og 3.5 huske?',
    ['2048 tokens', '4096 tokens', '8000 (8K) tokens', '16000 (16K) tokens'],
    2
  ),

  new Question(
    'Hvilket AI værktøj har ikke en gratis mulighed?',
    ['remove.bg', 'Midjourney', 'ChatGPT', 'Upscayl'],
    2
  ),

  new Question(
    'Hvilket af følgende, kan AI billedgenerering IKKE hjælpe med?',
    [
      'Fjerne baggrunden',
      'Forbedre kvaliteten',
      'Forstørre opløsningen',
      'Slå græsplænen',
    ],
    4
  ),

  new Question(
    'Hvilket udsagn om kunstig intelligens er ikke rigtigt?',
    [
      'Kunstig intelligens kan bruges til at udvikle og forbedre systemer inden for områder som medicin og finans.',
      'Kunstig intelligens kan lære og forbedre sig over tid gennem maskinlæring.',
      'Kunstig intelligens kan udføre komplekse beregninger og dataanalyse med en hastighed og præcision, der overstiger menneskelige evner.',
      'Kunstig intelligens kan fuldstændigt erstatte menneskelig intelligens og følelser.',
    ],
    4
  ),

  new Question(
    'Hvad er et neuralt netværk?',
    [
      'Et neuralt netværk er en type datamodelleringsteknik, der er inspireret af den menneskelige hjerne.',
      'Et neuralt netværk er en fysisk forbindelse mellem hjernen og en computer, der muliggør tankelæsning.',
      'Et neuralt netværk er en avanceret type virtuel robot assistent, som kan efterligne menneskelige bevægelser og adfærd.',
      'Et neuralt netværk er en form for holografisk displayenhed, der giver brugeren mulighed for at interagere med virtuelle objekter.',
    ],
    1
  ),

  new Question(
    'Hvad er målet med kunstig intelligens?',
    [
      'At løse kunstige problemer',
      'At udlede videnskabelige årsager',
      'At fremvise forskellige former for intelligens',
      'At løse virkelighedsbaserede problemer',
    ],
    3
  ),

  new Question(
    'Hvilket af følgende er et komponent af kunstig intelligens?',
    ['Træning', 'Designing', 'Gætte', 'Læring'],
    4
  ),

  new Question(
    'Hvad er de etiske udfordringer forbundet med kunstig intelligens?',
    [
      'Bekymringer om datasikkerhed og privatliv',
      'Potentiel bias og diskrimination i algoritmer',
      'Automatisering af job og indvirkning på arbejdsmarkedet',
      'Alle ovenstående svarmuligheder',
    ],
    4,
    true
  ),

  new Question(
    'Hvad er forskellen mellem kunstig intelligens og automatisering?',
    [
      'Kunstig intelligens fokuserer på at automatisere gentagne opgaver og processer uden nødvendigvis at efterligne menneskelig intelligens, imens automatisering fokuserer på opgaver der kræver menneskelig intelligens.',
      'Kunstig intelligens omfatter udviklingen af computersystemer til at udføre opgaver, der normalt kræver menneskelig intelligens, mens automatisering fokuserer på at automatisere gentagne opgaver.',
      'Kunstig intelligens er kun relevant for softwareudvikling, mens automatisering dækker andre områder.',
      'Der er ingen forskel mellem kunstig intelligens og automatisering.',
    ],
    2,
    true
  ),

  new Question(
    'Hvad er Turing-testen, og hvordan bruges den til at evaluere kunstig intelligens?',
    [
      'Turing-testen bruges til at bestemme, om en maskine kan opnå menneskelig følelsesmæssig intelligens',
      'Turing-testen handler om at bestemme, om en maskine kan forudsige fremtidige begivenheder',
      'Turing-testen tester store mængder data fra internettet, til at træne datamodeller til kunstig intelligens',
      'Turing-testen er en test, hvor en maskine forsøger at narre en evaluator til at tro, at den er en menneskelig deltager',
    ],
    4
  ),
];

// Dette er minimum procenten af korrekte svar, der kræves for at passere quizzen
const MINIMUM_PERCENTAGE = 80;

// Disse er alle referencer til HTML-elementer i vores side, som vi har brug for at interagere med
const questionContentDiv = document.querySelector('.quiz .content');
const resultsDiv = document.querySelector('.quiz .results');
const timerDiv = document.querySelector('.quiz .timer');
const aboutDiv = document.querySelector('.quiz .about');
const questionDiv = questionContentDiv.querySelector('.question');

// querySelectorAll() returnerer NodeList[Element] her bruger vi spread operator (...), til at lave den om til en array i stedet.
const optionDivs = [...questionContentDiv.querySelectorAll('.option')];
const nextQuestionButton = questionContentDiv.querySelector('.next-question');

// vi bruger igen spread til at lave det om til en array, men da vi ved den returnerer to objekter, kan vi sætte dem i hver sin variabel, ved at spread them out (¬ ‿ ¬)
const [currentDiv, lengthDiv] = [
  ...document.querySelectorAll('.question-indicator > span'),
];

// Disse variabler bruges til at holde styr på quizzen
let currentQuestion = -1; // Dette er indexet for det nuværende spørgsmål i "questions"-arrayet. Det starter ved -1, fordi vi vil øge det med 1 i starten af hver runde, så det starter ved 0
let secondsLeft = -1; // Dette er antallet af sekunder, der er tilbage i den nuværende runde
let currentInterval = null; // Dette bruges til at stoppe timeren, når vi skifter til et nyt spørgsmål

// Dette er funktionen, der starter quizzen
const startQuiz = () => {
  // Vi skjuler resultatet og viser spørgsmålene
  resultsDiv.classList.add('hidden');
  questionContentDiv.classList.remove('hidden');
  questionContentDiv.classList.add('flex');
  aboutDiv.classList.add('hidden');

  // Tilføjer en event handler til alle vores svarmulighed tags
  optionDivs.forEach((elm) => {
    // Når man klikker på en af dem, fjernes "disabled" fra "næste spørgsmål" knappen
    elm.parentElement.addEventListener('click', () =>
      nextQuestionButton.removeAttribute('disabled')
    );
  });

  // Viser hvor mange spørgsmål der er i quizzen i alt
  lengthDiv.innerText = questions.length;

  // Viser næste spørgsmål
  nextQuestion();
};

// Funktion der viser næste spørgsmål
const nextQuestion = () => {
  // Hvis der er en interval sat (fx fra et tidligere spørgsmål), så slettes det
  if (currentInterval) {
    clearInterval(currentInterval);
  }

  // Vi sætter currentQuestion til det næste spørgsmål i rækken
  currentQuestion++;

  // Hvis vi er løbet tør for spørgsmål
  if (currentQuestion >= questions.length) {
    // Så stopper vi quizzen
    endQuiz();
    return;
  }

  // Viser hvilket spørgsmål vi er ved i quizzen - da arrays starter ved 0, så tilføjer vi 1 til nummeret
  currentDiv.innerText = currentQuestion + 1;

  // Slår "næste spørgsmål" knappen fra, indtil en svarmulighed er valgt
  nextQuestionButton.setAttribute('disabled', '');

  // Finder det nuværende spørgsmål, og gemmer det som "question"
  const question = questions[currentQuestion];
  const correctAnswer = question.answers[question.correctAnswer - 1];
  const options = shuffle(question.answers, question.randomizeAllExceptLast);
  question.correctAnswer = options.indexOf(correctAnswer);

  // Opdaterer spørgsmålsteksten og svarteksterne på siden
  questionDiv.innerText = `${currentQuestion + 1}. ${question.question}`;
  optionDivs.forEach((elm, i) => {
    elm.innerText = options[i];
  });

  // Hvis vi er ved det sidste spørgsmål, så skal "næste spørgsmål" knappen skifte tekst til "Afslut quiz"
  if (currentQuestion + 1 == questions.length) {
    nextQuestionButton.innerText = 'Afslut quiz';
  }

  // Vi sætter tiden for det nye spørgsmål, og starter timeren
  secondsLeft = 46;
  setTimerDiv();
  currentInterval = setInterval(setTimerDiv, 1000);
};

// Funktionen der håndterer brugerens svar på et spørgsmål
const answerQuestion = () => {
  // Vi finder det valgte svar
  const selectedAnswer = document.querySelector('input[name=answer]:checked');

  // Vi tjekker om det valgte svar er korrekt, og opdaterer spørgsmålets "correct" felt
  questions[currentQuestion].correct =
    selectedAnswer !== null &&
    selectedAnswer.value - 1 == questions[currentQuestion].correctAnswer;

  // Hvis et svar er blevet valgt, fravælger vi det
  if (selectedAnswer) {
    selectedAnswer.checked = false;
  }

  // Vi går videre til næste spørgsmål
  nextQuestion();
};

// Funktionen der kører når quizzen er slut
const endQuiz = () => {
  // Skjuler spørgsmålene og viser resultaterne
  questionContentDiv.classList.add('hidden');
  resultsDiv.classList.remove('hidden');

  // Finder antallet af korrekte svar, og beregner en procentdel
  const correctAnswers = questions.filter(
    (question) => question.correct
  ).length;
  const correctPercentage = Math.floor(
    (correctAnswers / questions.length) * 100
  );

  // Vi finder knappen og teksten i resultater-sektionen
  const button = resultsDiv.querySelector('button');
  const text = resultsDiv.querySelector('p');

  // Tjekker om brugeren har opnået den nødvendige score for at bestå quizzen
  if (correctPercentage >= MINIMUM_PERCENTAGE) {
    // Hvis brugeren har bestået, opdaterer vi teksten med en gratulerende besked
    // Den viser også antallet af korrekte svar og den samlede score i procent
    // Teksten for det korrekte antal svar er grøn for at indikere succes
    text.innerHTML = `Tillykke! Du fik <span class="text-green-600">${correctPercentage} % rigtige</span> (${correctAnswers} ud af ${questions.length}), og har derfor bestået prøven. Du kan nu downloade dit AI kørekort.`;

    // Vi opdaterer knappen til at indikere, at brugeren nu kan downloade sit certifikat
    button.innerText = 'Download AI kørekort';

    // Vi tilføjer en "click"-hændelseshåndtering til knappen, så brugeren kan downloade sit certifikat ved at klikke på den
    button.addEventListener('click', createPdf);
  } else {
    // Hvis brugeren ikke har opnået den nødvendige score, opdaterer vi teksten med en besked, der indikerer dette
    // Teksten viser også antallet af korrekte svar og den samlede score i procent
    // Teksten for det korrekte antal svar er rød for at indikere fiasko
    text.innerHTML = `Du fik <span class="text-red-600">${correctPercentage} % rigtige</span> (${correctAnswers} ud af ${questions.length}), og du skal minimum have 80 %, for at bestå prøven. Du er desværre ikke bestået, men er velkommen til at prøve igen.`;

    // Vi opdaterer knappen til at indikere, at brugeren kan prøve quizzen igen
    button.innerText = 'Prøv igen';

    // Vi nulstiller "correct"-markeringen for alle spørgsmål, så de er klar til en ny gennemgang af quizzen
    questions.forEach((question) => {
      question.correct = false;
    });

    // Vi nulstiller også den aktuelle spørgsmålsindeks
    currentQuestion = -1;

    // Vi tilføjer en "click"-hændelseshåndtering til knappen, så brugeren kan starte quizzen igen ved at klikke på den
    button.addEventListener('click', startQuiz);
  }
};

// Funktionen til at oprette et PDF-certifikat
const createPdf = async () => {
  const { PDFDocument } = PDFLib;

  // Henter det eksisterende diplom
  const existingPdfBytes = await fetch(
    'https://aikademiet.dk/wp-content/uploads/2023/05/diplom.pdf'
  ).then((res) => res.arrayBuffer());

  // Loader det eksisterende PDF dokument
  const bytes = new Uint8Array(existingPdfBytes);
  const pdfDoc = await PDFDocument.load(bytes);
  const page = pdfDoc.getPages()[0];

  // Registrerer font og indlæser en specifik font
  pdfDoc.registerFontkit(fontkit);
  const fontBytes = await fetch(
    'https://aikademiet.dk/wp-content/uploads/2023/05/Apalu.ttf'
  ).then((res) => res.arrayBuffer());
  const apaluFont = await pdfDoc.embedFont(fontBytes);

  // Finder brugerens navn og tilføjer det til certifikatet
  const text = aboutDiv.querySelector('input').value;
  const textSize = 40;
  const textWidth = apaluFont.widthOfTextAtSize(text, textSize);
  page.drawText(text, {
    x: page.getWidth() / 2 - textWidth / 2,
    y: 230,
    size: textSize,
    font: apaluFont,
  });

  // Gemmer det nye PDF-dokument og laver det om til en data-uri
  const pdfDataUri = await pdfDoc.save({ dataUri: true });

  // Laver en ny Blob ud fra data-uri'en og opretter et download-link til brugeren
  const blob = new Blob([pdfDataUri], {
    type: 'application/pdf',
  });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = 'Certifikat';
  link.click();
};

// Opdaterer timeren på siden
const setTimerDiv = () => {
  // Reducerer antallet af sekunder der er tilbage
  secondsLeft--;

  // Hvis tiden er løbet ud, kalder vi answerQuestion funktionen
  if (secondsLeft < 0) {
    answerQuestion();
    return;
  }

  // Opdaterer timeren på siden, og skifter tekstfarve til rød, hvis der er under 10 sekunder tilbage
  timerDiv.classList[secondsLeft < 10 ? 'add' : 'remove']('text-red-600');
  timerDiv.innerText = `00:${
    secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft
  }`;
};

// Funktion til at blande elementerne i et array rundt
const shuffle = (array, ignoreLast) => {
  // Gemmer det sidste element, hvis ignoreLast er sand
  const last = ignoreLast ? array.pop() : null;
  let currentIndex = array.length,
    randomIndex;

  // Blander elementerne rundt i arrayet
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  // Tilføjer det sidste element igen, hvis ignoreLast var sand
  if (last) {
    array.push(last);
  }

  return array;
};
