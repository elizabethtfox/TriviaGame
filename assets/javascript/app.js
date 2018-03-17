$(document).ready(function() {
    var index = 0; //holds the count of each question
    var countdownTimer = {
        time : 30,
        reset: function() {
            this.time = 30;
            $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
        },
        start: function() {
            counter = setInterval(countdownTimer.count, 1000);
        },
        stop: function() {
            clearInterval(counter);
        },
        count: function() {
            countdownTimer.time--;
            //console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
            if (countdownTimer.time >= 0) {
                $('.timer').html('<h4>' + countdownTimer.time + ' seconds remaining</h4>');
            }
            else {
                index++;
                answerWrong();
                countdownTimer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                } else {
                    $(".answerChoice").hide();
                    showScore();
                }
            }
        }
    };

    var correct = 0;
    var wrong = 0;
    var q1 = {
        question :'What is the name of the restaurant that makes the BEST waffles?',
        possibleAnswers : ["Dan's",
            'IHOW',
            'Waffle House',
            "JJ's Diner"],
    flags : [false, false, false, true],
        answer : "JJ's Diner"
};

    var q2 = {
        question: "What is the name of the most lovable minature horse in Pawnee?",
        possibleAnswers: ["Tiny",
            "Lil' Sebastian",
            "Tim",
            "Larry"],
        flags : [false, true, false, false],
        answer : "Lil' Sebastian"
    };

    var q3 = {
        question: "Who is Leslie Knope's best friend?",
        possibleAnswers: ["Tom Haverford",
            "Ann Perkins",
            "Ron Swanson",
            "April Ludgate"],
        flags : [false, true, false, false],
        answer : "Ann Perkins"
    };

    var q4 = {
        question: "What fictional book did a citizen so desperately want in the time capsule that they handcuffed themselves to a chair?",
        possibleAnswers: ["Of Mice and Men",
            "The Outsiders",
            "Twilight",
            "War and Rememberance"],
        flags : [false, false, true, false],
        answer : "Twilight"
    };

    var q5 = {
        question: "Which Parks and Rec employee secretly performs at Jazz clubs as Duke Silver?",
        possibleAnswers: ["Ron Swanson",
            "Leslie Knope",
            "Andy Dwyer",
            "Jerry"],
        flags : [true, false, false, false],
        answer : "Ron Swanson"
    };

    var q6 = {
        question: "When game does Ben Wyatt invent?",
        possibleAnswers: ["Tic Tac Toe",
            "Uno",
            "Kicks and Giggles",
            "Cones of Dunshire"],
        flags : [false, false, false, true],
        answer : "Cones of Dunshire"
    };

    var questionArray = [q1, q2, q3, q4, q5, q6];

    function loadQuestion(questionSelection) {
        console.log("question selection", questionSelection);
        countdownTimer.reset();
        $("#question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
        $("#choice0").text(questionArray[questionSelection].possibleAnswers[0]).show();
        $("#choice1").text(questionArray[questionSelection].possibleAnswers[1]).show();
        $("#choice2").text(questionArray[questionSelection].possibleAnswers[2]).show();
        $("#choice3").text(questionArray[questionSelection].possibleAnswers[3]).show();
    }

    function setup() {
        index = 0;
        $('#question').append('<button id="startButton">Start</button>');
        $('#startButton').on('click', function() {
            //debugger;
            $(this).hide();
            countdownTimer.start();
            loadQuestion(index);
        });
    }

    function getAnswer() {

//  nextQuestion();
        $('.answerChoice').on('click', function() {
            console.log('alert', index);
            index++;
            console.log('click', index);
            $("#question").text('');
            $("#choice0").text('');
            $("#choice1").text('');
            $("#choice2").text('');
            $("#choice3").text('');
            loadQuestion();
        })
    }

    function answerCorrect() {
        correct++;
        //alert("Correct!");
        console.log("correct");
    }

    function answerWrong() {
        wrong++;
        //alert("Incorrect!");
        console.log("wrong");
    }

    function showScore() {
        $('#question').empty();
        $('#question').append("<h2><p>" + correct + " correct</p></h2>");
        $('#question').append("<h2><p>" + wrong + " incorrect</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();

    }

    setup();
    $('.answerChoice').on('click', function() {
        console.log("this", correct);
        if (this.id == '#choice0') {
            var answerChosen = 'A';
        } else if (this.id == '#choice1') {
            answerChosen = 'B';
        } else if (this.id == '#choice2') {
            answerChosen = 'C';
        } else if (this.id == '#choice3') {
            answerChosen = 'D';
        }
        if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) { //If the answer the user chooses is A (or choice0) AND flag for index 0 of the array is true than answer is correct
            answerCorrect();
        } else if (answerChosen == 'A') {
            answerWrong();
        }
        if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
            answerCorrect();
        } else if (answerChosen == 'B') {
            answerWrong();
        }
        if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
            answerCorrect();
        } else if (answerChosen == 'C') {
            answerWrong();
        }
        if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
            answerCorrect();
        } else if (answerChosen == 'D') {
            answerWrong();
        }

        $("#question").text('');
        $("#choice0").text('');
        $("#choice1").text('');
        $("#choice2").text('');
        $("#choice3").text('');
        index++;
        if (index < questionArray.length) {
            loadQuestion(index);
        } else {
            $(".answerChoice").hide();
            showScore();
        }
    });

});