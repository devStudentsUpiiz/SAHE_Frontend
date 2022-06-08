let info = JSON.parse(localStorage.getItem("headers"));
if(info==null){
    window.location.href = "http://localhost/sahe/401.html";
}else{
    console.log(info);
    document.getElementById('email').innerHTML = info.email;
    document.getElementById('name').innerHTML = info.username;
}