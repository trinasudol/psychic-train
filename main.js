var a = 1;
var i = 0;
var n = 50;
var s = "";
var stop = false;
var options = ["paint", "listen to music", "write", 
"watch bojack episodes that won't make us sadddddd !!!", "twister", 'make "galletas" heheheh', 
"eat paper", "wander aimlessly", "zoo !", "soulard farmers market", 
"pageant/delmar hall concert", "jeni's", "gramophone slash tower grove", "food lol", 
"rudolph hall", "city museum if ur feelin energetic and down for tight spaces", 
"forest parkkkk", "barcade or arcade if not feeling booze", "smh explanation", 
"the impossible quiz", "go into a ladies bathroom", "naked blankets!", 
"hand deliver the letter to the pres of wash u", "vitality bowls", "watch a scary movie", 
"joker", "walle", "up", "piper", 
"make some dope ass paper planes and try to throw them in the dumpster", 
"hangout in the stairwell", "do it? uhhhh ~no~", "bucket lists", "fight", "dark knight"];

document.getElementById("spinning-wheel").addEventListener("click", spin);

function spin() {
    document.getElementById("spinning-wheel").removeEventListener("click", spin);
    a = (a+45)%360;
    s = "rotate(" + a + "deg)";
    document.getElementById("wheel").style.transform = s;
    document.getElementById("spin-the-wheel").style.color = "rgb(25, 25, 25)";
    i++;
    if (i<n) {
        setTimeout(spin, 80);
    }
    else {
        document.getElementById("spinning-wheel").addEventListener("click", spin);
        document.getElementById("spin-the-wheel").style.color = "rgb(214, 214, 214)";
        i = 0;
        choose();
    }
}

function choose() {
    var o = Math.floor(Math.random()*options.length);
    document.getElementById("choice").innerHTML = options[o];
}