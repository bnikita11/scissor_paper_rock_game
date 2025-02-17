let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");



const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";



    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose!  ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor="red";


    }
};


const drawGame=()=>{
    //console.log("Game was draw");
    msg.innerText="Game was draw.Play Again.";
    msg.style.backgroundColor="#081b31";
}

const genCompChoice=()=>{
    const options=["scissor","paper","rock"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
    //generate computer choices
    const compChoice=genCompChoice();
    console.log("compChoice=",compChoice);

    if(userChoice===compChoice)
    {
        //draw game
        drawGame();
    }
    else {
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin=compChoice==="paper"? false: true;
        }
        else if(userChoice==="paper")
            {//rock,scissor
                userWin=compChoice==="scissor"? false :true; 

        }
        else{//rock,paper
            userWin=compChoice==="rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }






}

choices.forEach((choice)=>{

    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
})