var questions = ["23 + 54", "45 + 12", "34 + 78"];
var options = ["31", "77", "67", "75", "33", "47", "57", "67", "1012", "112", "44", "121"];
var answers = ["77", "57", "112"];
var count = 1;
var whichquestion = 0;
var whichid;
var choice;
var choiceid;
var clickedornot = 0;
var styleid;
var score = 0;
var streak = 0;
var scoredisplay;
var oldscore = 0;
var length;
var username;
var namescore;
var table;
var oldtable;
var nameinput;
var nametosave;
var scoretosave;
scoresandnames=[];
function start() {
    document.getElementById("question" + (whichquestion + 1)).innerHTML = questions[whichquestion];
    showorhide();
    setoptions();
    displayscore();
}
function setoptions() {
    for (count = 1; count <= 4; count++) {
        whichid = count + (whichquestion * 4);
        document.getElementById("option" + whichid).innerHTML = options[count + (whichquestion * 4) - 1];
        document.getElementById("option" + whichid).style.backgroundColor = "#292929";
    }
}
function question11() {
    choice = options[(whichquestion * 4) + 1 - 1];
    choiceid = 1 + (whichquestion * 4);
    check();
}
function question12() {
    choice = options[(whichquestion * 4) + 2 - 1];
    choiceid = 2 + (whichquestion * 4);
    check();
}
function question13() {
    choice = options[(whichquestion * 4) + 3 - 1];
    choiceid = 3 + (whichquestion * 4);
    check();
}
function question14() {
    choice = options[(whichquestion * 4) + 4 - 1];
    choiceid = 4 + (whichquestion * 4);
    check();
}
function check() {
    console.log(choice);
    if (clickedornot == 0) {
        if (choice == answers[whichquestion]) {
            document.getElementById("option" + choiceid).style.backgroundColor = "#32a852";
            document.getElementById("option" + choiceid).style.width = "150px";
            document.getElementById("option" + choiceid).style.height = "30px";
            oldscore = score;
            for (count = 1; count <= 100; count++) {
                score = oldscore + count;
            }
            streak++;
            oldscore = score;
            if (streak == 2) {
                for (count = 1; count <= 50; count++) {
                    score = oldscore + count;
                }
            }
            oldscore = score;
            if (streak == 3) {
                for (count = 1; count <= 100; count++) {
                    score = oldscore+count;
                }
            }
            console.log(score);
            displayscore();
        }
        else {
            document.getElementById("option" + choiceid).style.backgroundColor = "#eb4034";
            document.getElementById("option" + choiceid).style.width = "150px";
            document.getElementById("option" + choiceid).style.height = "30px";
            for (count = 1; count <= 4; count++) {
                whichid = count + (whichquestion * 4);
                if (document.getElementById("option" + whichid).innerHTML == answers[whichquestion])
                    document.getElementById("option" + whichid).style.backgroundColor = "#32a852";
            }
            streak = 0;
        }
        clickedornot = 1;
    }
}
function next() {
    whichquestion++;
    showorhide();
    start();
    clickedornot = 0;
}
function showorhide() {
    if (whichquestion == 0) {
        document.getElementById("q1").style.display = "block";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("highscores").style.display = "none";
        document.getElementById("savescore").style.display = "none";
    }
    if (whichquestion == 1) {
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "block";
        document.getElementById("q3").style.display = "none";
        document.getElementById("highscores").style.display = "none";
        document.getElementById("savescore").style.display = "none";
    }
    if (whichquestion == 2) {
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "block";
        document.getElementById("highscores").style.display = "none";
        document.getElementById("savescore").style.display = "none";
    }
    if (whichquestion == "highscores") {
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("highscores").style.display = "block";
        document.getElementById("savescore").style.display = "none";
    }
    if (whichquestion == "savescore") {
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("highscores").style.display = "none";
        document.getElementById("savescore").style.display = "block";
    }
}
function hover1() {
    if (clickedornot == 0) {
        styleid = 1 + (whichquestion * 4);
        document.getElementById("option" + styleid).style.backgroundColor = "#333333";
        document.getElementById("option" + styleid).style.width = "160px";
        document.getElementById("option" + styleid).style.height = "35px";
    }
}
function hover2() {
    if (clickedornot == 0) {
        styleid = 2 + (whichquestion * 4);
        document.getElementById("option" + styleid).style.backgroundColor = "#333333";
        document.getElementById("option" + styleid).style.width = "160px";
        document.getElementById("option" + styleid).style.height = "35px";
    }
}
function hover3() {
    if (clickedornot == 0) {
        styleid = 3 + (whichquestion * 4);
        document.getElementById("option" + styleid).style.backgroundColor = "#333333";
        document.getElementById("option" + styleid).style.width = "160px";
        document.getElementById("option" + styleid).style.height = "35px";
    }
}
function hover4() {
    if (clickedornot == 0) {
        styleid = 4 + (whichquestion * 4);
        document.getElementById("option" + styleid).style.backgroundColor = "#333333";
        document.getElementById("option" + styleid).style.width = "160px";
        document.getElementById("option" + styleid).style.height = "35px";
    }
}
function out1() {
    if (clickedornot == 0) {
        styleid = 1 + (whichquestion * 4);
        document.getElementById("option" + styleid).style.backgroundColor = "#292929";
        document.getElementById("option" + styleid).style.width = "150px";
        document.getElementById("option" + styleid).style.height = "30px";
    }
}
function out2() {
    if (clickedornot == 0) {
        styleid = 2 + (whichquestion * 4);
        document.getElementById("option" + styleid).style.backgroundColor = "#292929";
        document.getElementById("option" + styleid).style.width = "150px";
        document.getElementById("option" + styleid).style.height = "30px";
    }
}
function out3() {
    if (clickedornot == 0) {
        styleid = 3 + (whichquestion * 4);
        document.getElementById("option" + styleid).style.backgroundColor = "#292929";
        document.getElementById("option" + styleid).style.width = "150px";
        document.getElementById("option" + styleid).style.height = "30px";
    }
}
function out4() {
    if (clickedornot == 0) {
        styleid = 4 + (whichquestion * 4);
        document.getElementById("option" + styleid).style.backgroundColor = "#292929";
        document.getElementById("option" + styleid).style.width = "150px";
        document.getElementById("option" + styleid).style.height = "30px";
    }
}
function displayscore(){
    scoredisplay = "Score : " + score;
    document.getElementById("score"+(whichquestion+1)).innerHTML = scoredisplay;
}
function highscores(){
whichquestion ="highscores";
showorhide();
setscores();
}
function setscores(){
    scoresandnames=localStorage.getItem("quizdata");
    scoresandnames = scoresandnames.split(',');
    console.log(scoresandnames);
    length = (scoresandnames.length)/2;
    console.log(length);
    table ="<tr><th>Name</th><th>Score</th></tr> ";0
    for (count = 0; count <= length-1; count++) {
        username = scoresandnames[(count)*2];
        namescore = scoresandnames[(count*2)+1];
        oldtable = table;
        table = oldtable+' <tr> <td>'+username+'</td><td>'+namescore+'</td> </tr> ';
    }
    console.log(table);
    document.getElementById("scores").innerHTML= table; 
     
}
function home(){
whichquestion = 0;
start();
}
function savescore(){
    whichquestion="savescore";
    showorhide();
}
function save(){
    scoresandnames= localStorage.getItem("quizdata");
    scoresandnames = scoresandnames.split(',');
    nameinput = document.getElementById("entername").value;
    nametosave = nameinput;
    scoretosave = score;
    scoresandnames.push(nametosave);
    scoresandnames.push(scoretosave);
    localStorage.setItem("quizdata", String(scoresandnames));
    console.log(scoresandnames);
}