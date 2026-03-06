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

document.getElementById("form").addEventListener("submit",async(e)=>{

e.preventDefault();

const p1=document.getElementById("p1").value;
const p2=document.getElementById("p2").value;
const p3=document.getElementById("p3").value;
const p4=document.getElementById("p4").value;

const embed={

title:"Nueva postulación Abyssal",

color:10181046,

thumbnail:{
url:`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
},

fields:[

{
name:"Usuario",
value:`${user.username} (${user.id})`
},

{
name:"¿Por qué elegirte?",
value:p1
},

{
name:"Motivación staff",
value:p2
},

{
name:"Cualidades",
value:p3
},

{
name:"Extra",
value:p4 || "Nada"
}

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

document.getElementById("form").reset();

});