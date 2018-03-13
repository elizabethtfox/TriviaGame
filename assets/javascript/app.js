$(document).ready(function() {
    var index = 0;
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
            console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
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
        possibleAnswers : ["A. Dan's",
            'B. IHOW',
            'C. Waffle House',
            "D. JJ's Diner"],
        flags : [false, false, false, true],
        answer : "D. JJ's Diner"
    };

    var q2 = {
        question: "What is the name of the most lovable minature horse in Pawnee?",
        possibleAnswers: ["A. Tiny",
            "B. Lil' Sebastian",
            "C. Tim",
            "D. Larry"],
        flags : [false, true, false, false],
        answer : "B. Lil' Sebastian"
    };

    var questionArray = [q1, q2];

    function loadQuestion(questionSelection) {
        console.log(questionSelection);
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
        alert("Correct!");
        console.log("correct");
    }

    function answerWrong() {
        wrong++;
        alert("Incorrect!");
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
        console.log($(this));
        if(this.id == 'choice0') {
            var answerChosen = 'A';
        } else if(this.id == 'choice1') {
            answerChosen = 'B';
        } else if (this.id == 'choice2') {
            answerChosen = 'C';
        } else if (this.id == 'choice3') {
            answerChosen = 'D';
        }
        if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
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