var url = 'http://localhost:8080/api/v1';
var url_login = '/auth/signin';

$("#submit").click(function () {
    console.log(url+url_login);
    var data = {username:$('#boleta').val(), 
                password:$('#contrasena').val()};
    $.ajax({
        url: url+url_login,
        data : JSON.stringify(data),
        method: 'POST',
        dataType : 'json',
        contentType: "application/json; charset=utf-8",
        success : function(json) {
            login(json);
        },
        error : function(error) {
            console.log(error);
            
        }
    })
    
});

function login(data){
    var accessToken = data.accessToken;
    var tokenType = data.tokenType;
    autorizar(tokenType,accessToken);
}

function autorizar(tokenType,accessToken){
    $.ajax({
        url: url+'/student',
        method: 'GET',
        headers: {
            "Authorization": tokenType+' '+accessToken
          },
        success : function(json) {
            console.log(json);
            //window.location.href="http://localhost/sahe/alumno/index.html";
        },
        error : function(error) {
            alert(error);
            console.log(error);

        }
    })
}