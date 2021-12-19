// instantiate start button variable 
var startBtn = document.querySelector("#start-btn");
// console.log(startBtn);

//Create questions

const Question1 = new Object();
Question1.className = "homeBanner"
Question1.prompt = document.createElement("h1");
Question1.textContent = "test";
Question1.answer1 = 'answer1';
Question1.answer2 = 'answer2';
Question1.answer3 = 'yeah';
Question1.answer4 = 'no'

const Question2 = new Object();
Question2.prompt = 'Question';
Question2.answer1 = 'answer1';
Question2.answer2 = 'answer2';
Question2.answer3 = 'yeah';
Question2.answer4 = 'no'

const Question3 = new Object();
Question3.prompt = 'Question';
Question3.answer1 = 'answer1';
Question3.answer2 = 'answer2';
Question3.answer3 = 'yeah';
Question3.answer4 = 'no'

const Question4 = new Object();
Question4.prompt = 'Question';
Question4.answer1 = 'answer1';
Question4.answer2 = 'answer2';
Question4.answer3 = 'yeah';
Question4.answer4 = 'no'

const Question5 = new Object();
Question5.prompt = 'Question';
Question5.answer1 = 'answer1';
Question5.answer2 = 'answer2';
Question5.answer3 = 'yeah';
Question5.answer4 = 'no'

//Create questions array 

var Questions = [Question1, Question2, Question3, Question4, Question5];
console.log(Questions);

// When start button clicked, start countdown function
startBtn.addEventListener("click", function(){
    //instantiate countdown timer
    var quizTimer = 75;

    //quiz timer countdown function
    var countdown = function(){
        //display time remaining on screen
        var timeDisplay = document.querySelector('#headTimer')  
        //decrement remaining time
        quizTimer--;
        if (quizTimer === 0){
            clearInterval(startCountdown);
        }
        timeDisplay.innerHTML = "Time Remaining : " + quizTimer;
    }
    //decrement interval
    var startCountdown = setInterval(countdown, 1000);
})

// When start button clicked, provide questions
startBtn.addEventListener("click", function(){
    //instantiate homeBanner class div element as var, then remove
    var homeBanner = document.querySelector(".homeBanner")
    homeBanner.remove();
    //prompt question from questions array
    var firstQuestion = document.createElement("h1")
    firstQuestion.textContent = "Test";
    firstQuestion.className = "homeBanner"
    homeBanner.appendChild(firstQuestion);
})

