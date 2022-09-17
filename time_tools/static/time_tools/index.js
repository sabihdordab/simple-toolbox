document.addEventListener("DOMContentLoaded",function(){
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0 ;
    let hours = 0 ;
    let millisecondsLBL = document.querySelector('#milliseconds');
    let secondsLBL = document.querySelector('#seconds');
    let minutesLBL = document.querySelector('#minutes');
    let hoursLBL = document.querySelector('#hours');
    let startBTN = document.querySelector('#start');
    let stopBTN = document.querySelector('#stop');
    let resetBTN = document.querySelector('#reset')
    let Interval;

    startBTN.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(timer,1);
    }

    stopBTN.onclick = function() {
        clearInterval(Interval);
    }
   
 
   resetBTN.onclick = function() {
        clearInterval(Interval);
        milliseconds = 0;
        seconds = 0;
        minutes = 0 ;
        hours = 0 ;
        millisecondsLBL.innerHTML = milliseconds;
        secondsLBL.innerHTML = seconds + ":";
        minutesLBL.innerHTML = minutes + ":";
        hoursLBL.innerHTML = hours + ":";
        
   }

   function timer () {
    millisecondsLBL.innerHTML = milliseconds ;
    secondsLBL.innerHTML = seconds + ":";
    minutesLBL.innerHTML = minutes + ":";
    hoursLBL.innerHTML = hours + ":";

    milliseconds++; 
    
    
    if (milliseconds > 1000) {
        milliseconds = 0;
        seconds++;
      
    } 
    
    if (seconds > 60) {
        milliseconds = 0;
        seconds = 0;
        minutes++;
    }
    if (minutes > 60) {
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        hours++;
    }
  
  }
})