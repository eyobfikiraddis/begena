var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        whenclicked(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
}

document.addEventListener("keydown", function(event) {
    var x = event.key;
    var y = keyMap[x];
    whenclicked(y);
    buttonAnimation(y);
    
});

function whenclicked(key){
    if (key === "Gs"){
        var v = new Audio("sounds/" + key + ".mp3");
        v.play();
    }
    else {
    var w = new Audio("sounds/" + key + ".m4a");
    w.play();
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
  
 