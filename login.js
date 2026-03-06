const CLIENT_ID = "1479450889654763520";

const REDIRECT_URI = "https://TUUSUARIO.github.io/abyssal-form/callback.html";

function login(){

const url = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=token&scope=identify`;

window.location.href = url;

}