document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let score = 0;
    const answers = {
        q1: "O(log n)",  // Correct answer for question 1
        q2: "Heap",      // Correct answer for question 2
        q3: "Quadratic Time" // Correct answer for question 3
    };

    // Check answers
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value === answers.q1) score++;
    if (q2 && q2.value === answers.q2) score++;
    if (q3 && q3.value === answers.q3) score++;

    alert(`You scored ${score} out of 3!`);

    // Redirect to dashboard after showing the result
    setTimeout(function() {
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    }, 2000); // Wait for 2 seconds before redirecting
});
