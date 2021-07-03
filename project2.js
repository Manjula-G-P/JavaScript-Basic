const n=require("readline-sync");
var chances=n.questionInt("how many chances u want");
let randomNumber= Math.floor(Math.random()*10);
for(let i=chances;i>0;i--)
{
    guess_num=n.questionInt("enter a guess number:");
    if (guess_num==randomNumber) 
    {
        console.log("congrats")
        break
    }
    else if (guess_num>randomNumber)
    { 
        console.log("its higher than guess nuber")
    }
    else if (guess_num<randomNumber)
    {
        console.log("its lower than guess number")
    }
    else if (i==1)
    {
        console.log("sadly! u lost the game")
    }
}

