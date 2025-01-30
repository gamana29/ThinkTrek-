// JavaScript to calculate and display the streak
const streakKey = "learningStreak"; // Key to store the streak in localStorage
const lastDateKey = "lastLoginDate"; // Key to store the last login date
const today = new Date().toDateString(); // Get today's date in a readable format

// Function to update streak
function updateStreak() {
    const lastLoginDate = localStorage.getItem(lastDateKey);
    let streakCount = parseInt(localStorage.getItem(streakKey)) || 0;
    let dayWiseStreak = JSON.parse(localStorage.getItem("dayWiseStreak")) || {};

    if (lastLoginDate === today) {
        // User has already visited today, no streak update
        document.getElementById("streak").innerText = `Current Streak: ${streakCount} days`;
        return;
    }

    if (lastLoginDate === new Date(new Date().setDate(new Date().getDate() - 1)).toDateString()) {
        // If the user logged in yesterday, increment the streak
        streakCount += 1;
    } else {
        // Otherwise, reset the streak
        streakCount = 1;
    }

    // Update the streak and last login date in localStorage
    localStorage.setItem(streakKey, streakCount);
    localStorage.setItem(lastDateKey, today);

    // Update day-wise streak
    dayWiseStreak[today] = streakCount;
    localStorage.setItem("dayWiseStreak", JSON.stringify(dayWiseStreak));

    // Display the updated streak
    document.getElementById("streak").innerText = `Current Streak: ${streakCount} days`;

    // Display the day-wise streak
    let dayWiseStreakHTML = "<h4>Day-wise Streak:</h4><ul>";
    for (let date in dayWiseStreak) {
        dayWiseStreakHTML += `<li>${date}: ${dayWiseStreak[date]} days</li>`;
    }
    dayWiseStreakHTML += "</ul>";
    document.getElementById("day-wise-streak").innerHTML = dayWiseStreakHTML;
}

// Call the function to update streak when the page loads
window.onload = function() {
    // Ensure that the streak is updated and displayed when the page loads
    updateStreak();
};
