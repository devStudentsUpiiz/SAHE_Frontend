$('.alerta').hide();
window.localStorage.clear();
var url = 'http://localhost:8080/api/v1';
var url_login = '/auth/signin';

$("#submit").click(function () {
    if ($('#boleta').val() == "") {
        $('#alertaRequiereBol').show();
    } else if ($('#contrasena').val() == "") {
        $('#alertaRequierePass').show();
    } else {
        $('.alerta').hide();
        var data = {
            username: $('#boleta').val(),
            password: $('#contrasena').val()
        };
        signin(data);
    }


});

function signin(data) {
    $.ajax({
        url: url + url_login,
        data: JSON.stringify(data),
        method: 'POST',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (json) {
            autorizar(json);
        },
        error: function (error) {
            $('#alertaLogin').show();
            console.log(error);

        }
    })

}

function autorizar(data) {
    $.ajax({
        url: url + '/student',
        method: 'GET',
        headers: {
            "Authorization": data.tokenType + ' ' + data.accessToken
        },
        success: function (json) {
            console.log(json);
            localStorage.setItem("headers", JSON.stringify(data));
            window.location.href = "http://localhost/sahe/alumno/index.html";
        },
        error: function (error) {
            console.log("Error");

        }
    })
}