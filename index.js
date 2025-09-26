var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        whenclicked(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
}

document.addEventListener("keydown", function(event) {
    var x = event.key;
    var y = "";
    if(x === "a"){
        y = "G";
    }
    else if (x === "e"){
        y = "A";
    }
    else if (x === "r"){
        y = "D";
    }
    else if(x === "t"){
        y = "C";
    }
    else{
        y = "F"
    }
    whenclicked(y);
    buttonAnimation(y);
    
});

function whenclicked(key){
    switch (key) {
        case "F":
            var w = new Audio("sounds/F.m4a");
            w.play();
            break;
        case "C":
            var a = new Audio("sounds/C.m4a");
            a.play();
            break;
        case "D":
            var s = new Audio("sounds/D.m4a");
            s.play();
            break;
        case "A":
            var d = new Audio("sounds/A.m4a");
            d.play();
            break;
        case "G":
            var j = new Audio("sounds/G.m4a");
            j.play();
            break;
        default:
            console.log(buttoninnerhtml);
    }
}
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}


document.getElementById("pageSelect").addEventListener("change", function() {
  const selectedPage = this.value;
  if (selectedPage) {
    window.location.href = selectedPage;
  }
});
  
 