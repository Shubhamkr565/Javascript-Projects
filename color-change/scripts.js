function getcolor() {
     const randomnunber = Math.floor(Math.random()*16777215);
     const randomcode = "#"+randomnunber.toString(16); 
     console.log(randomnunber , randomcode); 
     document.body.style.backgroundColor  = randomcode;
     document.getElementById("color-code").innerText = randomcode;
}

document.getElementById(btn).addEventListener(
    "click",
    getcolor
)

getcolor();