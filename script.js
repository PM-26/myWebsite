document.addEventListener("mousemove",function(e){
    let x=e.clientX;
    let y=e.clientY;

    document.querySelector("#cursor").style.top=y+"px";
    document.querySelector("#cursor").style.left=x+"px";
})

bars=document.getElementById("bars");
nav=document.getElementById("ul");
bars.addEventListener("click",()=>{
    nav.classList.toggle("active");
})