let images = document.querySelectorAll(".images img");
let btn = document.querySelector(".btn");
let reset = document.querySelector(".reset");
let userScore = 0;
let compScore = 0;

// userChoice
Array.from(images).forEach((image)=>{
image.addEventListener("click",()=>{
   let userChoice = image.getAttribute("id");
   checkWin(userChoice)
})
})

// computerchoice
const computerChoice=()=>{
  let  choices = ["Rock" , "Paper" , "Scissors"]
  let i = Math.floor(Math.random()*3) 
  return choices[i];
}

// Draw
function draw(){
  btn.innerText = 'Game is draw'
  btn.style.backgroundColor = '#fdf0d5'
  btn.style.color = '#003049'}

// check win logic
 const checkWin = (userChoice)=>{
  let compChoice = computerChoice();
  if(userChoice === compChoice){
    draw()
  }
  else{
    let userWin = true;
    if (userChoice === 'Rock'){
    userWin = compChoice === 'Paper'?false:true;
    }else if (userChoice === 'Paper'){
    userWin = compChoice === 'Rock'?true:false;
    }else{//scissors
      userWin = compChoice === 'Rock'?false:true;
    }
    playGame(userWin,userChoice,compChoice)
  }
 }

//  Play Game
 function playGame(userWin,userChoice,compChoice){
if (userWin){
userScore++;
btn.innerText = `You won! your ${userChoice} beats ${compChoice}`;
btn.style.backgroundColor = 'green';
btn.style.color = '#fff'
document.querySelector('#user').innerText = userScore;
}else{
  compScore++;
  btn.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
  btn.style.backgroundColor = 'red'
  btn.style.color = '#fff'
  document.querySelector('#computer').innerText = compScore;
}
 }
 
//  Reset
reset.addEventListener('click',()=>{
  btn.innerText = 'Game is draw';
  btn.style.backgroundColor = '#fdf0d5';
  btn.style.color = '#003049';
  userScore = 0;
  compScore = 0;
  document.querySelector('#user').innerText = userScore;
  document.querySelector('#computer').innerText = compScore;
})














































































 
  




