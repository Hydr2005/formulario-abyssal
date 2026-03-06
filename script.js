const WEBHOOK = "https://discord.com/api/webhooks/1479434819267199047/xlL5ulI0lMyGduFZI1mP33QwF9qNYkXH0GQhxUyEHLRufsPr5Z-gzyyur457wnXM57S3";

const user = JSON.parse(localStorage.getItem("discord_user"));

if(!user){

window.location.href="index.html";

}

document.getElementById("user").innerHTML = `
<div class="user-box">
<img src="https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png">
<span>${user.username}#${user.discriminator}</span>
</div>
`;

const textareas = document.querySelectorAll("textarea");
const counters = document.querySelectorAll(".counter");
const progress = document.getElementById("progress-bar");

textareas.forEach((t,i)=>{

t.addEventListener("input",()=>{

let max = t.getAttribute("maxlength");

counters[i].innerText = t.value.length + "/" + max;

updateProgress();

});

});

function updateProgress(){

let filled = 0;

textareas.forEach(t=>{
if(t.value.length > 0) filled++;
});

progress.style.width = (filled/textareas.length)*100 + "%";

}

document.getElementById("form").addEventListener("submit",async(e)=>{

e.preventDefault();

const answers = [...textareas].map(t=>t.value);

const embed = {

title:"Nueva Postulación Abyssal",

color:10181046,

thumbnail:{
url:`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
},

fields:[

{name:"Usuario",value:`${user.username} (${user.id})`},

{name:"Respuesta 1",value:answers[0]},
{name:"Respuesta 2",value:answers[1]},
{name:"Respuesta 3",value:answers[2]},
{name:"Respuesta 4",value:answers[3]},
{name:"Respuesta 5",value:answers[4]},
{name:"Respuesta 6",value:answers[5]},
{name:"Respuesta 7",value:answers[6]}

]

};

await fetch(WEBHOOK,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
embeds:[embed]
})

});

alert("Postulación enviada correctamente");

});
