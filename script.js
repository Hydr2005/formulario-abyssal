const textareas = document.querySelectorAll("textarea")
const counters = document.querySelectorAll(".counter")
const progress = document.getElementById("progress-bar")

textareas.forEach((t,i)=>{

t.addEventListener("input",()=>{

let max = t.getAttribute("maxlength")

counters[i].innerText = t.value.length + "/" + max

updateProgress()

})

})

function updateProgress(){

let filled = 0

textareas.forEach(t=>{

if(t.value.length > 0) filled++

})

let percent = (filled / textareas.length) * 100

progress.style.width = percent + "%"

}
