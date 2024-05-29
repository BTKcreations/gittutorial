
function decrease(){
    var count = parseInt(document.getElementById("number").innerHTML);
    count -= 1;
    document.getElementById("number").innerHTML = count;

    if (count < 0){
        document.getElementById("number").style.color = "red";
    }
}

function reset(){
    var count = 0;
    document.getElementById("number").innerHTML = count;
    
    if (count = 0){
        document.getElementById("number").style.color = "black";
    }
}

function increase(){
    var count = parseInt(document.getElementById("number").innerHTML);
    count += 1;
    document.getElementById("number").innerHTML = count;

    if (count > 0){
        document.getElementById("number").style.color = "green";
    }
}

/*

Description: This code does the following:
1. It declares a function called `decrease()` that subtracts 1 from the number displayed on the page and changes the color of the number to red if it becomes negative.
2. It declares a function called `reset()` that sets the number displayed on the page to 0 and changes the color of the number to black.
3. It declares a function called `increase()` that adds 1 to the number displayed on the page and changes the color of the number to green if it becomes positive.

*/

// This is a comment to indicate that the code works as intended.