

function diceLeft(){

    var randomNumber1 = Math.floor(Math.random()*6)+1;
    console.log(randomNumber1);
    
    if(randomNumber1===1){
        document.querySelector("img").setAttribute("src","./images/dice1.png");
    }else if(randomNumber1===2){
        document.querySelector("img").setAttribute("src","./images/dice2.png");
    }else if(randomNumber1===3){
        document.querySelector("img").setAttribute("src","./images/dice3.png");
    }else if(randomNumber1===4){
        document.querySelector("img").setAttribute("src","./images/dice4.png");
    }else if(randomNumber1===5){
        document.querySelector("img").setAttribute("src","./images/dice5.png");
    } else{
         document.querySelector("img").setAttribute("src","./images/dice6.png");
    }
    return randomNumber1;
}
function diceRight(){

    var randomNumber2 = Math.floor(Math.random()*6)+1;
    console.log(randomNumber2);
    
    
    if(randomNumber2===1){
        document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
    }else if(randomNumber2===2){
        document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
    }else if(randomNumber2===3){
        document.querySelector("img.img2").setAttribute("src","./images/dice3.png");
    }else if(randomNumber2===4){
        document.querySelector("img.img2").setAttribute("src","./images/dice4.png");
    }else if(randomNumber2===5){
        document.querySelector("img.img2").setAttribute("src","./images/dice5.png");
    } else{
         document.querySelector("img.img2").setAttribute("src","./images/dice6.png");
    }
    return randomNumber2;
}

// we can use function inside a function to call 

    function winningMoment(){
           
        
        if(diceLeft() > diceRight()){
            document.querySelector("h1").innerHTML = " 🚩Player 1 wins";
        }else if(diceLeft() < diceRight()){
            document.querySelector("h1").innerHTML = "Player 2 wins🚩";
        }else if(diceLeft()==diceRight()){
            document.querySelector("h1").innerHTML = "🟰Draw!!";
        }
}

    



