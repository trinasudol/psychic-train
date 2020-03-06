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

document.getElementById("remove-option").addEventListener("submit", remove);
document.getElementById("add-option").addEventListener("submit", add);

function remove(event1) {
    event1.preventDefault();
    var badOption = document.querySelector('input[name = "option"]:checked').value;
    document.getElementById(badOption).remove();
    for (o in options) {
        if (options[o]==badOption) {
            options.splice(o,1);
        }
    }
    console.log(options);
}

function add(event2) {
    event2.preventDefault();
    var newOption = document.querySelector('input[name = "add-option"]').value;
    options[options.length] = newOption;
    console.log(options);
    // var button = document.createElement("input")
    // document.getElementById("remove-option").appendChild(button);
}