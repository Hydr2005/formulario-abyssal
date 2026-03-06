const CLIENT_ID = "1479450889654763520"
const REDIRECT_URI = "https://hydr2005.github.io/formulario-abyssal/callback.html"

document.getElementById("login").onclick = () => {

const url =

`https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=identify`

window.location.href = url

}
