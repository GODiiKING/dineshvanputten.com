// Get references to the option buttons and audio element by their IDs
const option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3"),
      audio = document.getElementById("myAudio");  

// Variable to store the correct answer
var answer = 0;

// Function to generate a new multiplication equation and answer options
function generate_equation(){ 
  // Randomly generate two numbers between 0 and 12
  var num1 = Math.floor(Math.random() * 13),
      num2 = Math.floor(Math.random() * 13),
      // Generate two dummy answers for misleading the user
      dummyAnswer1 = Math.floor(Math.random() * 50), // Random number for dummy answer 1
      dummyAnswer2 = Math.floor(Math.random() * 50), // Random number for dummy answer 2
      // Array to store the correct answer and dummy answers
      allAnswers = [],
      // Array to hold the shuffled answers
      switchAnswers = [];

  // Calculate the correct answer by multiplying num1 and num2
  answer = eval(num1 * num2);
  
  // Display num1 and num2 in the equation area
  document.getElementById("num1").innerHTML = num1; 
  document.getElementById("num2").innerHTML = num2; 

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

// Initial call to generate a multiplication equation when the page loads
generate_equation();
