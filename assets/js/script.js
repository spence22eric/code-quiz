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

function answerQuestion(answer, correctAnswer) {
    
    if (answer === correctAnswer) {
        alert("correct answer");
    }
    else {
        alert("Borgar");
    }
    console.log(answer);
    myQuestions.shift();
    nextQuestion();
}

function startQuiz() {
    nextQuestion();
}

function endQuiz() {
    alert("the quiz has ended.");
}

function nextQuestion() {
    $("#quiz-rules").addClass("hidden");
    $("#question").removeClass("hidden");

    if (myQuestions.length === 0) {
        endQuiz();
        return;
    }

    let question = myQuestions[0];
    console.log(question);
    $("#question-title").text(question.question);
    $("#answer-a").text(question.answers.a);
    $("#answer-b").text(question.answers.b);
    $("#answer-c").text(question.answers.c);
    $("#answer-d").text(question.answers.d);
    

    $("#answer-a").off("click").click(function() {
        answerQuestion("a", question.correctAnswer);
    });

    $("#answer-b").off("click").click(function() {
        answerQuestion("b", question.correctAnswer);
    });

    $("#answer-c").off("click").click(function() {
        answerQuestion("c", question.correctAnswer);
    });

    $("#answer-d").off("click").click(function() {
        answerQuestion("d", question.correctAnswer);
    });


}


$("#start-btn").click(startQuiz);