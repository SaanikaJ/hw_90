var player1name = localStorage.getItem("Player 1 Name:"); 
console.log("Player 1 name is " + player1name); 

var player2name = localStorage.getItem("Player 2 Name:");
console.log("Player 2 name is " + player2name);  

var player1score = 0;
var player2score = 0; 

document.getElementById("player1name_").innerHTML = player1name + ": ";
document.getElementById("player2name_").innerHTML = player2name + ": ";

document.getElementById("player1_score").innerHTML = player1score; 
document.getElementById("player2_score").innerHTML = player2score; 

document.getElementById("player_question").innerHTML = "Question turn - " + player1name; 
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2name; 

function send(){
    var no1 = document.getElementById("no1").value; 
    var no2 = document.getElementById("no2").value; 

    var actual_ans = parseInt(no1) * parseInt(no2); 
    console.log(actual_ans);

    var question_word = "<h4>" + no1 + " X " + no2 + " = </h4>"; 
    var input_box = "<br> Answer: <input type = 'text' id = 'input_check_box'> </br> ";
    var chk_btn = "<br> <br> <button class = 'btn btn-info' onclick = 'check()'> Check </button>"; 
    var row = question_word + input_box + chk_btn; 
    document.getElementById("output").innerHTML = row; 
    document.getElementById("no1").value = " "; 
    document.getElementById("no2").value = " ";  
}