var RandomNum = Math.floor(Math.random()*6)+1;
var replace = "./images/dice"+RandomNum+".png";
document.querySelectorAll("img")[0].setAttribute("src",replace);

var RandomNum2 = Math.floor(Math.random()*6)+1;
var replace2 = "./images/dice"+RandomNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",replace2);

 if(RandomNum2>RandomNum){
    document.querySelector("h1").innerHTML="Player 2 wins ";
}
 else if(RandomNum2<RandomNum)
{
    document.querySelector("h1").innerHTML="Player 1 wins ";
}
 else{
    document.querySelector("h1").innerHTML="Its a Tie ";
}