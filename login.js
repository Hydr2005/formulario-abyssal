const client_id="1479450889654763520";

const redirect=window.location.origin+"/callback.html";

document.getElementById("login").onclick=function(){

const url=
"https://discord.com/oauth2/authorize"+
"?client_id="+client_id+
"&response_type=token"+
"&redirect_uri="+encodeURIComponent(redirect)+
"&scope=identify";

window.location=url;

};