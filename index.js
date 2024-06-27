var randomNumber1 = Math.floor(Math.random()*6) + 1;
console.log("randomNumber1 : "+randomNumber1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
console.log("randomNumber2 : "+randomNumber2);

$(".img1").attr("src","./images/dice"+randomNumber1+".png");
$(".img2").attr("src","./images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2){
    $("h1").text("🏆Player1 Wins!");
}else if(randomNumber2>randomNumber1){
    $("h1").text("Player2 Wins!🏆");
}else{
    $("h1").text("Draw🏳️Game!");
}