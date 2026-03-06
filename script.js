const webhook="https://discord.com/api/webhooks/1479434819267199047/xlL5ulI0lMyGduFZI1mP33QwF9qNYkXH0GQhxUyEHLRufsPr5Z-gzyyur457wnXM57S3";

const token=localStorage.getItem("discord_token");

if(!token){

window.location="index.html";

}

async function getUser(){

const res=await fetch(
"https://discord.com/api/users/@me",
{
headers:{
authorization:"Bearer "+token
}
});

const user=await res.json();

window.user=user;

document.getElementById("user").innerHTML=
`
<img src="https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png" width="60">

<p>${user.username}#${user.discriminator}</p>
`;

}

getUser();

const form=document.getElementById("form");

form.addEventListener("submit",async e=>{

e.preventDefault();

const data=new FormData(form);

const embed={
embeds:[{

title:"Nueva solicitud Staff Abyssal",

color:10181046,

fields:[

{name:"Usuario",value:user.username,true},

{name:"ID",value:user.id,true},

{name:"Edad",value:data.get("edad")},

{name:"Discusión miembros",value:data.get("discusion")},

{name:"Filtración staff",value:data.get("filtracion")},

{name:"Protesta comunidad",value:data.get("regla")},

{name:"Abuso permisos",value:data.get("abuso")},

{name:"Por qué elegirte",value:data.get("porque")},

{name:"Motivación",value:data.get("motivacion")},

{name:"Cualidades",value:data.get("cualidades")},

{name:"Extra",value:data.get("extra")}

]

}]

};

await fetch(webhook,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(embed)
});

alert("Postulación enviada");

form.reset();

});