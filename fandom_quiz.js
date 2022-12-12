var readlinesync = require('readline-sync');
var user_name= readlinesync.question("Please tell us your name: ");
console.log("Hello "+ user_name + "hope you are fine !");
console.log("Wellcome to the FANDOM QUIZ")
console.log("-------------------")

console.log("Level ONE");

var score =0;

function quiz(question, answer) {
var user_ans = readlinesync.question(question);
  if (user_ans==answer){
    console.log("you are right");
    score= score+1;
  }
  else{
    console.log("you are wrong");
    score =score-1;
  } 
  if (score==2){
    console.log("Level TWO");
    console.log("-------------------")

  }
  if(score==5){
   console.log("Level THREE");
  console.log("-------------------")

  }
  if(score==10){
    console.log("Level FOUR");
  console.log("-------------------")

  }
  if(score=12){
    console.lof("You won!!!!!");
    console.log("-------------------")

  }
}


var load =quiz("Who is the Prime Minister of India? ","Shri Narendra Modi");

var load =quiz("who is the CM of MP ", "Shri Shivraj Singh");

var load =quiz("which is the largest state in India ", "Uttar Pradesh");

var load =quiz("Entomology is the science that studies ", "Insects");

var load =quiz("Eritrea, which became the 182nd member of the UN in 1993, is in the continent of ", "Africa");

var load =quiz("Garampani sanctuary is located at ", "Assam");

var load =quiz("Hitler party which came into power in 1933 is known as ", "Nazi Party");

var load =quiz("FFC stands for ", "Film Finance Corporation");

var load =quiz("Fastest shorthand writer was ", "Dr. G. D. Bist");

var load =quiz("Epsom (England) is the place associated with ", "Horse racing");

var load =quiz("First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in ", "1967");

console.log("Your score is " + score);

