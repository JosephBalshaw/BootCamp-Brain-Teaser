const startingMinutes = 1;
let time =startingMinutes * 60;
var countDownEl = document.getElementById("countDown");
var hSArray = {
    name:[],
    score:[],
};

function updateCountDown() {// Creating a count down timer
    var minutes = Math.floor(time/60);//rounding down the fraction to get a whole number
    let seconds = time % 60;//getting the number of seconds left from the number of minutes
    seconds = seconds < 10 ? '0' + seconds: seconds;
    countDownEl.innerHTML = `${minutes}: ${seconds}`;//updating the time displayed in the HTML
    var penalty = localStorage.getItem("penalty");//getting the penatly from the wrong answer from loacl storage
    time = time - penalty;
    localStorage.removeItem('penalty');// applying penatly
    time--;
    if (time <= 0){ //creates a timeout 
        countDownEl.innerHTML = "TIMES UP";
        setTimeout(function(){
        location.href = "./Quiz-highscores-index.html";//moves the page to the highscores HTML
        localStorage.setItem('score', 0); 
        }, 1000);
           
    }
}

const questions = {// nested object of first second and third questions
    first: {
        question: 'What is the difference between a const and a var element?',
        choice1: 'They are the same',
        choice2: 'The var can be changed and the const cant',
        choice3: 'The const can be changed and the var cant',
        choice4: 'none of the above',
        answer: 2,
    },
    second: {
    
        question: 'What does CSS stand for?',
        choice1: 'Cascading Style Sheet',
        choice2: 'Content Style Sheet',
        choice3: 'Constent Sheet Slide',
        choice4: 'Cattle Sling Shot',
        answer: 1,
    },
    third: {
        question: 'What does the DOM stand for?',
        choice1: 'Direct Orignal Module',
        choice2: 'Data Origin Model',
        choice3: 'Document Object Model',
        choice4: 'Dogs Orbit Mars',
        answer: 3
    }
}

function question1() { //First question
    var q1q = document.getElementById("question");//assigning HTML elements to varibles in the function
    var q1c1 = document.getElementById("choice-1");
    var q1c2 = document.getElementById("choice-2");
    var q1c3 = document.getElementById("choice-3");
    var q1c4 = document.getElementById("choice-4");
    var answerStatus = document.getElementById("answer-status")
    q1q.innerText = questions.first.question; //Setting the variables to be their relevent id in the array
    q1c1.innerText = questions.first.choice1;
    q1c2.innerText = questions.first.choice2;
    q1c3.innerText = questions.first.choice3;
    q1c4.innerText = questions.first.choice4;


    document.querySelector('#myButton1').onclick = function() {
        localStorage.setItem("penalty", 5)
        answerStatus.innerText = "Wrong!";  //displays whether the anwser is wrong or right         
    }
    document.querySelector('#myButton2').onclick = function() {        
        answerStatus.innerText = "Correct!"; //displays whether the anwser is wrong or right         
        question2();                             
    } 
    document.querySelector('#myButton3').onclick = function() {
        localStorage.setItem("penalty", 5)
        answerStatus.innerText = "Wrong!";//displays whether the anwser is wrong or right         
    }    
    document.querySelector('#myButton4').onclick = function() {
        localStorage.setItem("penalty", 5)
        answerStatus.innerText = "Wrong!";//displays whether the anwser is wrong or right       
    }       
}

function question2() {
    var q1q = document.getElementById("question");
    var q1c1 = document.getElementById("choice-1");
    var q1c2 = document.getElementById("choice-2");
    var q1c3 = document.getElementById("choice-3");
    var q1c4 = document.getElementById("choice-4");
    var answerStatus = document.getElementById("answer-status")
    q1q.innerText = questions.second.question;
    q1c1.innerText = questions.second.choice1;
    q1c2.innerText = questions.second.choice2;
    q1c3.innerText = questions.second.choice3;
    q1c4.innerText = questions.second.choice4;

    document.querySelector('#myButton1').onclick = function() {
        answerStatus.innerText = "Correct!";
        question3();                           
    }
    document.querySelector('#myButton2').onclick = function() {        
        localStorage.setItem("penalty", 5)
        answerStatus.innerText = "Wrong!";       
    }    
    document.querySelector('#myButton3').onclick = function() {
        localStorage.setItem("penalty", 5)
        answerStatus.innerText = "Wrong!";           
    }    
    document.querySelector('#myButton4').onclick = function() {
        localStorage.setItem("penalty", 5)
        answerStatus.innerText = "Wrong!";           
    }
}

function question3() {
    var q1q = document.getElementById("question");
    var q1c1 = document.getElementById("choice-1");
    var q1c2 = document.getElementById("choice-2");
    var q1c3 = document.getElementById("choice-3");
    var q1c4 = document.getElementById("choice-4");
    var answerStatus = document.getElementById("answer-status")
    q1q.innerText = questions.third.question;
    q1c1.innerText = questions.third.choice1;
    q1c2.innerText = questions.third.choice2;
    q1c3.innerText = questions.third.choice3;
    q1c4.innerText = questions.third.choice4;

    document.querySelector('#myButton1').onclick = function() {
        localStorage.setItem("penalty", 5)
        answerStatus.innerText = "Wrong!";                                   
    }
    document.querySelector('#myButton2').onclick = function() {        
        localStorage.setItem("penalty", 5)
        answerStatus.innerText = "Wrong!";       
    }    
    document.querySelector('#myButton3').onclick = function() {
        answerStatus.innerText = "Correct!";
        location.href = "./Quiz-highscores-index.html";
        hSArray.score.push(time);
        localStorage.setItem("score", JSON.stringify(hSArray));        
        //localStorage.setItem('score', time);                   
    }    
    document.querySelector('#myButton4').onclick = function() {
        localStorage.setItem("penalty", 5)
        answerStatus.innerText = "Wrong!";           
    }    
}

setInterval(updateCountDown, 1000);
question1();



