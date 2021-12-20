// instantiate start button variable 
var startBtn = document.querySelector("#start-btn");
// console.log(startBtn);

//instantiate countdown timer
var quizTimer = 75;

//instantiate current score count
var curScore = 0;

// instantiate high score count
var highScore = localStorage.highScore;

// display high scores when upper left button clicked
var highScoreHome = document.querySelector("#highScoresHome");
    highScoreHome.addEventListener("click", function (){
    let element = document.getElementById("mainEl");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    var displayHighScore = document.createElement("h1");
    displayHighScore.textContent = "Your highest score is " + highScore;
    displayHighScore.className = "homeBanner";
    mainEl.appendChild(displayHighScore);
    var returnStart = document.createElement("button")
        returnStart.className = "homeBanner questionBtn";
        returnStart.id = "returnStartBtn"
        returnStart.textContent = "Play again?";
        displayHighScore.appendChild(returnStart);
        var returnStartBtn = document.querySelector("#returnStartBtn")
        returnStartBtn.addEventListener("click", function(){
            console.log("returnStartBtn clicked!")
            document.location.reload();
        })
    

})

// define game over function
function gameOver(){
    //clear children of mainEl 
    let element = document.getElementById("mainEl");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    //add game over values
    var allDone = document.createElement("h1");
    allDone.textContent = "All done!";
    allDone.className = "homeBanner";
    mainEl.appendChild(allDone);

    var finalScore = document.createElement("p");
    finalScore.textContent ="Your final score is " + curScore + ".";
    finalScore.className = "homeBanner";
    allDone.appendChild(finalScore);

    var scoreEntryText = document.createElement("p");
    scoreEntryText.textContent = "Enter Initials : ";
    scoreEntryText.className = "homeBanner";
    finalScore.appendChild(scoreEntryText);

    var scoreEntry = document.createElement("input")
    // scoreEntry.textContent = "";
    scoreEntry.id = "scoreEntry"
    scoreEntry.className = "homeBanner";
    finalScore.appendChild(scoreEntry);

    var scoreEntrySubmit = document.createElement("Button");
    scoreEntrySubmit.textContent = "Submit";
    scoreEntrySubmit.id = "scoreSubmitBtn"
    scoreEntrySubmit.className = "homeBanner questionBtn";
    finalScore.appendChild(scoreEntrySubmit);

    var scoreSubmitButton = document.querySelector("#scoreSubmitBtn");
    scoreSubmitButton.addEventListener("click", function(){
        var userInitial = document.getElementById("scoreEntry").value;
        console.log(userInitial);
        localStorage.setItem("highScore", userInitial + " - " + curScore);
        while (element.firstChild) {
            element.removeChild(element.firstChild);
          }
        var highScoreHeader = document.createElement("h1");
        highScoreHeader.className = "homeBanner";
        highScoreHeader.textContent = "Your High Score is : ";
        mainEl.appendChild(highScoreHeader);
        var highScoreValue = document.createElement("p");
        highScoreValue.textContent = highScore;
        highScoreValue.className = "homeBanner";
        highScoreHeader.appendChild(highScoreValue);
        var returnStart = document.createElement("button")
        returnStart.className = "homeBanner questionBtn";
        returnStart.id = "returnStartBtn"
        returnStart.textContent = "Play again?";
        highScoreValue.appendChild(returnStart);
        var returnStartBtn = document.querySelector("#returnStartBtn")
        returnStartBtn.addEventListener("click", function(){
            console.log("returnStartBtn clicked!")
            document.location.reload();
        })
    })

}

// When start button clicked, start countdown function
startBtn.addEventListener("click", function(){

    //quiz timer countdown function
    var countdown = function(){
        //display time remaining on screen
        var timeDisplay = document.querySelector('#headTimer')  
        //decrement remaining time
        quizTimer--;
        if (quizTimer === 0){
            clearInterval(startCountdown);
        };
        timeDisplay.innerHTML = "Time Remaining : " + quizTimer;
        if (quizTimer <= 0){
            gameOver();
        }
    }
    //decrement interval
    var startCountdown = setInterval(countdown, 1000);
})

// instantiate main element as var
var mainEl = document.querySelector("#mainEl");

// When start button clicked, provide questions
startBtn.addEventListener("click", function(){
    //instantiate homeBanner class div element as var, then remove
    var homeBanner = document.querySelector(".homeBanner");
    homeBanner.remove();

    //prompt question 1
    
    var firstQuestion = document.createElement("h1");
    firstQuestion.textContent = "Commonly used data types DO NOT include:";
    firstQuestion.className = "homeBanner";
    mainEl.appendChild(firstQuestion);
   

    var firstQuestionBtnA = document.createElement("button");
    firstQuestionBtnA.textContent = "1. Strings";
    firstQuestionBtnA.className = "homeBanner questionBtn";
    firstQuestion.appendChild(firstQuestionBtnA);
    firstQuestionBtnA.addEventListener("click", function(){
        quizTimer -= 10;
    });

    var firstQuestionBtnB = document.createElement("button");
    firstQuestionBtnB.textContent = "2. Booleans";
    firstQuestionBtnB.className = "homeBanner questionBtn";
    firstQuestion.appendChild(firstQuestionBtnB);
    firstQuestionBtnB.addEventListener("click", function(){
        quizTimer -= 10;
    });

    var firstQuestionBtnC = document.createElement("button");
    firstQuestionBtnC.textContent = "3. Alerts";
    firstQuestionBtnC.className = "homeBanner questionBtn";
    firstQuestion.appendChild(firstQuestionBtnC);
    firstQuestionBtnC.addEventListener("click", function(){
        console.log("Correct!");
        curScore += 10;
        firstQuestion.remove();

        // Prompt question 2 
    
        var secondQuestion = document.createElement("h1");
        secondQuestion.textContent = "The condition in an if / else statement is enclosed with  _____:";
        secondQuestion.className = "homeBanner";
        mainEl.appendChild(secondQuestion);

        var secondQuestionBtnA = document.createElement("button");
        secondQuestionBtnA.textContent = "1. Quotes";
        secondQuestionBtnA.className = "homeBanner questionBtn";
        secondQuestion.appendChild(secondQuestionBtnA);
        secondQuestionBtnA.addEventListener("click", function(){
            quizTimer -= 10;
        })

        var secondQuestionBtnB = document.createElement("button");
        secondQuestionBtnB.textContent = "2. Curly brackets";
        secondQuestionBtnB.className = "homeBanner questionBtn";
        secondQuestion.appendChild(secondQuestionBtnB);
        secondQuestionBtnB.addEventListener("click", function(){
            quizTimer -= 10;
        })

        var secondQuestionBtnC = document.createElement("button");
        secondQuestionBtnC.textContent = "3. Parenthesis";
        secondQuestionBtnC.className = "homeBanner questionBtn";
        secondQuestion.appendChild(secondQuestionBtnC);
        secondQuestionBtnC.addEventListener("click", function(){
            console.log("Correct!");
            curScore += 10;
            secondQuestion.remove();

            //Prompt Question 3 
    
                var thirdQuestion = document.createElement("h1");
                thirdQuestion.textContent = "Arrays in JavaScript can be used to store _____:";
                thirdQuestion.className = "homeBanner";
                mainEl.appendChild(thirdQuestion);

                var thirdQuestionBtnA = document.createElement("button");
                thirdQuestionBtnA.textContent = "1. Numbers and strings";
                thirdQuestionBtnA.className = "homeBanner questionBtn";
                thirdQuestion.appendChild(thirdQuestionBtnA);
                thirdQuestionBtnA.addEventListener("click", function(){
                    quizTimer -= 10;
                })

                var thirdQuestionBtnB = document.createElement("button");
                thirdQuestionBtnB.textContent = "2. Other arrays";
                thirdQuestionBtnB.className = "homeBanner questionBtn";
                thirdQuestion.appendChild(thirdQuestionBtnB);
                thirdQuestionBtnB.addEventListener("click", function(){
                    quizTimer -= 10;
                })

                var thirdQuestionBtnC = document.createElement("button");
                thirdQuestionBtnC.textContent = "3. Booleans";
                thirdQuestionBtnC.className = "homeBanner questionBtn";
                thirdQuestion.appendChild(thirdQuestionBtnC);
                thirdQuestionBtnC.addEventListener("click", function(){
                    quizTimer -= 10;
                })

                var thirdQuestionBtnD = document.createElement("button");
                thirdQuestionBtnD.textContent = "4. All of the above";
                thirdQuestionBtnD.className = "homeBanner questionBtn";
                thirdQuestion.appendChild(thirdQuestionBtnD);
                thirdQuestionBtnD.addEventListener("click", function(){
                    console.log("Correct!");
                    curScore += 10;
                    thirdQuestion.remove();
                    
                    //Prompt Question 4 
    
                        var fourthQuestion = document.createElement("h1");
                        fourthQuestion.textContent = "String values must be enclosed within _____ when being assigned to variables";
                        fourthQuestion.className = "homeBanner";
                        mainEl.appendChild(fourthQuestion);

                        var fourthQuestionBtnA = document.createElement("button");
                        fourthQuestionBtnA.textContent = "1. Commas";
                        fourthQuestionBtnA.className = "homeBanner questionBtn";
                        fourthQuestion.appendChild(fourthQuestionBtnA);
                        fourthQuestionBtnA.addEventListener("click", function(){
                            quizTimer -= 10;
                        })

                        var fourthQuestionBtnB = document.createElement("button");
                        fourthQuestionBtnB.textContent = "2. Curly brackets";
                        fourthQuestionBtnB.className = "homeBanner questionBtn";
                        fourthQuestion.appendChild(fourthQuestionBtnB);
                        fourthQuestionBtnB.addEventListener("click", function(){
                            quizTimer -= 10;
                        })

                        var fourthQuestionBtnC = document.createElement("button");
                        fourthQuestionBtnC.textContent = "3. Quotes";
                        fourthQuestionBtnC.className = "homeBanner questionBtn";
                        fourthQuestion.appendChild(fourthQuestionBtnC);
                        fourthQuestionBtnC.addEventListener("click", function(){
                            console.log("Correct!");
                            curScore += 10;
                            fourthQuestion.remove();

                                //Prompt Question 5
        
                            var fifthQuestion = document.createElement("h1");
                            fifthQuestion.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
                            fifthQuestion.className = "homeBanner";
                            mainEl.appendChild(fifthQuestion);

                            var fifthQuestionBtnA = document.createElement("button");
                            fifthQuestionBtnA.textContent = "1. JavaScript";
                            fifthQuestionBtnA.className = "homeBanner questionBtn";
                            fifthQuestion.appendChild(fifthQuestionBtnA);
                            fifthQuestionBtnA.addEventListener("click", function(){
                                quizTimer -= 10;
                            })

                            var fifthQuestionBtnB = document.createElement("button");
                            fifthQuestionBtnB.textContent = "2. Terminal/bash";
                            fifthQuestionBtnB.className = "homeBanner questionBtn";
                            fifthQuestion.appendChild(fifthQuestionBtnB);
                            fifthQuestionBtnB.addEventListener("click", function(){
                                quizTimer -= 10;
                            })

                            var fifthQuestionBtnC = document.createElement("button");
                            fifthQuestionBtnC.textContent = "3. For loops";
                            fifthQuestionBtnC.className = "homeBanner questionBtn";
                            fifthQuestion.appendChild(fifthQuestionBtnC);
                            fifthQuestionBtnC.addEventListener("click", function(){
                                quizTimer -= 10;
                            })

                            var fifthQuestionBtnD = document.createElement("button");
                            fifthQuestionBtnD.textContent = "4. Console.log";
                            fifthQuestionBtnD.className = "homeBanner questionBtn";
                            fifthQuestion.appendChild(fifthQuestionBtnD);
                            fifthQuestionBtnD.addEventListener("click", function(){
                                console.log("Correct!");
                                curScore += 10;
                                fifthQuestion.remove();
                                quizTimer = 1;
                                gameOver();
                            })

                        })

                        var fourthQuestionBtnD = document.createElement("button");
                        fourthQuestionBtnD.textContent = "4. Parenthesis";
                        fourthQuestionBtnD.className = "homeBanner questionBtn";
                        fourthQuestion.appendChild(fourthQuestionBtnD);
                        fourthQuestionBtnD.addEventListener("click", function(){
                            quizTimer -= 10;

                        })

                })
        })

        var secondQuestionBtnD = document.createElement("button");
        secondQuestionBtnD.textContent = "4. Square brackets";
        secondQuestionBtnD.className = "homeBanner questionBtn";
        secondQuestion.appendChild(secondQuestionBtnD);
        secondQuestionBtnD.addEventListener("click", function(){
            quizTimer -= 10;

        })

    })

    var firstQuestionBtnD = document.createElement("button");
    firstQuestionBtnD.textContent = "4. Numbers";
    firstQuestionBtnD.className = "homeBanner questionBtn";
    firstQuestion.appendChild(firstQuestionBtnD);
    firstQuestionBtnD.addEventListener("click", function(){
        quizTimer -= 10;
    })

})
