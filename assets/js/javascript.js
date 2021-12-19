// instantiate start button variable 
var startBtn = document.querySelector("#start-btn");
// console.log(startBtn);

// When start button clicked, start countdown function
startBtn.addEventListener("click", function(){
    //instantiate countdown timer
    var quizTimer = 5;

    //decrement counter
    var countdown = function(){
        console.log(quizTimer);
        quizTimer--;
        if (quizTimer === 0){
            clearInterval(startCountdown);
        }
    }
    //decrement interval
    var startCountdown = setInterval(countdown, 1000);
})

