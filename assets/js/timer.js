    // Function to start the timer
    function startTimer() {
    // Check if the timer is already running
    if (localStorage.getItem('timerRunning') <= 0) {
    localStorage.setItem('timerRunning', 90);
}

    // Set the initial timer value
    let timerValue = localStorage.getItem('timerRunning');

    // Disable the button
    document.getElementById('startButton').disabled = true;

    // Start the countdown
    const interval = setInterval(function() {
    document.getElementById('timer').innerText = timerValue;

    if (timerValue <= 0) {
    // Enable the button when the timer reaches zero
    document.getElementById('startButton').disabled = false;
    clearInterval(interval);
    localStorage.setItem('timerRunning', timerValue);
    document.getElementById('timer').innerText = '';
} else {
    timerValue--;
    localStorage.setItem('timerRunning', timerValue);
}
}, 1000);
}

    startTimer();
