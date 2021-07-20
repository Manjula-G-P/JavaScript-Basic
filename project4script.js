function chnageColor(){
    var con=document.getElementById("container1");
    var inputbox=document.getElementById("input1");
    con.style.backgroundColor=inputbox.value;
    inputbox.value=null;
}