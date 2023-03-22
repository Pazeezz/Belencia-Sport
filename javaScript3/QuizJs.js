window.addEventListener("load", myInit, true); function myInit(){
    timer();
    timeoutAlert();
}

var timeElapsed = 0;
var myTimer = 0;

//This function starts the timer right after the QuizPage finished loading.
function timer() {
    myTimer = setInterval(function(){
        timeElapsed += 1;
        document.getElementById("time").innerText = 60-timeElapsed;
    }, 1000) ;

}

// This function shows an alert to the user after 60 Seconds.
var endAlert;
function timeoutAlert(){
    endAlert=setTimeout(function (){stop();alert("Times Up! Check Your Score");displayResults() ;},60000);
    
}


// After 60 Secs, timer stops and submit button will be disabled.
function stop() {
    clearInterval(myTimer);
    document.getElementById("submitBTN").disabled = true;
}

// Declaring variables.
var totalScore;
var correctScore=0;
var incorrectScore=0;
var result=[];
var output;

// This function returns the value of the selected answer.
function getRadioValue( radioArray ) {
	var i;
	for ( i = 0; i < radioArray.length; i++ ) {
		if ( radioArray[ i ].checked ) { 
			return radioArray[ i ].value;
		}
	}
	return "";
}

function displayResults(){
          //Comparing the selected answers with correct answers.
          if (getRadioValue(document.quiz.q1)==2){
              correctScore+=2;
              result[0]="correct";
          }
          else{
             incorrectScore+=1;
             result[0]="incorrect";
          }
		   if (getRadioValue(document.quiz.q2)==3){
              correctScore+=2;
              result[1]="correct";
          }
          else{
             incorrectScore+=1;
             result[1]="incorrect";
          }
		            if (getRadioValue(document.quiz.q3)==3){
              correctScore+=2;
              result[2]="correct";
          }
          else{
             incorrectScore+=1;
             result[2]="incorrect";
          }
		            if (getRadioValue(document.quiz.q4)==1){
              correctScore+=2;
              result[3]="correct";
          }
          else{
             incorrectScore+=1;
             result[3]="incorrect";
          }
		            if (getRadioValue(document.quiz.q5)==3){
              correctScore+=2;
              result[4]="correct";
          }
          else{
             incorrectScore+=1;
             result[4]="incorrect";
          }
		  if (getRadioValue(document.quiz.q6)==2){
              correctScore+=2;
              result[5]="correct";
          }
          else{
             incorrectScore+=1;
             result[5]="incorrect";
          }
		  if (getRadioValue(document.quiz.q7)==4){
              correctScore+=2;
              result[6]="correct";
          }
          else{
             incorrectScore+=1;
             result[6]="incorrect";
          }
          if (getRadioValue(document.quiz.q8)==1){
              correctScore+=2;
              result[7]="correct";
          }
          else{
             incorrectScore+=1;
             result[7]="incorrect";
          }		  
          if (getRadioValue(document.quiz.q9)==2){
              correctScore+=2;
              result[8]="correct";
          }
          else{
             incorrectScore+=1;
             result[8]="incorrect";
          }	
          if (getRadioValue(document.quiz.q10)==4){
              correctScore+=2;
              result[9]="correct";
          }
          else{
             incorrectScore+=1;
             result[9]="incorrect";
          }	 
	 	
    totalScore = correctScore - incorrectScore;
	displayScore();
}

function displayScore(){	
output=" Score : " + totalScore;

var q1 = "Question 1 :  " + result[0];
var q2 = "Question 2 :  " + result[1];
var q3 = "Question 3 :  " + result[2];
var q4 = "Question 4 :  " + result[3];
var q5 = "Question 5 :  " + result[4];
var q6 = "Question 6 :  " + result[5];
var q7 = "Question 7 :  " + result[6];
var q8 = "Question 8 :  " + result[7];
var q9 = "Question 9 :  " + result[8];
var q10 = "Question 10 :" + result[9];

var y = document.getElementById("endDisplay");
  y.style.display = "block";
  
var timeCount = "Time you have taken : " + timeElapsed + " Seconds "; 

//Displaying which answers were correct or incorrect.
document.getElementById("endDisplay").innerHTML="<span>" + output + "</span><br><span>" +timeCount+ "</span><br><br><span>" + q1 + "</span><br><span>" + q2 + 
"</span><br><span>" + q3 + "</span><br><span>" + q4 + "</span><br><span>" + q5 + "</span><br><span>" + q6 + "</span><br><span>" + q7 + "</span><br><span>" + 
q8 + "</span><br><span>" + q9 + "</span><br><span>" + q10 + "</span><br>";

//Background color change according to the totatScore.
if (totalScore > 10){
document.getElementById("colorChange").style.backgroundColor="#125B50";
}
else if (totalScore > 4){
document.getElementById("colorChange").style.backgroundColor="#242F9B";
}
else if (totalScore > 0){
document.getElementById("colorChange").style.backgroundColor="#810955";
}
else {
document.getElementById("colorChange").style.backgroundColor="red";
}
}

//This function stops the time and display the results
function endQuiz(){
clearTimeout(endAlert);
displayResults();

}

// Submit button will be disabled after user click on it.
function submitOnce () {
    document.getElementById("submitBTN").disabled = true;
}

// Back to top button will be visible to user after a 20 pixel scroll from top. 
let topBtn = document.getElementById("toTop");
window.onscroll = function() {screenScroll()};
function screenScroll(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    topBtn.style.display = "block";
  }else{
    topBtn.style.display = "none";
  }
}

function topClick(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  console.log("Clicked")
}
