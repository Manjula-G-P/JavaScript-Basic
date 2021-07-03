const n=require("readline-sync");
var name=n.question("enter a name:");
const store=name;
var str=""
for ( let i=(name.length)-1;i>=0;i--)
{
    str=str+name[i];
}
if (store===str)
{
    console.log("palindrome")
}
else
{
    console.log("not a palindrome")
}

// console.log(-(name.length))
