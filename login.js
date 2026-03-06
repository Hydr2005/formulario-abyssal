const CLIENT_ID = "1479450889654763520";

const REDIRECT = "https://hydr2005.github.io/formulario-abyssal/callback.html";

const url =
`https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT)}&scope=identify`;

document.getElementById("login").onclick = () => {

window.location.href = url;

};

