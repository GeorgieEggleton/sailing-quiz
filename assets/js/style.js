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

console.log(questions);


document.addEventListener("DOMContentLoaded", function() {
   let questionAnswer = getAQuestion();
   checkAnswer(questionAnswer);
})




function getAQuestion(){
    
    let x = Math.floor(Math.random() *questions.length);

    document.getElementById("question").innerHTML=questions[x].question;
    document.getElementById("choice-text-1").innerHTML=questions[x].option1;
    document.getElementById("choice-text-2").innerHTML=questions[x].option2;
    document.getElementById("choice-text-3").innerHTML=questions[x].option3;
    document.getElementById("choice-text-4").innerHTML=questions[x].option4;
    return questions[x].answer;
    questions.splice(x); 
    
};

