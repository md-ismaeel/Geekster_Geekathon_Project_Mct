let read=document.querySelector(".read");
let niche=document.querySelector(".niche");
let less=document.querySelector(".less");


// console.log("hyy");
read.addEventListener("click",()=>{
    niche.style.display="block";
    read.style.display="none";
    less.style.display="block";

})

less.addEventListener("click",()=>{
    niche.style.display="none";
    read.style.display="block";
    less.style.display="none";
})

