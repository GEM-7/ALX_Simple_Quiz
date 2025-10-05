function checkAnswer() {
    // Function body
    const correctAnswer = "4";
    const userAnswer = document.querySelector('[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    }
    else {
        feedback.textContent = "That's incorrect. Try again!";
    }
    const submitButton = document.querySelector("submit-answer");
    submitButton.addEventListener("click", checkAnswer);
}