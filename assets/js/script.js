let questions = [
    {
        question: "What is the left side of the boat called?",
        option1: "Port", 
        option2: "Starboard",
        option3: "Boom", 
        option4: "Rudder",
        answer: 1
    },

    {
        question: "What is the name of a rope used to hoist a sail?",
        option1: "Bowline", 
        option2: "Sheet",
        option3: "Warp", 
        option4: "Halyard",
        answer: 4
    },

    {
        question: "What colour is the Starboard hand light / mark?",
        option1: "Red", 
        option2: "Green",
        option3: "Yellow", 
        option4: "White",
        answer: 2
    },

     {
        question: "When would you fly a spinnaker?", 
        option1: "Sailing upwind",
        option2: "Sailing downwind", 
        option3: "Sailing across the wind",
        option4: "When motoring",
        answer: 2
     },

     {
        question: "If you see a yacht displaying a black ball in the rigging what does this mean?", 
        option1: "Sailing",
        option2: "Adrift",
        option3: "Anchored",
        option4: "BBQing",
        answer: 3
     },

     {
        question: "Whilst at anchor what lights should a yacht display at night?", 
        option1: "Red & green",
        option2: "All round white", 
        option3: "Flashing white",
        option4: "Flashing red",
        answer: 2
     },

     {
        question: "You are in your boat and see a large container ship which give you 5 short blasts on their horn, what does this mean?",
        option1: "They are turning to Port",
        option2: "They are turning to Satrboard",
        option3: "They would like you to turn to Starboard.", 
        option4: "They are not sure of your intentions and concerned you are going to collide",
        answer: 4
     },

     {
        question: "What is a boat with one mast called?",
        option1: "Sloop",
        option2: "Ketch",
        option3: "Schooner",
        option4: "Yawl",
        answer: 1
     },

     {
        question: "If it is very windy you can make a boats sail smaller, what is this called?", 
        option1: "Reefing",
        option2: "Triming",
        option3: "Tacking",
        option4: "Winching",
        answer: 1
     },

     {
        question: "What is is called when a boat zig-zags in order to sail upwind?", 
        option1: "Gybing",
        option2: "Tacking",
        option3: "Heeling over", 
        option4: "Reefing",
        answer: 2
     }

];




let questionNumber;
let questionCount = 0;




document.addEventListener("DOMContentLoaded", function() {
    
    questionNumber = getAQuestion();
    incrementQuestions()

    let answers = document.getElementsByClassName('choice-container');   
    
    for (let answer of answers) {      
            answer.addEventListener('click', function() {
                let givenAnswer = answer.dataset['number'];  
               
                checkAnswer(givenAnswer, answer);
                
            })
        }
    
    });

 
 function nextQuestion (){

    var resultsModal = document.getElementById("resultsModal");
    console.log(questionCount);
if (questionCount >=2){
    
    resultsModal.style.display = "block";
    let oldScore = parseInt(document.getElementById("score").innerText);
    console.log(oldScore);
    document.getElementById("model-score").innerText = oldScore;
   
}

    
    let answers = document.getElementsByClassName('choice-container');   
    
    for (let answer of answers) { 
     answer.style.backgroundColor = "white";
    }

    incrementQuestions()
    questionCount += 1;
    if(questionCount != 0){
  
        questions.splice(questionNumber, 1);
        
    }
    questionNumber = getAQuestion();
    
}
 
 
 
 function getAQuestion(){

     let x = Math.floor(Math.random() *questions.length);
 
     document.getElementById("question").innerHTML=questions[x].question;
     document.getElementById("choice-text-1").innerHTML=questions[x].option1;
     document.getElementById("choice-text-2").innerHTML=questions[x].option2;
     document.getElementById("choice-text-3").innerHTML=questions[x].option3;
     document.getElementById("choice-text-4").innerHTML=questions[x].option4;
   
     return x;
     
     
     
 };
 
 function checkAnswer(givenAnswer, givenDiv){ 
    
               if (givenAnswer == questions[questionNumber].answer) {

                givenDiv.style.backgroundColor = "#2eff00";
                
                incrementScore();
                
                setTimeout(nextQuestion, 1000);
               
              }
    
              else {
               
               givenDiv.style.backgroundColor = "red";
                setTimeout(nextQuestion, 1000);
              
              };        
};


function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incrementQuestions() {

    let oldCount = parseInt(document.getElementById("question-counter").innerText);
    document.getElementById("question-counter").innerText = ++oldCount;
    return oldCount
    console.log ("old count" + oldCount);
}


// Modal script from W3Schools. 

var modal = document.getElementById("myModal");
var btn = document.getElementById("modalbtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}









