// Get references to the option buttons and audio element by their IDs
const option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3"),
      audio = document.getElementById("myAudio");  

// Variable to store the correct answer
var answer = 0;

// Function to generate a new division equation and answer options
function generate_equation(){ 
  // Randomly generate two numbers between 1 and 10
  var num1 = Math.floor(Math.random() * 10) + 1,
      num2 = Math.floor(Math.random() * 10) + 1,
      // Generate two dummy answers for misleading the user
      dummyAnswer1 = Math.floor(Math.random() * 10) / 10, // Fraction dummy answer
      dummyAnswer2 = Math.floor(Math.random() * 10), // Whole number dummy answer
      // Array to store the correct answer and dummy answers
      allAnswers = [],
      // Array to hold the shuffled answers
      switchAnswers = [];

  // If num1 is greater than num2, divide num1 by num2
  if(num1 > num2){
    answer = eval(num1 / num2);
    // Display num1 and num2 in the equation area
    document.getElementById("num1").innerHTML = num1; 
    document.getElementById("num2").innerHTML = num2;
  }
  // If num2 is greater than num1, divide num2 by num1
  else{
    answer = eval(num2 / num1);
    // Display num2 and num1 in the equation area (num2 first)
    document.getElementById("num1").innerHTML = num2; 
    document.getElementById("num2").innerHTML = num1;
  } 

  // If the answer is not an integer, round it to 1 decimal place
  if(Number.isInteger(answer) == false){
    answer = answer.toFixed(1);
  }

  // Add the correct answer and dummy answers to the allAnswers array
  allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  // Shuffle the answers by randomly removing one element at a time
  for (i = allAnswers.length; i--;){
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  // Assign the shuffled answers to the option buttons
  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2]; 
};

// Event listener for the first option button
option1.addEventListener("click", function(){
    // Check if the selected option matches the correct answer
    if(option1.innerHTML == answer){
      // Generate a new equation if the answer is correct
      generate_equation();
    }
    else{
      // Play the "wrong" sound if the answer is incorrect
      audio.play();
    }
});

// Event listener for the second option button
option2.addEventListener("click", function(){
    // Check if the selected option matches the correct answer
    if(option2.innerHTML == answer){
      // Generate a new equation if the answer is correct
      generate_equation();
    }
    else{
      // Play the "wrong" sound if the answer is incorrect
      audio.play();
    }
});

// Event listener for the third option button
option3.addEventListener("click", function(){
    // Check if the selected option matches the correct answer
    if(option3.innerHTML == answer){
     // Generate a new equation if the answer is correct
     generate_equation();
    }
    else{
      // Play the "wrong" sound if the answer is incorrect
      audio.play();
    }
});

// Initial call to generate a division equation when the page loads
generate_equation();
