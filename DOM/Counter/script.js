let count = 0;
function increase(){
    count++;
     document.getElementById("v").innerText = count;
}

function decrease(){
    if(count>0){
        count--;
        document.getElementById("v").innerText = count;
    }
}