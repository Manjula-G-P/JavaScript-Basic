const n=require("readline-sync");
var num=n.questionInt("enter a num:");
var c=0;
for (i=2;i<=num;i++)
{
    if (num%i==0)
    {
        c=c+1
    }
}
if (c===1)
{
    console.log(num,"is a prime");
}
else
{
    console.log(num,"is not a prime")
}
