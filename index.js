document.addEventListener("DOMContentLoaded", function() {
   console.log("Loaded");
    document.querySelector(".dot1").style.backgroundColor="black";
});


document.querySelector(".Left-button").addEventListener("click", function(){

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
        document.querySelector(".Self-Esteem-div").style.display = "none";
        document.querySelector(".health-div").style.display = "block";
    }
    else if(document.querySelector(".dot3").style.backgroundColor==="black") {
        document.querySelector(".dot3").style.backgroundColor = "transparent";
        document.querySelector(".dot2").style.backgroundColor = "black";
        document.querySelector(".health-div").style.display = "none";
        document.querySelector(".relationship-div").style.display = "block";
    }
    else if(document.querySelector(".dot2").style.backgroundColor==="black") {
        document.querySelector(".dot2").style.backgroundColor = "transparent";
        document.querySelector(".dot1").style.backgroundColor = "black";
        document.querySelector(".relationship-div").style.display = "none";
        document.querySelector(".mental-div").style.display = "block";
    }

});

document.querySelector(".Right-button").addEventListener("click", function(){

    if(document.querySelector(".dot1").style.backgroundColor==="black") {
        document.querySelector(".dot1").style.backgroundColor = "transparent";
        document.querySelector(".dot2").style.backgroundColor = "black";
        document.querySelector(".mental-div").style.display = "none";
        document.querySelector(".relationship-div").style.display = "block";
    }
    else if(document.querySelector(".dot2").style.backgroundColor==="black") {
        document.querySelector(".dot2").style.backgroundColor = "transparent";
        document.querySelector(".dot3").style.backgroundColor = "black"
        document.querySelector(".relationship-div").style.display = "none";
        document.querySelector(".health-div").style.display = "block";
    }
    else if(document.querySelector(".dot3").style.backgroundColor==="black") {
        document.querySelector(".dot3").style.backgroundColor = "transparent";
        document.querySelector(".dot4").style.backgroundColor = "black";
        document.querySelector(".health-div").style.display = "none";
        document.querySelector(".Self-Esteem-div").style.display = "block";
    }
    else if(document.querySelector(".dot4").style.backgroundColor==="black") {
        document.querySelector(".dot4").style.backgroundColor = "transparent";
        document.querySelector(".dot5").style.backgroundColor = "black";
        document.querySelector(".Self-Esteem-div").style.display = "none";
        document.querySelector(".Purpose-div").style.display = "block";
    }
    else if(document.querySelector(".dot5").style.backgroundColor==="black") {
        document.querySelector(".dot5").style.backgroundColor = "transparent";
        document.querySelector(".dot1").style.backgroundColor = "black";
        document.querySelector(".Purpose-div").style.display = "none";
        document.querySelector(".mental-div").style.display = "block";
    }


});