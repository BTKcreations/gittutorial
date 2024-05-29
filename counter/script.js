
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