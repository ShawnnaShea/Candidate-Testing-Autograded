const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
"Who was the first American woman in space? ",
"True or false: 5 kilometer == 5000 meters? ",
"(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? " 
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3",
];
let candidateAnswers = [""];
let score = Number("");


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  let candidateName = input.question('Please enter your name: ');
  console.log("");
  return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(`${i+1} ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}`);
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      score += 1;
    }
    console.log("");
  }       
return candidateAnswers;
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let scorePer = (score / (questions.length)) * 100;
if (scorePer >= 80) {
  grade = "PASSED";
  console.log(`>>> Overall Grade: ${scorePer} % ${score} of ${questions.length} responses correct <<<\n>>> Status: ${grade} <<<`);
} else {
  grade = "FAILED";
  console.log(`>>> Overall Grade: ${scorePer} % ${score} of ${questions.length} responses correct <<<\n>>> Status: ${grade} <<<`);
}

 //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
};

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log('Hello!' + candidateName + 'Here is a short quiz for you.');
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};