

// create start button that gets replaced by timer div and question div

// create visible countdown timer

// try to randomize options for questions or just switch order of correct option

// store answers

// tally div to replace timer and question div when finish button is clicked




$(document).ready(function() {
// varible for 5 questions with 4 wrong options and 1 correct
var questions = {
    firstQuestion: "Question 1",
    options: {
      wrong1: "wrong",
      wrong2: "wronger",
      wrong3: "wrongest",
      wrong4: "wrongerest",
      correct: "right"
    },
    secondQuestion: "Question 2",
    options: {
      wrong1: "wrong",
      wrong2: "wronger",
      wrong3: "wrongest",
      wrong4: "wrongerest",
      correct: "right"
    },
    thirdQuestion: "Question 3",
    options: {
      wrong1: "wrong",
      wrong2: "wronger",
      wrong3: "wrongest",
      wrong4: "wrongerest",
      correct: "right"
    },
    fourthQuestion: "Question 4",
    options: {
      wrong1: "wrong",
      wrong2: "wronger",
      wrong3: "wrongest",
      wrong4: "wrongerest",
      correct: "right"
    },
    fifthQuestion: "Question 5",
    options: {
      wrong1: "wrong",
      wrong2: "wronger",
      wrong3: "wrongest",
      wrong4: "wrongerest",
      correct: "right"
    },    
};

// 30 second warning 
setTimeout(thirtySeconds, 1000 * 90);

//  after 120 seconds, execute the timeUp function
setTimeout(timeUp, 1000 * 120);

// function to run when 30 seconds is left
function thirtySeconds() {
  $("#countdown").append("<h2>30 Seconds Left!</h2>");
  console.log("30 seconds left");
}

// function to run when time's up
function timeUp() {
  console.log("done");
  $("#countdown").append("<h2>Time's Up!</h2>");
  console.log("time is up");
}
  

});