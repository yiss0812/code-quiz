const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let avalibleQuesions = [];

let questions = [
    {
        question:  "which of the fallowing is correct about features of javascript??",
        choice1:"javascript is a lightweight, interpreted programing language",
        choice2:"javascript is a desinged for creatinng netword-centric application",
        choice3:"javascript is complementary to and integrated with java",
        choice4: "<all of the above>",
        answer: 4
    },
    {
        question: 
            "which of the following type of variable takes precedence over other if names are same??",
        choice1: "global variable",
        choice2: "local variables",
        choice3: "both of the above",
        choice4: "none of the above",
        answer: 2
    },
    {
        question: "which of the following function of Boolean object return the primitive value of the Boolean object?",
        choice1: "tosource",
        choice2: "valueof",
        choice3: "tostring",
        choice4: "none of the above",
        answer: 3
    },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    avalibleQuesions = [... questions];
    console.log(avalibleQuesions);
    getNewQuestion();
};

getNewQuestion = () => {
     questionCounter++;
     const questionIndex = Math.floor(Math.random() * avalibleQuesions.length);
     currentQuestion = avalibleQuesions[questionIndex];
     question.innerText = currentQuestion.question;


    choices.forEach( choice => {
    const number = choice.dataset["number"];
    choice.innerText =  currentQuestion["choice" + number];
    });

    avalibleQuesions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
        
    });
});




startGame();
