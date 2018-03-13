//Declare variables

//if I want a seperate start screen
var startScreen;

//variable to store the timer visually
var gameHTML

//variable to hold the seconds for timer
var counter = 30;

//array for questions
var questionArray = [
    "What is the name of the restaurant that makes the BEST waffles?",
    "What is the name of the most lovable minature horse in Pawnee?",
    "When Ann decides to be selffish and abandon her best friend Leslie Knope, what town does she move to?",
    "What's the worst building in all of Pawnee?"
]

//array for the answer choices
var choiceArray = [
    ["Dan's","IHOW","Waffle House","JJ's Diner"],
    ["Tiny","Lil' Sebastian","Tim","Larry"],
    ["Brazelton","Springfield","Bloomington","Albany"],
    ["City Hall","Pharmacy","The Pit","Library"]
];

//array for correct answers
var correctAnswers = [
    ["JJ's Diner","Lil' Sebastian","Bloomington","Library"]
];


$(document).ready(function() {
    $("#question").html(questionArray)
    console.log(questionArray)

});