let input = require("readline-sync");
 
var computerMoves = ['rock', 'paper', 'scissor'];
var randomMoveOfComputer = computerMoves[Math.floor(Math.random()*computerMoves.length)];
console.log("computer choosed:",randomMoveOfComputer)
var name=input.question("what is ur name:");
console.log("hi",name)
console.log("choose any move in rock paper secisoor")
var user=input.question("which move u want to do:");

if (user==randomMoveOfComputer){
    console.log("Match Draw")
}
else if (user=="rock" && randomMoveOfComputer=="paper"){
    console.log("Computer won the match")
}
else if (user=="rock" && randomMoveOfComputer=="scissor"){
    console.log(name,"won the match")
}
else if (user=="paper" && randomMoveOfComputer=="rock"){
    console.log(name,"won the match")
}
else if (user=="paper" && randomMoveOfComputer=="scissor"){
    console.log("Computer won the match")
}
else if (user=="scisoor" && randomMoveOfComputer=="paper"){
    console.log(name,"won the match")
}
else if (user=="scissor" && randomMoveOfComputer=="rock"){
    console.log("Computer won the match")
}
