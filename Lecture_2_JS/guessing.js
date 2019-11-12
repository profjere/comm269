let newNum=Math.floor(Math.random()*100)+1;
theAnswer=document.getElementById('theResponse');

var timeID = setTimeout(endingTime,20000);


const theButton=document.getElementById('mySubmit');
theButton.addEventListener('click', function(e){   
   e.preventDefault();    
    guessNumber();}, false);

function guessNumber(){
    var theValueOfTheForm = document.getElementById("myGuess").value;
    if (theValueOfTheForm>newNum){
    
       theAnswer.innerHTML = "too high"; 
    } else if (theValueOfTheForm<newNum){
        theAnswer.innerHTML = "too low"; 
     
    } else {
        theAnswer.innerHTML = "you win"; 
    }

}

function endingTime(){
    theAnswer.innerHTML = "You took too long.  You lose."; 
}