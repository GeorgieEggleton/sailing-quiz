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
];





function delay(time){
    return new Promise(resolve => setTimeout(resolve, time));
}
document.addEventListener("DOMContentLoaded", function() {
    nextQuestion();
 })
 
 function nextQuestion (){
    console.log("In function NextQuestion")
    let questionAnswer = getAQuestion();
    console.log("questionAnswer" + questionAnswer);
    checkAnswer(questionAnswer);
}
 
 
 
 function getAQuestion(){
    console.log("In function GetAQuestion")
     let x = Math.floor(Math.random() *questions.length);
 
     document.getElementById("question").innerHTML=questions[x].question;
     document.getElementById("choice-text-1").innerHTML=questions[x].option1;
     document.getElementById("choice-text-2").innerHTML=questions[x].option2;
     document.getElementById("choice-text-3").innerHTML=questions[x].option3;
     document.getElementById("choice-text-4").innerHTML=questions[x].option4;
     return questions[x].answer;
     
     
 };
 
 function checkAnswer(realAnswer){ 
    console.log("In function checkAnswer")
    console.log("realAnswer no 1 " + realAnswer);
    let answers = document.getElementsByClassName('choice-container');
        for (let answer of answers) {      
            answer.addEventListener('click', function() {
                console.log("realAnswer no 2 " + realAnswer);
                console.log("buttonpress" + answer.dataset['number']);
                
         
               givenAnswer = answer.dataset['number'];       
               
               if (givenAnswer == realAnswer) {
    
                alert ("Correct");
                delay(1000).then(() => nextQuestion());
              }
    
              else {
                alert ("incorrect");
                delay(1000).then(() => nextQuestion());
              };
                
                
            })
        };
       
}; 
