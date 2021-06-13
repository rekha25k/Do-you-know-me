var readLineSync = require("readline-sync");
const chalk = require("chalk");
var score = 0;

console.log("Welcome to DO YOU KNOW Rekha Quiz!\n");
var userName = readLineSync.question("Please enter your name ");
console.log("Hi "+userName+ ". Take the quiz below to find out how well you know Rekha :D");

var questionBank = [
  {
    question:"Where do I live? ",
    answer: "Kolkata"
  },

  {
    question:"Which is my favorite restaurant?",
    answer: "Peter Cat"
  },

  {
    question:"Which word do I say way too often?",
    answer: "like"
  },

  {
    question:"Am I a dog or a cat person?",
    answer: "cat"
  },

  {
    question:"What do I prefer tea or coffee",
    answer: "coffee"
  },
  
];

var highScores = [
  {
    name: "Pooja",
    score: 4,
  },
  {
    name:"Rubi",
    score: 4,
  }
]


  function play(){
for(let i=0; i < questionBank.length ; i++){
  console.log("Question "+(i+1));
  var currentQuestion = questionBank[i];
quiz(currentQuestion);
}
console.log("Thanks for playing!");
console.log("The Highest Scores");

highScores.map(score => console.log(chalk.bgMagenta(score.name)+ " : "+ chalk.inverse(score.score)));
  
console.log("If your name should be here, dm me on Insta @rekha_25, I'll add your name to the list :)");  
  }
function quiz(currentQuestion){
  
  var userAns =  readLineSync.question(currentQuestion.question);
  if(userAns.toLowerCase() === currentQuestion.answer.toLowerCase()){
    console.log("You are right!");
    score++;
  }
  else{
  console.log("You are wrong!"); }
  console.log("Your current score is " +score);
  console.log("-----------------------------");
}

play();