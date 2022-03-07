let startTime = 0
const timerSeconds = 60
let timerOffset = 0
let currentTimer = timerSeconds
let intervalId = 0

let myQuestions = [
    {
        question: "Commonly used data types do NOT include:_______",
        answers: {
            a: 'strings',
            b: 'booleans',
            c: 'alerts',
            d: 'numbers'
        },

        correctAnswer: 'a'
    },

    {
        question: "The condition of an if/else statement is enclosed with:____",
        answers: {
            a: 'quotes',
            b: 'curly brackets',
            c: 'parenthesis',
            d: 'square brackets'
        },

        correctAnswer: 'c'
    },

    {
        question: "Arrays in JavaScript can be used to store:_____",
        answers: {
            a: 'numbers and strings',
            b: 'other arrays',
            c: 'booleans',
            d: 'all of the above'
        },

        correctAnswer: 'd'
    },

    {
        question: "String values must be enclosed with ______ when being assigned to variables",
        answers: {
            a: 'commas',
            b: 'curly brackets',
            c: 'quotes',
            d: 'parenthesis'
        },

        correctAnswer: 'c'
    }
]

$(document).ready(function() {
    let currentHighScore = localStorage.getItem("high score");

    if (currentHighScore) {
        $("#high-score").html(currentHighScore);
    }
    else {
        $("#high-score").html("N/A");
    }
})

function answerQuestion(answer, correctAnswer) {
    $("#result").removeClass("hidden");

    if (answer === correctAnswer) {
        $("#result").html("Correct!");
    }
    else {
        $("#result").html("Wrong!");
        timerOffset += 10;
    }

    myQuestions.shift();
    nextQuestion();
}

function startQuiz() {
    nextQuestion();
    startTimer();    
}

function saveHighScore(currentScore) {
    let currentHighScore = localStorage.getItem("high score")

    if (currentHighScore) {
        let highScore = Math.max(currentHighScore, currentScore);
        localStorage.setItem("high score", highScore);
        localStorage.setItem("initials", $("#initials").val());
    }
    else {
        localStorage.setItem("high score", currentScore);
    }

    let highScore = localStorage.getItem("high score");
    console.log(highScore);
    $("#high-score").html(highScore);

}

function endQuiz() {
    $("#question").addClass("hidden");
    $("#initials").removeClass("hidden");
    alert("the quiz has ended.");
    clearInterval(intervalId);

    let now = Date.now();
    let delta = Math.floor((now - startTime) / 1000);
    currentTimer = timerSeconds - (delta + timerOffset);

    if (currentTimer > 0) {
        $("#time-left").html(currentTimer);
    }
    else {
        $("#time-left").html("Time is up!");
    }

    $("#final-score").html("Your current score is: " + currentTimer);

    saveHighScore(currentTimer);    
}

function nextQuestion() {
    $("#quiz-rules").addClass("hidden");
    $("#question").removeClass("hidden");

    if (myQuestions.length === 0) {
        endQuiz();
        return;
    }

    let question = myQuestions[0];
    $("#question-title").text(question.question);
    $("#answer-a").text(question.answers.a);
    $("#answer-b").text(question.answers.b);
    $("#answer-c").text(question.answers.c);
    $("#answer-d").text(question.answers.d);


    $("#answer-a").off("click").click(function () {
        answerQuestion("a", question.correctAnswer);
    });

    $("#answer-b").off("click").click(function () {
        answerQuestion("b", question.correctAnswer);
    });

    $("#answer-c").off("click").click(function () {
        answerQuestion("c", question.correctAnswer);
    });

    $("#answer-d").off("click").click(function () {
        answerQuestion("d", question.correctAnswer);
    });
}

function startTimer() {
    startTime = Date.now()
    console.log(startTime);

    intervalId = setInterval(function () {
        let now = Date.now();
        let delta = Math.floor((now - startTime) / 1000);
        currentTimer = timerSeconds - (delta + timerOffset);

        if (currentTimer > 0) {
            $("#time-left").html(currentTimer);
        }
        else {
            $("#time-left").html("Time is up!");
        }

    }, 500);
}

$("#start-btn").click(startQuiz);

// function submitScore(highScore) {

//     let initials = JSON.parse($("#initials").val());
//     localStorage.setItem(initials, highScore)

//     // saveHighScore(currentTimer);

//     // let initials = $("#initials").val();    
//     // let highScore = localStorage.getItem("high score");
//     // console.log(highScore);
//     // $("#high-score").html(highScore);    
// };

// $("#submit-btn").on("click", submitScore());