// const n=require("readline-sync");
// var c_a=n.questionInt("enter a num:")
// e_c=95+c_a                            //here from 95 is the starting chr in ascii
// var i=95;
// while (i<=e_c)
// {
//     console.log(chr(i),end="")
// }
// i++;

let n=require("readline-sync");
let choose_ascii=(n.question("enter number: "));
var ascii_char=95+choose_ascii
for (var i=95;i<=ascii_char;i++) {
       console.log(chr(i),end="")
}
 
