// Function Declaration: This is the code that runs when the button is clicked
function checkAnswer() {
    
    // 1. Identify the Correct Answer
    const correctAnswer = "4"; 
    
    // 2. Retrieve the User's Answer
    // Selects the radio button whose name is "quiz" and is currently "checked".
    const selectedAnswerElement = document.querySelector('[name="quiz"]:checked');
    
    // Get the feedback element once
    const feedbackElement = document.getElementById('feedback');

    // Check if the user has selected an answer
    if (!selectedAnswerElement) {
        feedbackElement.textContent = "Please select an answer first.";
        return; // Stop the function
    }
    
    // Access the .value property of the selected radio button to get the user's choice
    const userAnswer = selectedAnswerElement.value;
    
    // 3. Compare the User's Answer with the Correct Answer
    // The strict equality operator (===) checks both value and type.
    if (userAnswer === correctAnswer) {
        // Correct Answer
        feedbackElement.textContent = "✅ Correct! Well done.";
    } else {
        // Incorrect Answer
        feedbackElement.textContent = "❌ That's incorrect. Try again!";
    }
}
// Select the "Submit Answer" button
const submitButton = document.getElementById('submit-answer');

// Add a click event listener, passing the function reference (checkAnswer) 
// without parentheses to execute it only upon the 'click' event.
submitButton.addEventListener('click', checkAnswer);