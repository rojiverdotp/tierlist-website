function lmao(button) {
    let a = document.getElementById(button).innerHTML;

    if (a == "Q1") {
        document.getElementById("s").innerHTML = "bio, cs, math, ss";
        document.getElementById("a").innerHTML = "eng, health, pe, p6, valed";
        document.getElementById("b").innerHTML = "chem, fil, music";
        document.getElementById("c").innerHTML = "res";
    } else if (a == "Q2") {
        document.getElementById("s").innerHTML = "math, ss";
        document.getElementById("a").innerHTML = "bio, chem, cs, p6";
        document.getElementById("b").innerHTML = "eng, fil, health, music, pe, valed";
        document.getElementById("c").innerHTML = "res";
    } else if (a == "Q3") {
        document.getElementById("s").innerHTML = "cs, ss";
        document.getElementById("a").innerHTML = "bio, health, math, music";
        document.getElementById("b").innerHTML = "eng, fil, pe, p6, res, valed";
        document.getElementById("c").innerHTML = "chem";
    } else if (a == "Q4") {
        document.getElementById("s").innerHTML = "";
        document.getElementById("a").innerHTML = "";
        document.getElementById("b").innerHTML = "";
        document.getElementById("c").innerHTML = "";
    }
}