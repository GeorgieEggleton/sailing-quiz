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




let questionNumber;
let questionCount = 0;




document.addEventListener("DOMContentLoaded", function() {
    
    questionNumber = getAQuestion();



    let answers = document.getElementsByClassName('choice-container');
      
    
    for (let answer of answers) {      
            answer.addEventListener('click', function() {
                let givenAnswer = answer.dataset['number'];      
               
                checkAnswer(givenAnswer);
                
            })
        }
    
    });

 
 function nextQuestion (){
    console.log("Question Count = " + questionCount); 
    questionCount += 1;
    if(questionCount != 0){
      console.log("question Number= " + questionNumber);
        questions.splice(questionNumber, 1);
        console.log(questions);
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
 
 function checkAnswer(givenAnswer){ 
    
               if (givenAnswer == questions[questionNumber].answer) {
                alert ("Correct");
                
                
                setTimeout(nextQuestion, 1000);
               
              }
    
              else {
                alert ("incorrect");
                setTimeout(nextQuestion, 1000);
              
              };
                
                
            
};
       