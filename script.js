let pyramidHeight;
let eiffelTowerHeight;

// Array of 35 questions for the pyramid
const pyramidQuestions = [
    { question: "What is the base length of the Great Pyramid of Giza in meters?", answer: 230.4 },
    // Add more questions...

    { question: "What is the height of the Great Pyramid of Cholula in meters?", answer: 55.85 },
    // Add more questions...

    { question: "What is the base length of the Pyramid of Djoser in meters?", answer: 109 },
    // Add more questions...

    // Additional questions
    { question: "What is the height of the Pyramid of Khafre in meters?", answer: "136.4" },
    { question: "When was the construction of the Pyramid of Meidum started?", answer: "2600 BCE" },
    { question: "Which pharaoh is associated with the construction of the Red Pyramid?", answer: "Sneferu" },
    { question: "What is the purpose of the Bent Pyramid's unusual shape?", answer: "To prevent structural instability" },
    { question: "In what city is the Pyramid of Amenemhat III located?", answer: "Hawara" },
    { question: "What is the step count of the Pyramid of Unas?", answer: "235" },
    { question: "What is the angle of inclination of the Bent Pyramid?", answer: "54 degrees" },
    { question: "Who is considered the first pyramid builder?", answer: "Imhotep" },
    { question: "What is the construction material of the Black Pyramid?", answer: "Mudbrick" },
];

// Array of 35 questions for the Eiffel Tower
const eiffelTowerQuestions = [
    { question: "What is the height of the Eiffel Tower in meters?", answer: 330.0 },
    // Add more questions...

    { question: "When was the Eiffel Tower completed?", answer: 1889 },
    // Add more questions...

    { question: "How many steps are there to the top of the Eiffel Tower?", answer: 1665 },
    // Add more questions...

    // Additional questions
    { question: "What is the original purpose of the Eiffel Tower?", answer: "A broadcast tower" },
    { question: "Who was the principal engineer of the Eiffel Tower?", answer: "Gustave Eiffel" },
    { question: "What is the material used for the construction of the Eiffel Tower?", answer: "Wrought iron" },
    { question: "How many visitors does the Eiffel Tower attract annually?", answer: "Around 7 million" },
    { question: "What was the original color of the Eiffel Tower?", answer: "Reddish-brown" },
    { question: "What is the name of the restaurant located on the Eiffel Tower's second level?", answer: "Le 58 Tour Eiffel" },
    { question: "How many elevators are there in the Eiffel Tower?", answer: "5" },
    { question: "Which country gifted a replica of the Eiffel Tower to Paris?", answer: "China" },
    { question: "What is the nickname of the Eiffel Tower?", answer: "La dame de fer (The Iron Lady)" },
    { question: "What is the yearly maintenance cost of the Eiffel Tower?", answer: "Approximately €4.7 million" },
];

// Continue with the rest of the code as before

function startGame() {
    askPyramidQuestion();
}

function askPyramidQuestion() {
    const pyramidQuestion = getRandomQuestion(pyramidQuestions);
    displayQuestion(pyramidQuestion);
}

function getRandomQuestion(questions) {
    // Get a random question from the array
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function displayQuestion(question) {
    const questionSection = document.getElementById('question-section');
    questionSection.innerHTML = `
        <h2>${question.question}</h2>
        <input type="number" id="user-answer" placeholder="Your answer">
        <button onclick="checkAnswer(${question.answer})">Check Answer</button>
    `;
}

function checkAnswer(correctAnswer) {
    const userAnswer = parseFloat(document.getElementById('user-answer').value);

    if (!isNaN(userAnswer) && userAnswer === correctAnswer) {
        // If the answer is correct, show the height of the pyramid
        pyramidHeight = correctAnswer;
        displayResult("Correct! The height of the pyramid is " + pyramidHeight + " meters.");
        displayRatio(pyramidHeight);
        // Now, move on to the Eiffel Tower question
        askEiffelTowerQuestion();
    } else {
        displayResult("Oops! That's not correct. Try again!");
        displayRatio("");
    }
}

function askEiffelTowerQuestion() {
    const eiffelTowerQuestion = getRandomQuestion(eiffelTowerQuestions);
    displayQuestion(eiffelTowerQuestion);
}

function displayResult(message) {
    const resultMessage = document.getElementById('result-message');
    resultMessage.innerHTML = message;
}

function displayRatio(content) {
    const ratioMessage = document.getElementById('ratio-message');
    ratioMessage.innerHTML = content;
}

function displayResult(message) {
    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = message;
}

function displayRatio(ratio) {
    const ratioMessage = document.getElementById('ratio-message');
    ratioMessage.textContent = ratio;
}