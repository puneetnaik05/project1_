let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

 const userScorePara =document.querySelector("#user-score");
 const compScorepara = document.querySelector("#comp-score");

 
 const genCompChoice =() => {
    const options =["paper","rock", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options [randIdx];
 }
  const drawGame =() => {
    msg.innerText ="Game draw ! Play Again??"
    msg.style.backgroundColor ="#081b31";
  }

  const showWinner =(userWin ,userChoice ,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++
        compScorepara.innerText = compScore;
        msg.innerText =`You Lose!!...${compChoice} beats your  ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
  }

 const playGame =(userChoice) => {
    // generate computer choice 
    const compChoice =genCompChoice();

    if(userChoice === compChoice){
        // draw game 
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scessor , paper
            userWin = compChoice === "paper" ? false : true;
        }else if( userChoice === "paper"){
            // rock , scessors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock ,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin ,userChoice, compChoice);
    }
 };

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });
});
