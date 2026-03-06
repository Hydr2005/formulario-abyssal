const webhook="https://discord.com/api/webhooks/1479434819267199047/xlL5ulI0lMyGduFZI1mP33QwF9qNYkXH0GQhxUyEHLRufsPr5Z-gzyyur457wnXM57S3";

const form=document.getElementById("form");
const inputs=document.querySelectorAll("input,textarea");
const progress=document.getElementById("progress");

inputs.forEach(i=>{
i.addEventListener("input",updateProgress);
});

function updateProgress(){

let filled=0;

inputs.forEach(i=>{
if(i.value.trim()!=="") filled++;
});

let percent=(filled/inputs.length)*100;

progress.style.width=percent+"%";

}

form.addEventListener("submit",async function(e){

e.preventDefault();

const data=new FormData(form);

const mensaje={
content:`
📨 **Nueva Postulación Staff Abyssal**

👤 Usuario: ${data.get("discord_nombre")}
🆔 ID: ${data.get("discord_id")}
🎂 Edad: ${data.get("edad")}

🗣 Discusión miembros
${data.get("discusion")}

🔎 Filtración
${data.get("filtracion")}

📜 Regla nueva
${data.get("regla")}

⚠ Abuso de permisos
${data.get("abuso")}

⭐ Por qué elegirte
${data.get("porque_elegirte")}

🔥 Motivación
${data.get("motivacion")}

💪 Cualidades
${data.get("cualidades")}

➕ Extra
${data.get("extra")}
`
};

await fetch(webhook,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(mensaje)
});

alert("Formulario enviado correctamente");

form.reset();

progress.style.width="0%";

});