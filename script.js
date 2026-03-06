const form = document.getElementById("form");

form.addEventListener("submit", async function(e){

e.preventDefault();

const webhook="https://discord.com/api/webhooks/1479434819267199047/xlL5ulI0lMyGduFZI1mP33QwF9qNYkXH0GQhxUyEHLRufsPr5Z-gzyyur457wnXM57S3";

const data = new FormData(form);

const mensaje = {
content: `
📩 **Nueva Postulación Staff**

🆔 **ID Discord:** ${data.get("discord_id")}
👤 **Usuario:** ${data.get("discord_nombre")}
🎂 **Edad:** ${data.get("edad")}

💬 **Discusión entre miembros**
${data.get("discusion")}

🔎 **Filtración de información**
${data.get("filtracion")}

📜 **Regla nueva**
${data.get("regla")}

⚠ **Abuso de permisos**
${data.get("abuso")}

⭐ **Por qué elegirte**
${data.get("porque_elegirte")}

🔥 **Motivación**
${data.get("motivacion")}

💪 **Cualidades**
${data.get("cualidades")}

➕ **Extra**
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

});