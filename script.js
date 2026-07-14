let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let message = document.getElementById("message");

yesBtn.addEventListener("click",()=>{

    message.innerHTML="🥹 Thank you! I promise I'll do better. ❤️🌹";

});

noBtn.addEventListener("mouseover",()=>{

    let x=Math.random()*250;

    let y=Math.random()*200;

    noBtn.style.left=x+"px";

    noBtn.style.top=y+"px";

});