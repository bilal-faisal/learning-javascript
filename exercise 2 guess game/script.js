const num = 69;
do{
    var guess = Number(prompt("Guess the Number"));

    if( guess === num ){
        console.log("Congrats! You Got It.")
    }
    else if(guess >= (num+10)){
        console.log("Too High");
    }
    else if(guess <= (num-10)){
        console.log("Too Low");
    }
    else if(guess > num && guess < (num+10)){
        console.log("A little bit lower than " + guess );
    }
    else if(guess < num && guess > (num-10)){
        console.log("A little bit higher than " + guess );
    }
}while(guess != 69);