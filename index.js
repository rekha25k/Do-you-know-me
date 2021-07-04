var readLineSync = require("readline-sync");
const chalk = require("chalk");
var score = 0;

function welcomeMessage(){
console.log("Welcome to "+chalk.italic.bgCyan("DO YOU KNOW Rekha ")+ "Quiz!\n");
var userName = readLineSync.question("Please enter your name ");

console.log(chalk.green("Hi "+userName+ ". Take the quiz below to find out how well you know Rekha :D"));

console.log(chalk.bgMagenta("\nNote:- For every right answer, your will be getting +1 points\nGood luck!\n"))
  

}

var questionBank = [
  {
    question:"Where do I live? ",
    answer: "Kolkata"
  },

  {
    question:"Which is my favorite restaurant? ",
    answer: "Peter Cat"
  },

  {
    question:"Which word do I say way too often? ",
    answer: "like"
  },

  {
    question:"Am I a dog or a cat person? ",
    answer: "cat"
  },

  {
    question:"What do I prefer tea or coffee? ",
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

function greetingMessage(){
  var currentTime = new Date();
  var currentOffset = currentTime.getTimezoneOffset();

  var ISTOffset = 330;   // IST offset UTC +5:30 
  var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
  // ISTTime now represents the time in IST coordinates

  var hours = ISTTime.getHours()

  if (hours < 12 && hours >4) {
    console.log(chalk.bold("Good morning!"));
  }else if(hours > 12 && hours< 18) {
    console.log(chalk.bold("Good afternoon!"));
  }else{
    console.log(chalk.bold("Good evening!"));
  }
}


  function play(){
for(let i=0; i < questionBank.length ; i++){
  console.log(chalk.bgYellow("Question "+(i+1)));
  var currentQuestion = questionBank[i];
quiz(currentQuestion);
}
console.log("Thanks for playing!");
console.log(chalk.bgMagenta("\nThe Highest Scores\n"));

highScores.map(score => console.log(chalk.bgBlue(score.name)+ " : "+ chalk.inverse(score.score)));
  
console.log(chalk.bgCyan("\nIf your name should be here, dm me on Insta @rekha_25, I'll add your name to the highest scorers list :)"));  
  }
function quiz(currentQuestion){
  
  var userAns =  readLineSync.question(currentQuestion.question);
  if(userAns.toLowerCase() === currentQuestion.answer.toLowerCase()){
    console.log(chalk.green("You are right!"));
    score++;
  }
  else{
  console.log(chalk.red("You are wrong!")); }
  console.log("Your current score is " +score);
  console.log("-----------------------------");
}

greetingMessage();
welcomeMessage();
play();
