const webhook="https://discord.com/api/webhooks/1479434819267199047/xlL5ulI0lMyGduFZI1mP33QwF9qNYkXH0GQhxUyEHLRufsPr5Z-gzyyur457wnXM57S3";

document.getElementById("form").addEventListener("submit",async e=>{

e.preventDefault();

const data=new FormData(e.target);

const user=JSON.parse(localStorage.getItem("discord_user"));

const avatar=`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;

const payload={

embeds:[{

title:"Nueva postulación Staff Abyssal",

color:9442302,

thumbnail:{url:avatar},

fields:[

{name:"Usuario",value:user.username},

{name:"ID",value:user.id},

{name:"Edad",value:data.get("edad")},

{name:"Discord",value:data.get("discord")},

{name:"Discusión miembros",value:data.get("situacion1")},

{name:"Filtración staff",value:data.get("situacion2")},

{name:"Regla nueva",value:data.get("situacion3")},

{name:"Abuso permisos",value:data.get("situacion4")},

{name:"Por qué elegirte",value:data.get("p1")},

{name:"Motivación",value:data.get("p2")},

{name:"Cualidades",value:data.get("p3")},

{name:"Extra",value:data.get("p4")}

],

timestamp:new Date()

}]

};

await fetch(webhook,{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(payload)

});

alert("Solicitud enviada correctamente");

});