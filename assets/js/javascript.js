//instantiate countdown timer
var startCountdown = setInterval(countdown, 1000);
var quizTimer = 75;
var countdown = function() {
    console.log(quizTimer);
    quizTimer--;
    if (quizTimer === 0) {
        clearInterval(startCountdown);
    }
}


// instantiate start button variable 
var startBtn = document.querySelector("#start-btn");
console.log(startBtn);


// When start button clicked, start countdown function
startBtn.addEventListener("click", function() {
    countdown();
});