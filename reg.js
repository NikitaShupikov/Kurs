
function homless(){
 window.location.href = 'home.html'
}
const reg = document.getElementById("regs")
const entr = document.getElementById("entr")
const el1 = document.getElementById("email")
const el2 = document.getElementById("ps1")

reg.addEventListener("click",()=>{
entr.style.width = "35%"
entr.style.height = "32%"
el1.style.display = "block"
el2.style.display = "block"

reg.style.width = "40%"
reg.style.height = "36%"
reg.style.fontSize ="2vw";
entr.style.fontSize ="1.4vw";
});
entr.addEventListener("click",()=>{
reg.style.width = "35%"
reg.style.height = "32%"
el1.style.display = "none"
el2.style.display = "none"

entr.style.width = "40%"
entr.style.height = "36%"
entr.style.fontSize ="2vw";
reg.style.fontSize ="1.4vw";
});


