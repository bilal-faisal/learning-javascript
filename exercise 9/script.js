var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var num = document.getElementById("num");
var input = document.getElementById("input");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var scoreP1=0;
var scoreP2=0;
var maxScore = 5;
var won=false;

btn1.addEventListener("click" , function(){
    if(scoreP1<maxScore){
        scoreP1++;
    }
    if(!won){
        p1.innerText = scoreP1;
        if(scoreP1===maxScore){
            p1.classList.add("changeColor");
            won = true;
        }
    }
});

btn2.addEventListener("click" , function(){
    if(scoreP2<maxScore){
        scoreP2++;
    }
        if(!won){
        p2.innerText = scoreP2;
        if(scoreP2===maxScore){
            p2.classList.add("changeColor");
            won = true;
        }
    }
});

btn3.addEventListener("click" , function(){
    scoreP1=0;
    scoreP2=0;
    p1.innerText = scoreP1;
    p2.innerText = scoreP2;
    p1.classList.remove("changeColor");
    p2.classList.remove("changeColor");
    won = false;
});

input.addEventListener("change" , function(){
    if(Number(input.value) >= Number(p1.innerText) && Number(input.value) >= Number(p2.innerText)  ){
        scoreP1 = Number(p1.innerText);
        scoreP2 = Number(p2.innerText);
        maxScore = Number(input.value);
        num.innerText = maxScore;
        if(won=true){
            won=false;
            p1.classList.remove("changeColor");
            p2.classList.remove("changeColor");
        }
    }else{
        inputChange();
    }
});


function inputChange(){
    scoreP1=0;
    scoreP2=0;
    p1.innerText = scoreP1;
    p2.innerText = scoreP2;
    p1.classList.remove("changeColor");
    p2.classList.remove("changeColor");
    won = false;
    maxScore = Number(input.value);
    num.innerText = maxScore;
}