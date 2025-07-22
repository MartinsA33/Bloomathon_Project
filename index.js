document.addEventListener("DOMContentLoaded", function() {
   console.log("Loaded");
    document.querySelector(".dot1").style.backgroundColor="black";
});

let clicked=0;
document.querySelector(".Left-button").addEventListener("click", function(){
    clicked++;
    console.log("clicked");
    if(document.querySelector(".dot1").style.backgroundColor==="black") {
        document.querySelector(".dot1").style.backgroundColor = "transparent";
        document.querySelector(".dot5").style.backgroundColor = "black";
        document.querySelector(".mental-div").style.display = "none";
        document.querySelector(".Purpose-div").style.display = "block";
    }
    else if(document.querySelector(".dot5").style.backgroundColor==="black") {
        document.querySelector(".dot5").style.backgroundColor = "transparent";
        document.querySelector(".dot4").style.backgroundColor = "black"
        document.querySelector(".Purpose-div").style.display = "none";
        document.querySelector(".Self-Esteem-div").style.display = "block";
    }
    else if(document.querySelector(".dot4").style.backgroundColor==="black") {
        document.querySelector(".dot4").style.backgroundColor = "transparent";
        document.querySelector(".dot3").style.backgroundColor = "black";
    }
    else if(document.querySelector(".dot3").style.backgroundColor==="black") {
        document.querySelector(".dot3").style.backgroundColor = "transparent";
        document.querySelector(".dot2").style.backgroundColor = "black";
    }
    else if(document.querySelector(".dot2").style.backgroundColor==="black") {
        document.querySelector(".dot2").style.backgroundColor = "transparent";
        document.querySelector(".dot1").style.backgroundColor = "black";
    }

});